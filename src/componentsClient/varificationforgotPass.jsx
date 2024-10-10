import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function VarificationforgotPass() {
  let nav = useNavigate();
  const myEmail = useSelector(state => state.myDetailsSlice.email);
  const [code, setCode] = useState(['', '', '', '']);

  const handleChange = (event, index) => {
    const value = event.target.value;

    // רק מספרים מותרים והגבלת אורך לאות אחת
    if (/^[0-9]?$/.test(value)) {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);

      // מעבר אוטומטי לשדה הבא אם יש קלט
      if (value && index < 3) {
        document.getElementById(`input-${index + 1}`).focus();
      }
    }
  };

  const handleKeyDown = (event, index) => {
    // מעבר לשדה הקודם בלחיצה על Backspace כשהשדה ריק
    if (event.key === 'Backspace' && !code[index] && index > 0) {
      document.getElementById(`input-${index - 1}`).focus();
    }
  };

  const handleSubmit = () => {
    const codeString = code.join(''); // חיבור הערכים למחרוזת
    doApi(codeString)
  };

  // בדיקת תקינות האם כל השדות מולאו
  const isCodeComplete = code.every((digit) => digit !== '');

  const doApi = async (_code) => {
    let _dataObg = {
      email: myEmail,
      code: _code,
    }
    console.log(_dataObg);
    // API request
    nav("/forgotPassClient");
  }

  
    return (
      <>
      <div className=" container mt-5 shadow-lg p-4 d-flex flex-column text-center" style={{ width: '80%', maxWidth: '500px', backgroundColor: 'white' }}>
        <div className="row justify-content-center">
          {/* <img src="" alt="" /> */}
          <h1 className=''>password verification</h1>

          <p className="text-center mb-4 mt-2">Enter the 4-digit security code we send to : <strong>{myEmail}</strong></p>

          <div className="d-flex justify-content-center gap-2">
            {code.map((value, index) => (
              <input
                key={index}
                id={`input-${index}`}
                type="text"
                className="form-control text-center"
                style={{ width: '50px', fontSize: '24px' }}
                maxLength="1"
                value={value}
                onChange={(event) => handleChange(event, index)}
                onKeyDown={(event) => handleKeyDown(event, index)}
              />
            ))}
          </div>

          <div className="text-center mt-3">
            <button
              className="btn btn-primary w-100"
              onClick={handleSubmit} disabled={!isCodeComplete}  // הכפתור פעיל רק כאשר כל השדות מלאים
            >Send</button>
          </div>
        </div>
      </div>
    </>
  );
  
}

export default VarificationforgotPass
