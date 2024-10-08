import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Avatar() {
  const AvatarPicker = () => {
    const [selectedAvatar, setSelectedAvatar] = useState(null); // שמירת האוואטר הנבחר
    const [gender, setGender] = useState(''); // שמירת בחירת המגדר
    const [uploadedImage, setUploadedImage] = useState(null); // שמירת התמונה שהועלתה
    const [confirmed, setConfirmed] = useState(false); // שמירת אישור הבחירה

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
      setSelectedAvatar(avatar);
      setUploadedImage(null); // איפוס תמונה שהועלתה
      setConfirmed(false); // איפוס אישור
    };

    const handleImageUpload = (event) => {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setUploadedImage(reader.result);
          setSelectedAvatar(null); // איפוס אוואטר נבחר
          setConfirmed(false); // איפוס אישור
        };
        reader.readAsDataURL(file);
      }
    };

    const handleConfirm = () => {
      setConfirmed(true);
      alert('האוואטר אושר בהצלחה!');
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

            {/* כפתור אישור */}
            {(selectedAvatar || uploadedImage) && (
              <div className="mt-4">
                <button className="btn btn-success" onClick={handleConfirm} disabled={confirmed}>
                  {confirmed ? 'אושר' : 'אשר בחירה'}
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    );
  };

  return <AvatarPicker />;
}

export default Avatar;
