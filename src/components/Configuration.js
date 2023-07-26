import React, { useState } from 'react';
import axios from 'axios';
import './Configuration.css';

const Configuration = () => {
  const [updatedCode, setUpdatedCode] = useState('');

  const [selectedSetting, setSelectedSetting] = useState('');
  const [settingValue, setSettingValue] = useState('');

  const handleSettingChange = (event) => {
    setSelectedSetting(event.target.value);
  };

  const handleSettingValueChange = (event) => {
    setSettingValue(event.target.value);
  };

  const handleSettingsUpdate = async () => {
    try {
      switch (selectedSetting) {
        case 'alarmCode':
          await axios.post('http://127.0.0.1:3001/updateCode', { code: settingValue });
          break;
        case 'arming_time':
          await axios.post('http://127.0.0.1:3001/updateArmTime', { arming_time: settingValue });
          break;
        default:
          break;
      }
      setUpdatedCode(settingValue);
    } catch (error) {
      console.log('API Call Failed:', error.message);
    }
  };

  return (
    <div className="container">
      <h2 className="title">Alarm Configuration Settings</h2>
      <div className="form-group">
        <label htmlFor="setting-select" className="label">
          Select Setting:
        </label>
        <select id="setting-select" value={selectedSetting} onChange={handleSettingChange} className="input">
          <option value="">Select Setting</option>
          <option value="alarmCode">Alarm Code</option>
          <option value="arming_time">Arming Time</option>
        </select>
      </div>
      {selectedSetting && (
        <div className="form-group">
          <label htmlFor="setting-value-input" className="label">
            {selectedSetting === 'alarmCode' ? 'Alarm Code:' : selectedSetting === 'arming_time' ? 'Arming Time:' : ''}
          </label>
          <input
            type="text"
            id="setting-value-input"
            value={settingValue}
            onChange={handleSettingValueChange}
            className="input"
          />
        </div>
      )}

      <button className="btn" onClick={handleSettingsUpdate} disabled={!selectedSetting}>
        Update Settings
      </button>
      {updatedCode && <p className="updated-code">Updated Settings Value: {updatedCode}</p>}
    </div>
  );
};

export default Configuration;
