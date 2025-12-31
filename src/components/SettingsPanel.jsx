import React from "react";
import "./SettingsPanel.css";

const SettingsPanel = ({ settings, models, onSettingsChange }) => {
  const handleModelChange = (e) => {
    onSettingsChange({ ...settings, model: e.target.value });
  };

  const handleTemperatureChange = (e) => {
    onSettingsChange({
      ...settings,
      temperature: parseFloat(e.target.value),
    });
  };

  const handleTopKChange = (e) => {
    onSettingsChange({
      ...settings,
      topK: parseInt(e.target.value),
    });
  };

  return (
    <div className="settings-panel">
      <h3>Settings</h3>

      <div className="setting-group">
        <label htmlFor="model">Model</label>
        <select id="model" value={settings.model} onChange={handleModelChange}>
          {models.map((model) => (
            <option key={model} value={model}>
              {model}
            </option>
          ))}
        </select>
      </div>

      <div className="setting-group">
        <label htmlFor="temperature">
          Temperature: <span>{settings.temperature.toFixed(2)}</span>
        </label>
        <input
          id="temperature"
          type="range"
          min="0"
          max="1"
          step="0.1"
          value={settings.temperature}
          onChange={handleTemperatureChange}
        />
        <small>Lower = more focused, Higher = more creative</small>
      </div>

      <div className="setting-group">
        <label htmlFor="topK">
          Top K (Retrieved Documents): <span>{settings.topK}</span>
        </label>
        <input
          id="topK"
          type="range"
          min="1"
          max="10"
          step="1"
          value={settings.topK}
          onChange={handleTopKChange}
        />
        <small>Number of documents to retrieve for context</small>
      </div>
    </div>
  );
};

export default SettingsPanel;
