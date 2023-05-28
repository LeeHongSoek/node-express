const express = require('express'); // npm install express
const ws = require('ws'); // npm install ws

// Create a new Express app.
const app = express();

// Create a new WebSocket server.
const wss = new ws.Server({
  server: app.listen(3000)
});

// Handle WebSocket connections.
wss.on('connection', (ws) => {
  // Send a message to the client.
  ws.send('Hello, client!');

  // Listen for messages from the client.
  ws.on('message', (message) => {
    console.log('Received message from client:', message);
  });
});

// Start the server.
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
