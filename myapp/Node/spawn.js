//const cp = require('child_process')

//cp.execSync('calc')

//cp.execSync('start chrome https://www.linkedin.com/feed/')
//console.log('chrome started successfully')

//console.log('output: ' + cp.execSync('node test.js'))

const express = require('express');
const { spawn } = require('child_process');
const path = require('path');

const app = express();
const port = 3000;

// Define the route to run the test script
app.get('/run-test', (req, res) => {
  // Get the path to the test.js file
  const scriptPath = path.join(__dirname, 'test.js');

  // Spawn a child process to execute the test.js script
  const child = spawn('node', [scriptPath]);

  let output = '';

  // Capture the stdout from the child process
  child.stdout.on('data', (data) => {
    output += data.toString();
  });

  // Capture the stderr from the child process
  child.stderr.on('data', (data) => {
    console.error(`stderr: ${data}`);
    output += `stderr: ${data.toString()}`;
  });

  // When the child process exits, send the result back to the client
  child.on('close', (code) => {
    res.send(`Test script exited with code ${code}. Output:\n${output}`);
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
