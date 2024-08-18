process.on('message', (message) => {
    if (message === 'start') {
      console.log('Child process received start message');
      
      // Perform some actions, e.g., run some tests, calculations, etc.
      let result = 'Test complete.';
  
      // Send a message back to the parent process
      process.send(result);
  
      // Optionally exit the child process
      process.exit(0);
    }
  });
  
  // You can also have some code that runs automatically
  console.log('test2.js script is running');