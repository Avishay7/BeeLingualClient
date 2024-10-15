import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaFont, FaSun, FaVolumeUp } from 'react-icons/fa';

const Settings = () => {
  const defaultFontSize = 24; // שינינו את ברירת המחדל לגודל בינוני
  const defaultBrightness = 100;
  const defaultVolume = 50;

  const [fontSize, setFontSize] = useState(() => Number(localStorage.getItem('fontSize')) || defaultFontSize);
  const [brightness, setBrightness] = useState(() => Number(localStorage.getItem('brightness')) || defaultBrightness);
  const [volume, setVolume] = useState(() => Number(localStorage.getItem('volume')) || defaultVolume);

  useEffect(() => {
    localStorage.setItem('fontSize', fontSize);
    localStorage.setItem('brightness', brightness);
    localStorage.setItem('volume', volume);
  }, [fontSize, brightness, volume]);

  const handleFontSizeChange = (event) => setFontSize(Number(event.target.value));
  const handleBrightnessChange = (event) => setBrightness(Number(event.target.value));
  const handleVolumeChange = (event) => setVolume(Number(event.target.value));

  const resetSettings = () => {
    setFontSize(defaultFontSize);
    setBrightness(defaultBrightness);
    setVolume(defaultVolume);
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">הגדרות</h2>
      <div className="d-flex justify-content-between">
        <div className="card p-4 shadow-lg border-primary" style={{ flex: '0 0 300px', marginRight: '10px' }}>
          {/* Font Size Setting */}
          <div className="mb-4">
            <label htmlFor="fontSizeSelect" className="form-label"><FaFont /> גודל גופן</label>
            <select className="form-select" id="fontSizeSelect" value={fontSize} onChange={handleFontSizeChange}>
              <option value="16">קטן</option>
              <option value="24">בינוני</option>
              <option value="32">גדול</option>
            </select>
            <p>גודל נוכחי: {fontSize}px</p>
          </div>

          {/* Brightness Setting */}
          <div className="mb-4">
            <label htmlFor="brightnessSelect" className="form-label"><FaSun /> בהירות</label>
            <select className="form-select" id="brightnessSelect" value={brightness} onChange={handleBrightnessChange}>
              <option value="75">נמוכה</option>
              <option value="100">בינונית</option>
              <option value="125">גבוהה</option>
            </select>
            <p>בהירות נוכחית: {brightness}%</p>
          </div>

          {/* Volume Setting */}
          <div className="mb-4">
            <label htmlFor="volumeRange" className="form-label"><FaVolumeUp /> עוצמת קול</label>
            <input
              type="range"
              className="form-range"
              id="volumeRange"
              min="0"
              max="100"
              value={volume}
              onChange={handleVolumeChange}
            />
            <p>עוצמת קול נוכחית: {volume}%</p>
          </div>

          {/* Reset Button */}
          <button className="btn btn-primary" onClick={resetSettings}>
            איפוס הגדרות
          </button>
        </div>

        {/* Improved Text Display Area */}
        <div className="border rounded p-4" style={{ flex: '1', backgroundColor: '#e9ecef', boxShadow: '0 4px 8px rgba(0,0,0,0.2)' }}>
          <h5 className="mb-3 text-center">תצוגה מקדימה</h5>
          <p style={{ fontSize: `${fontSize}px`, filter: `brightness(${brightness}%)`, textAlign: 'center', color: '#343a40' }}>
            זהו טקסט לדוגמה שיראה את השינויים שביצעת. עוצמת קול: {volume}%
          </p>
        </div>
      </div>
    </div>
  );
};

export default Settings;
