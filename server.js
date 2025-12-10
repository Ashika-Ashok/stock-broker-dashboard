// server.js
const WebSocket = require('ws');

const PORT = 4000;
const wss = new WebSocket.Server({ port: PORT });

const TICKERS = ['GOOG','TSLA','AMZN','META','NVDA'];
// base prices
const prices = {
  GOOG: 130.00,
  TSLA: 220.00,
  AMZN: 100.00,
  META: 240.00,
  NVDA: 420.00
};

// For small random walk
function randomWalk(price) {
  // ± up to 1.5%
  const changePct = (Math.random() - 0.5) * 0.03;
  let newPrice = price * (1 + changePct);
  // Round to 2 decimals
  return Math.max(0.01, Math.round(newPrice * 100) / 100);
}

wss.on('connection', function connection(ws, req) {
  console.log('Client connected');

  ws.isAlive = true;
  ws.on('pong', () => { ws.isAlive = true; });

  ws.on('message', function incoming(message) {
    try {
      const msg = JSON.parse(message);
      if (msg.type === 'identify') {
        ws.email = msg.email;
        console.log('Identify:', ws.email);
      } else if (msg.type === 'subscribe') {
        // just store on socket for debugging
        ws.subscriptions = ws.subscriptions || new Set();
        ws.subscriptions.add(msg.ticker);
        // optional ack
        ws.send(JSON.stringify({ type: 'subscribed', ticker: msg.ticker }));
      } else if (msg.type === 'unsubscribe') {
        ws.subscriptions = ws.subscriptions || new Set();
        ws.subscriptions.delete(msg.ticker);
        ws.send(JSON.stringify({ type: 'unsubscribed', ticker: msg.ticker }));
      }
    } catch (e) {
      console.error('Invalid message', e);
    }
  });

  ws.on('close', () => {
    console.log('Client disconnected');
  });

});

// Broadcast prices every second
setInterval(() => {
  // update prices
  TICKERS.forEach(t => {
    prices[t] = randomWalk(prices[t]);
  });

  const payload = {
    type: 'prices',
    timestamp: Date.now(),
    prices
  };

  const data = JSON.stringify(payload);
  wss.clients.forEach(client => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(data);
    }
  });
}, 1000);

// heartbeat to detect dead clients
setInterval(() => {
  wss.clients.forEach(ws => {
    if (!ws.isAlive) return ws.terminate();
    ws.isAlive = false;
    ws.ping();
  });
}, 30000);

console.log(`WebSocket price server running on ws://localhost:${PORT}`);
