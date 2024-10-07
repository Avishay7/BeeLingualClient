import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Avatar() {
  // קומפוננטת הבחירה של אוואטרים ותמונות
  const AvatarPicker = () => {
    const [selectedAvatar, setSelectedAvatar] = useState(null); // שמירת האוואטר הנבחר
    const [gender, setGender] = useState(''); // שמירת בחירת המגדר
    const [uploadedImage, setUploadedImage] = useState(null); // שמירת התמונה שהועלתה

    // רשימת אוואטרים לבחירת משתמש
    const maleAvatars = [
      'https://randomuser.me/api/portraits/men/1.jpg',
      'https://randomuser.me/api/portraits/men/3.jpg',
      'https://randomuser.me/api/portraits/men/5.jpg',
      'https://randomuser.me/api/portraits/men/7.jpg'
    ];

    const femaleAvatars = [
      'https://randomuser.me/api/portraits/women/2.jpg',
      'https://randomuser.me/api/portraits/women/4.jpg',
      'https://randomuser.me/api/portraits/women/6.jpg',
      'https://randomuser.me/api/portraits/women/8.jpg'
    ];

    // פונקציה לבחירת אוואטר
    const handleAvatarClick = (avatar) => {
      setSelectedAvatar(avatar);
      setUploadedImage(null); // איפוס תמונה שהועלתה
    };

    // פונקציה להעלאת תמונה
    const handleImageUpload = (event) => {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setUploadedImage(reader.result);
          setSelectedAvatar(null); // מחיקת האוואטר הנבחר כאשר מועלית תמונה מותאמת
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

        {/* הצגת האפשרויות רק לאחר בחירת מגדר */}
        {gender && (
          <div className="text-center">
            <h4>בחר אוואטר או העלה תמונה</h4>

            {/* העלאת תמונה */}
            <div className="mb-4">
              <input type="file" accept="image/*" capture="camera" onChange={handleImageUpload} />
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
                <p>תמונה שהועלתה</p>
              </div>
            ) : selectedAvatar ? (
              <div className="mb-4">
                <img
                  src={selectedAvatar}
                  alt="Selected Avatar"
                  className="rounded-circle"
                  style={{ width: '150px', height: '150px', objectFit: 'cover' }}
                />
                <p>האוואטר הנבחר שלך</p>
              </div>
            ) : null}

            {/* הצגת רשימת אוואטרים בהתאם למגדר */}
            <div className="row justify-content-center">
              {(gender === 'male' ? maleAvatars : femaleAvatars).map((avatar, index) => (
                <div className="col-3 text-center" key={index}>
                  <img
                    src={avatar}
                    alt={`Avatar ${index + 1}`}
                    className={`img-thumbnail rounded-circle ${selectedAvatar === avatar ? 'border-primary' : ''}`}
                    style={{ width: '100px', height: '100px', cursor: 'pointer', objectFit: 'cover' }}
                    onClick={() => handleAvatarClick(avatar)}
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div>
      <AvatarPicker />
    </div>
  );
}

export default Avatar;
