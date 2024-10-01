import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Avatar() {
  const AvatarPicker = () => {
    const [selectedAvatar, setSelectedAvatar] = useState(null);
    const [customAvatar, setCustomAvatar] = useState(null);

    // אוואטרים מחולקים לזכר ונקבה
    const maleAvatars = [
      'https://randomuser.me/api/portraits/men/1.jpg',
      'https://randomuser.me/api/portraits/men/3.jpg'
    ];

    const femaleAvatars = [
      'https://randomuser.me/api/portraits/women/2.jpg',
      'https://randomuser.me/api/portraits/women/4.jpg'
    ];

    // פונקציה לבחירת אוואטר מובנה
    const handleAvatarClick = (avatar) => {
      setSelectedAvatar(avatar);
      setCustomAvatar(null); // מחיקת האוואטר המותאם כאשר נבחר אוואטר מובנה
    };

    // פונקציה להעלאת תמונה מותאמת
    const handleImageUpload = (event) => {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setCustomAvatar(reader.result);
          setSelectedAvatar(null); // מחיקת האוואטר הנבחר כאשר מועלית תמונה מותאמת
        };
        reader.readAsDataURL(file);
      }
    };

    return (
      <div className="container mt-5">
        <h3 className="text-center">בחר אוואטר</h3>

        {/* הצגת האוואטר הנבחר או המותאם */}
        {(selectedAvatar || customAvatar) && (
          <div className="text-center mb-4">
            <img
              src={customAvatar || selectedAvatar}
              alt="Selected Avatar"
              className="rounded-circle"
              style={{ width: '150px', height: '150px', objectFit: 'cover' }}
            />
            <p>האוואטר הנבחר שלך</p>
          </div>
        )}

        {/* רשימת אוואטרים זכר */}
        <h4 className="text-center">זכר</h4>
        <div className="row justify-content-center">
          {maleAvatars.map((avatar, index) => (
            <div className="col-3 text-center" key={index}>
              <img
                src={avatar}
                alt={`Male Avatar ${index + 1}`}
                className={`img-thumbnail rounded-circle ${selectedAvatar === avatar ? 'border-primary' : ''}`}
                style={{ width: '100px', height: '100px', cursor: 'pointer', objectFit: 'cover' }}
                onClick={() => handleAvatarClick(avatar)}
              />
            </div>
          ))}
        </div>

        {/* רשימת אוואטרים נקבה */}
        <h4 className="text-center mt-4">נקבה</h4>
        <div className="row justify-content-center">
          {femaleAvatars.map((avatar, index) => (
            <div className="col-3 text-center" key={index}>
              <img
                src={avatar}
                alt={`Female Avatar ${index + 1}`}
                className={`img-thumbnail rounded-circle ${selectedAvatar === avatar ? 'border-primary' : ''}`}
                style={{ width: '100px', height: '100px', cursor: 'pointer', objectFit: 'cover' }}
                onClick={() => handleAvatarClick(avatar)}
              />
            </div>
          ))}
        </div>

        {/* העלאת תמונה מותאמת אישית */}
        <div className="text-center mt-4">
          <div style={{ width: '100px', height: '100px', margin: '0 auto', position: 'relative' }}>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              style={{
                width: '100px',
                height: '100px',
                borderRadius: '50%',
                position: 'absolute',
                opacity: 0,
                cursor: 'pointer'
              }}
            />
            <div
              style={{
                width: '100px',
                height: '100px',
                borderRadius: '50%',
                border: '2px dashed gray',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <span>+</span>
            </div>
          </div>
          <p>או העלה תמונה מותאמת אישית</p>
        </div>
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