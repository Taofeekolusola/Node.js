const express = require('express');
const { exec } = require('child_process');

const app = express();
const port = 3000;

app.get('/run-test', (req, res) => {
  // Replace 'script.js' with the path to your script
  exec('node test1.js', (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      res.status(500).send(`Error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.error(`stderr: ${stderr}`);
      res.status(500).send(`stderr: ${stderr}`);
      return;
    }
    res.send(`stdout: ${stdout}`);
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});