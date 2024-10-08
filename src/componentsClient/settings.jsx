import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Settings = () => {
  const [fontSize, setFontSize] = useState(16); // ניהול גודל גופן
  const [brightness, setBrightness] = useState(100); // ניהול בהירות

  // פונקציה לשינוי גודל הגופן
  const handleFontSizeChange = (event) => {
    setFontSize(event.target.value);
  };

  // פונקציה לשינוי הבהירות
  const handleBrightnessChange = (event) => {
    setBrightness(event.target.value);
  };

  return (
    <div className="container mt-5" style={{ filter: `brightness(${brightness}%)`, fontSize: `${fontSize}px` }}>
      <h2>הגדרות</h2>
      <div className="card p-4 shadow-lg">
        {/* הגדרה לשינוי גודל גופן */}
        <div className="mb-4">
          <label htmlFor="fontSizeRange" className="form-label">גודל גופן</label>
          <input
            type="range"
            className="form-range"
            id="fontSizeRange"
            min="10"
            max="40"
            value={fontSize}
            onChange={handleFontSizeChange}
          />
          <p>גודל נוכחי: {fontSize}px</p>
        </div>

        {/* הגדרה לשינוי בהירות */}
        <div className="mb-4">
          <label htmlFor="brightnessRange" className="form-label">בהירות</label>
          <input
            type="range"
            className="form-range"
            id="brightnessRange"
            min="50"
            max="150"
            value={brightness}
            onChange={handleBrightnessChange}
          />
          <p>בהירות נוכחית: {brightness}%</p>
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
