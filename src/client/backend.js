const express = require('express');
const bodyParser = require('body-parser');
const { PythonShell } = require('python-shell');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());

app.post("/updateCode", (req, res, next) => {
  const { code } = req.body;

  let options = {
    mode: 'text',
    pythonOptions: ['-u'],
    scriptPath: '/Users/david/editor', // Update the path to the Python script accordingly
    args: [code]
  };

  PythonShell.run('editor.py', options, function (err, result) {
    if (err) {
      console.error('Error executing Python script:', err);
      res.status(500).json({ error: 'Failed to execute Python script' });
    } else {
      console.log('result:', result.toString());
      res.send(result.toString());
    }
  });
});

app.listen(port, () => {
  console.log(`Server running at http://127.0.0.1:${port}/`);
});