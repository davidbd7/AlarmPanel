import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Configuration = () => {
  const [codeInput, setCodeInput] = useState('');
  const [updatedCode, setUpdatedCode] = useState('');
  const [backendData, setBackendData] = useState([{}])

  useEffect(() => {
    fetch("/api").then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data)
      }
    )
  }, {})

  const handleCodeInputChange = (event) => {
    setCodeInput(event.target.value);
  };

  const updateAlarmCode = async (newCode) => {
    try {
      const response = await axios.post('http://127.0.0.1:3001/updateCode', {code: newCode});

      console.log('API call successful:', response);
      setUpdatedCode(newCode);
    } catch (error) {
      console.error('API call failed:', error.message);
    }
  };

  return (
    <div className="container">
      <h2 className="title">Configuration</h2>
      <div className="form-group">
        <label htmlFor="code-input">Alarm Code:</label>
        <input
          type="text"
          id="code-input"
          value={codeInput}
          onChange={handleCodeInputChange}
          className="input"
        />
      </div>
      <button className="btn" onClick={() => updateAlarmCode(codeInput)}>
        Update Alarm Code
      </button>
      {updatedCode && (
        <p className="updated-code">Updated Code: {updatedCode}</p>
      )}
    </div>
  );
};

export default Configuration;