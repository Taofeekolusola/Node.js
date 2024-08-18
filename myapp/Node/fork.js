const express = require('express');
const { fork } = require('child_process');
const path = require('path');

const app = express();
const port = 3000;

app.get('/run-test', (req, res) => {
  // Construct the path to the test.js file in the same directory
  const testFilePath = path.join(__dirname, 'test2.js');

  // Fork a child process to run test.js
  const child = fork(testFilePath);

  // Handle messages from the child process
  child.on('message', (message) => {
    console.log(`Message from child: ${message}`);
    // Send the message back to the client
    res.write(`Message from child: ${message}\n`);
  });

  // Handle errors from the child process
  child.on('error', (error) => {
    console.error(`Error from child process: ${error}`);
    res.status(500).send(`Error from child process: ${error.message}`);
  });

  // Handle the close event when the child process exits
  child.on('close', (code) => {
    console.log(`Child process exited with code ${code}`);
    res.end(`Child process exited with code ${code}`);
  });

  // Optional: Send a message to the child process
  child.send('start');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});