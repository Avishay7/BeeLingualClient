import React, { useState } from 'react'; // הוספת useState
import 'bootstrap/dist/css/bootstrap.min.css';

function Avatar() {
  // קומפוננטת הבחירה של האוואטרים
  const AvatarPicker = () => {
    // שמירת האוואטר הנבחר
    const [selectedAvatar, setSelectedAvatar] = useState(null);
  
    // רשימת האוואטרים האפשריים
    const avatars = [
      'https://randomuser.me/api/portraits/men/1.jpg',
      'https://randomuser.me/api/portraits/women/2.jpg',
      'https://randomuser.me/api/portraits/men/3.jpg',
      'https://randomuser.me/api/portraits/women/4.jpg'
    ];
  
    // פונקציה לבחירת אוואטר
    const handleAvatarClick = (avatar) => {
      setSelectedAvatar(avatar);
    };
  
    return (
      <div className="container mt-5">
        <h3 className="text-center">בחר אוואטר</h3>
        
        {/* הצגת האוואטר הנבחר */}
        {selectedAvatar && (
          <div className="text-center mb-4">
            <img 
              src={selectedAvatar} 
              alt="Selected Avatar" 
              className="rounded-circle" 
              style={{ width: '150px', height: '150px' }}
            />
            <p>האוואטר הנבחר שלך</p>
          </div>
        )}
        
        {/* רשימת האוואטרים לבחירה */}
        <div className="row justify-content-center">
          {avatars.map((avatar, index) => (
            <div className="col-3 text-center" key={index}>
              <img
                src={avatar}
                alt={`Avatar ${index + 1}`}
                className={`img-thumbnail rounded-circle ${selectedAvatar === avatar ? 'border-primary' : ''}`}
                style={{ width: '100px', height: '100px', cursor: 'pointer' }}
                onClick={() => handleAvatarClick(avatar)}
              />
            </div>
          ))}
        </div>
      </div>
    );
  };

  // החזרת הקומפוננטה AvatarPicker בתוך הרכיב Avatar
  return (
    <div>
      <AvatarPicker />
    </div>
  );
}

export default Avatar;