import React, { useState } from 'react';

function AvatarPicker({ setSelectedAvatar }) { // נוסיף את ה-`prop` להעברת האוואטר
  const [gender, setGender] = useState('');
  const [uploadedImage, setUploadedImage] = useState(null);

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
    setSelectedAvatar(avatar); // שמירה של האוואטר הנבחר בקומפוננטה הראשית
    setUploadedImage(null);
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadedImage(reader.result);
        setSelectedAvatar(reader.result); // שמירה של התמונה שהועלתה כאוואטר הנבחר
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
        </div>
      )}
    </div>
  );
}

export default AvatarPicker;
