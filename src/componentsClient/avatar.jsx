import React, { useState } from 'react';

function AvatarPicker({ setSelectedAvatar }) {
  const [gender, setGender] = useState('');
  const [uploadedImage, setUploadedImage] = useState(null);
  const [temporaryAvatar, setTemporaryAvatar] = useState(null); // משתנה לבחירה זמנית
  const [successMessage, setSuccessMessage] = useState(''); // הודעת הצלחה
  const [errorMessage, setErrorMessage] = useState(''); // הודעת שגיאה
  const [confirmedAvatar, setConfirmedAvatar] = useState(null); // משתנה לאוואטר המאושר

  const maleAvatars = [
    'https://avatars.dicebear.com/api/adventurer/male1.svg',
    'https://avatars.dicebear.com/api/adventurer/male2.svg',
    'https://avatars.dicebear.com/api/adventurer/male3.svg',
    'https://avatars.dicebear.com/api/adventurer/male4.svg'
  ];

  const femaleAvatars = [
    'https://avatars.dicebear.com/api/adventurer/female1.svg',
    'https://avatars.dicebear.com/api/adventurer/female2.svg',
    'https://avatars.dicebear.com/api/adventurer/female3.svg',
    'https://avatars.dicebear.com/api/adventurer/female4.svg'
  ];

  const handleAvatarClick = (avatar) => {
    setTemporaryAvatar(avatar); // שמירה של האוואטר הנבחר בבחירה זמנית
    setUploadedImage(null); // ננקה את התמונה שהועלתה במידת הצורך
    setSuccessMessage(''); // ננקה את הודעת ההצלחה
    setErrorMessage(''); // ננקה את הודעת השגיאה
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadedImage(reader.result);
        setTemporaryAvatar(reader.result); // שמירה של התמונה שהועלתה בבחירה זמנית
        setSuccessMessage(''); // ננקה את הודעת ההצלחה
        setErrorMessage(''); // ננקה את הודעת השגיאה
      };
      reader.readAsDataURL(file);
    }
  };

  const handleConfirm = () => {
    // שמירה של הבחירה הסופית
    if (!temporaryAvatar) {
      setErrorMessage('אנא בחר אוואטר או העלה תמונה'); // הודעת שגיאה
      return;
    }

    setSelectedAvatar(temporaryAvatar); // שמירה של האוואטר הנבחר בקומפוננטה הראשית
    setConfirmedAvatar(temporaryAvatar); // שמירה של האוואטר המאושר
    setSuccessMessage('האוואטר נשמר בהצלחה!'); // הצגת הודעת הצלחה
    setErrorMessage(''); // ננקה את הודעת השגיאה

    // לחכות 3 שניות ולאחר מכן לנקות את ההודעה
    setTimeout(() => {
      setSuccessMessage('');
    }, 3000); // ניתן לשנות את הזמן לפי הצורך

    setTemporaryAvatar(null); // ננקה את הבחירה הזמנית לאחר שמירה
  };

  const handleClear = () => {
    setTemporaryAvatar(null);
    setUploadedImage(null);
    setGender('');
    setSuccessMessage(''); // ננקה את הודעת ההצלחה
    setErrorMessage(''); // ננקה את הודעת השגיאה
    setConfirmedAvatar(null); // ננקה את האוואטר המאושר
  };

  return (
    <div className="container mt-5">
      {/* בחירת מגדר */}
      <div className="text-center">
        <h3>בחר מגדר</h3>
        <div className="btn-group mb-4">
          <button
            className={`btn ${gender === 'male' ? 'btn-primary' : 'btn-outline-primary'}`}
            onClick={() => setGender('male')}
          >
            זכר
          </button>
          <button
            className={`btn ${gender === 'female' ? 'btn-primary' : 'btn-outline-primary'}`}
            onClick={() => setGender('female')}
          >
            נקבה
          </button>
        </div>
      </div>

      {/* הצגת אפשרויות בהתאם למגדר */}
      {gender && (
        <div className="text-center">
          <h4>בחר אוואטר או העלה תמונה</h4>

          {/* העלאת תמונה */}
          <div className="mb-4">
            <input type="file" accept="image/*" onChange={handleImageUpload} />
          </div>

          {/* הצגת האוואטר או התמונה שהועלתה */}
          {uploadedImage ? (
            <div className="mb-4">
              <img
                src={uploadedImage}
                alt="Uploaded Preview"
                className="rounded-circle"
                style={{ width: '150px', height: '150px', objectFit: 'cover' }}
              />
            </div>
          ) : (
            <div className="row justify-content-center">
              {(gender === 'male' ? maleAvatars : femaleAvatars).map((avatar, index) => (
                <div className="col-3 text-center" key={index}>
                  <img
                    src={avatar}
                    alt={`Avatar ${index + 1}`}
                    className="img-thumbnail rounded-circle"
                    style={{ width: '100px', height: '100px', cursor: 'pointer' }}
                    onClick={() => handleAvatarClick(avatar)}
                  />
                </div>
              ))}
            </div>
          )}

          {/* כפתור אישור */}
          {temporaryAvatar && (
            <div className="mt-4">
              <button className="btn btn-success" onClick={handleConfirm}>
                אישור אוואטר
              </button>
              {/* כפתור ניקוי */}
              <button className="btn btn-secondary ml-2" onClick={handleClear}>
                ניקוי
              </button>
            </div>
          )}

          {/* הצגת הודעת הצלחה או שגיאה */}
          {successMessage && (
            <div className="alert alert-success mt-4">
              {successMessage}
            </div>
          )}
          {errorMessage && (
            <div className="alert alert-danger mt-4">
              {errorMessage}
            </div>
          )}

          {/* הצגת האוואטר המאושר */}
          {confirmedAvatar && (
            <div className="mt-4">
              <h5>האוואטר שנבחר:</h5>
              <img
                src={confirmedAvatar}
                alt="Confirmed Avatar"
                className="rounded-circle"
                style={{ width: '150px', height: '150px', objectFit: 'cover' }}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default AvatarPicker;
