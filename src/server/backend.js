const express = require('express');
const bodyParser = require('body-parser');
const { PythonShell } = require('python-shell');
const cors = require('cors');
const { exec } = require('child_process'); // Import the exec function


const app = express();
const port = 3001;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());

app.get("/api", (req, res) => {
  res.json({"users": ["userOne", "userTwo", "userThree"]})
})



app.post('/updateCode', (req, res) => {
  const { code } = req.body;

  // Replace '/path/to/your/python_script.py' with the actual path to your Python script
  exec(`python /home/ubuntu/Desktop/editor/alarmPanelFunctions.py updateCode ${code}`, (error, stdout, stderr) => {
    if (error) {
      console.error('Error executing Python script:', error);
      res.status(500).json({ error: 'Failed to execute Python script' });
    } else {
      console.log('Output:', stdout);
      console.error('Error:', stderr);
      res.send(stdout);
    }
  });
});

app.post('/updateArmTime', (req, res) => {
  const { arming_time } = req.body;

  // Replace '/path/to/your/python_script.py' with the actual path to your Python script
  exec(`python /home/ubuntu/Desktop/editor/alarmPanelFunctions.py updateArmTime ${arming_time}`, (error, stdout, stderr) => {
    if (error) {
      console.error('Error executing Python script:', error);
      res.status(500).json({ error: 'Failed to execute Python script' });
    } else {
      console.log('Output:', stdout);
      console.error('Error:', stderr);
      res.send(stdout);
    }
  });
});

/*
app.get('/updateCode', (req, res) => {
  const spawn = require('child_process').spawn;
  const { code } = req.body;
 
  var dataToSend;
  // spawn new child process to call the python script
  const python = spawn('python', ['editor.py', 'updateCode', newCode]);
  // collect data from script
  python.stdout.on('data', function (data) {
   console.log('Pipe data from python script ...');
   dataToSend = data.toString();
  });
  // in close event we are sure that stream from child process is closed
  python.on('close', (code) => {
  console.log(`child process close all stdio with code ${code}`);
  // send data to browser
  res.send(dataToSend)
  });
  
 })
*/

 /*
app.post("/updateCode", (req, res, next) => {
  const { code } = req.body;

  let options = {
    mode: 'text',
    pythonOptions: ['-u'],
    scriptPath: '/Desktop/editor', // Update the path to the Python script accordingly
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
*/

app.listen(port, () => {
  console.log(`Server running at http://127.0.0.1:${port}/`);
});
