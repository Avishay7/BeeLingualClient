import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Settings = () => {
  const [fontSize, setFontSize] = useState(16); // ניהול גודל גופן
  const [brightness, setBrightness] = useState(100); // ניהול בהירות
  const [volume, setVolume] = useState(50); // ניהול עוצמת הקול

  // פונקציה לשינוי גודל הגופן
  const handleFontSizeChange = (event) => {
    setFontSize(Number(event.target.value));
  };

  // פונקציה לשינוי הבהירות
  const handleBrightnessChange = (event) => {
    setBrightness(Number(event.target.value));
  };

  // פונקציה לשינוי עוצמת הקול
  const handleVolumeChange = (event) => {
    setVolume(Number(event.target.value));
  };

  return (
    <div className="container mt-5" style={{ filter: `brightness(${brightness}%)`, fontSize: `${fontSize}px` }}>
      <h2>הגדרות</h2>
      <div className="card p-4 shadow-lg">
        
        {/* הגדרה לשינוי גודל גופן */}
        <div className="mb-4">
          <label htmlFor="fontSizeSelect" className="form-label">גודל גופן</label>
          <select className="form-select" id="fontSizeSelect" value={fontSize} onChange={handleFontSizeChange}>
            <option value="16">קטן</option>
            <option value="24">בינוני</option>
            <option value="32">גדול</option>
          </select>
          <p>גודל נוכחי: {fontSize}px</p>
        </div>

        {/* הגדרה לשינוי בהירות */}
        <div className="mb-4">
          <label htmlFor="brightnessSelect" className="form-label">בהירות</label>
          <select className="form-select" id="brightnessSelect" value={brightness} onChange={handleBrightnessChange}>
            <option value="75">נמוכה</option>
            <option value="100">בינונית</option>
            <option value="125">גבוהה</option>
          </select>
          <p>בהירות נוכחית: {brightness}%</p>
        </div>

        {/* הגדרה לשינוי עוצמת קול */}
        <div className="mb-4">
          <label htmlFor="volumeRange" className="form-label">עוצמת קול</label>
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
      </div>

      {/* תצוגת טקסט לדוגמה */}
      <div className="mt-4 p-3 border">
        <p>זהו טקסט לדוגמה שיראה את השינויים שביצעת.</p>
      </div>
    </div>
  );
};

export default Settings;
