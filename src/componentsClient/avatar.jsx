import React, { useState, useEffect } from 'react';

function AvatarPicker({ setSelectedAvatar }) {
  const [gender, setGender] = useState('');
  const [uploadedImage, setUploadedImage] = useState(null);
  const [temporaryAvatar, setTemporaryAvatar] = useState(null); // משתנה לבחירה זמנית

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

  // טוענים את האוואטר השמור מ-localStorage כשקומפוננטה נטענת
  useEffect(() => {
    const savedAvatar = localStorage.getItem('selectedAvatar');
    if (savedAvatar) {
      setSelectedAvatar(savedAvatar);
      setUploadedImage(savedAvatar); // אם זו תמונה שהועלתה
    }
  }, [setSelectedAvatar]);

  // פונקציה לשמירת האוואטר ב-localStorage
  const saveAvatarToLocalStorage = (avatar) => {
    localStorage.setItem('selectedAvatar', avatar);
    setSelectedAvatar(avatar); // שמירה בקומפוננטה הראשית
  };

  // פונקציה לבחירת אוואטר אך עדיין לא שמירה
  const handleAvatarClick = (avatar) => {
    setTemporaryAvatar(avatar); // שמירת אוואטר זמנית
    setUploadedImage(null); // ננקה את התמונה שהועלתה במידת הצורך
  };

  // פונקציה לשמירת הבחירה לאחר לחיצה על כפתור האישור
  const handleConfirm = () => {
    if (temporaryAvatar) {
      saveAvatarToLocalStorage(temporaryAvatar);
      setTemporaryAvatar(null); // ננקה את הבחירה הזמנית לאחר שמירה
    }
  };

  // פונקציה להעלאת תמונה
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setTemporaryAvatar(reader.result); // שמירת התמונה בבחירה זמנית
        setUploadedImage(reader.result); // הצגת התמונה שהועלתה
      };
      reader.readAsDataURL(file);
    }
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
          {temporaryAvatar ? (
            <div className="mb-4">
              <img
                src={temporaryAvatar}
                alt="Selected Avatar"
                className="rounded-circle"
                style={{ width: '150px', height: '150px', objectFit: 'cover' }}
              />
            </div>
          ) : uploadedImage ? (
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
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default AvatarPicker;
