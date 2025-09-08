const net = require('net');

function findPort(startPort = 3000, endPort = 9000) {
  return new Promise((resolve, reject) => {
    const testPort = (port) => {
      if (port > endPort) {
        reject(new Error('No available ports found'));
        return;
      }

      const server = net.createServer();
      server.once('error', () => {
        // Port is in use, try the next one
        testPort(port + 1);
      });
      
      server.once('listening', () => {
        server.close(() => {
          resolve(port);
        });
      });
      
      server.listen(port, '0.0.0.0');
    };
    
    testPort(startPort);
  });
}

// Find and log the first available port between 3000 and 9000
findPort(3000, 9000)
  .then(port => {
    console.log(`Found available port: ${port}`);
  })
  .catch(err => {
    console.error('Error finding port:', err);
  });
