// import React, { useState, useRef } from 'react';
// import { useNavigate } from 'react-router-dom';

// function AvatarPicker({ setSelectedAvatar }) {
//   const [gender, setGender] = useState('');
//   const [uploadedImage, setUploadedImage] = useState(null);
//   const [temporaryAvatar, setTemporaryAvatar] = useState(null);
//   const [successMessage, setSuccessMessage] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');
//   const [confirmedAvatar, setConfirmedAvatar] = useState(null);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [selectionConfirmed, setSelectionConfirmed] = useState(false);
//   const [scrollTimeout, setScrollTimeout] = useState(null);
//   const navigate = useNavigate();

//   const generateAvatars = (gender, count) => {
//     return Array.from({ length: count }, (_, i) => ({
//       id: i,
//       url: `https://api.dicebear.com/7.x/pixel-art/svg?seed=${gender}${i}&backgroundColor=b6e3f4`
//     }));
//   };

//   const maleAvatars = generateAvatars('male', 9);
//   const femaleAvatars = generateAvatars('female', 9);
//   const currentAvatars = gender === 'male' ? maleAvatars : femaleAvatars;

//   const handleAvatarClick = (avatar) => {
//     setTemporaryAvatar(avatar.url);
//     setUploadedImage(null);
//     setSuccessMessage('');
//     setErrorMessage('');
//   };

//   const handleImageUpload = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setUploadedImage(reader.result);
//         setTemporaryAvatar(reader.result);
//         setSuccessMessage('');
//         setErrorMessage('');
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleConfirm = () => {
//     if (!temporaryAvatar) {
//       setErrorMessage('אנא בחר אוואטר או העלה תמונה');
//       return;
//     }
//     setSelectedAvatar(temporaryAvatar);
//     setConfirmedAvatar(temporaryAvatar);
//     setSuccessMessage('האוואטר נשמר בהצלחה!');
//     setErrorMessage('');
//     setSelectionConfirmed(true);
//     setTimeout(() => {
//       setSuccessMessage('');
//     }, 3000);
//     navigate('/HomeClient');
//   };

//   const handleClear = () => {
//     setTemporaryAvatar(null);
//     setUploadedImage(null);
//     setGender('');
//     setSuccessMessage('');
//     setErrorMessage('');
//     setConfirmedAvatar(null);
//     setSelectionConfirmed(false);
//   };

//   const handleScroll = (e) => {
//     if (scrollTimeout) clearTimeout(scrollTimeout);
//     setScrollTimeout(setTimeout(() => {
//       if (e.deltaY < 0) {
//         setCurrentIndex((prevIndex) => (prevIndex === 0 ? currentAvatars.length - 1 : prevIndex - 1));
//       } else {
//         setCurrentIndex((prevIndex) => (prevIndex === currentAvatars.length - 1 ? 0 : prevIndex + 1));
//       }
//     }, 500)); // חצי שניה
//   };

//   return (
//     <div className="container mt-5" onWheel={handleScroll}>
//       {selectionConfirmed ? (
//         <div className="text-center">
//           <h4>האוואטר שנבחר:</h4>
//           <div className="mb-4">
//             <img
//               src={confirmedAvatar}
//               alt="Confirmed Avatar"
//               className="rounded-circle"
//               style={{ width: '150px', height: '150px', objectFit: 'cover' }}
//             />
//           </div>
//           <button className="btn btn-primary" onClick={handleClear}>
//             התחלה מחדש
//           </button>
//         </div>
//       ) : (
//         <>
//           <div className="text-center">
//             <h3>בחר מגדר</h3>
//             <div className="btn-group mb-4">
//               <button
//                 className={`btn ${gender === 'male' ? 'btn-primary' : 'btn-outline-primary'}`}
//                 onClick={() => setGender('male')}
//               >
//                 זכר
//               </button>
//               <button
//                 className={`btn ${gender === 'female' ? 'btn-primary' : 'btn-outline-primary'}`}
//                 onClick={() => setGender('female')}
//               >
//                 נקבה
//               </button>
//             </div>
//           </div>
//           {gender && (
//             <div className="text-center">
//               <h4>בחר אוואטר או העלה תמונה</h4>
//               <div className="mb-4">
//                 <input type="file" accept="image/*" onChange={handleImageUpload} />
//               </div>
//               {uploadedImage ? (
//                 <div className="mb-4">
//                   <img
//                     src={uploadedImage}
//                     alt="Uploaded Preview"
//                     className="rounded-circle"
//                     style={{ width: '150px', height: '150px', objectFit: 'cover' }}
//                   />
//                 </div>
//               ) : (
//                 <div className="d-flex justify-content-center">
//                   <div className="avatar-container" style={{ position: 'relative', overflow: 'hidden', width: '200px', height: '200px' }}>
//                     {currentAvatars.map((avatar, index) => (
//                       <img
//                         key={index}
//                         src={avatar.url}
//                         alt={`Avatar ${index + 1}`}
//                         className={`img-thumbnail rounded-circle ${currentIndex === index ? 'selected' : ''}`}
//                         style={{ position: 'absolute', opacity: currentIndex === index ? 1 : 0, transition: 'opacity 0.3s', cursor: 'pointer' }}
//                         onMouseEnter={() => setCurrentIndex(index)}
//                         onClick={() => handleAvatarClick(avatar)}
//                       />
//                     ))}
//                   </div>
//                 </div>
//               )}
//               {temporaryAvatar && (
//                 <div className="mt-4">
//                   <button className="btn btn-success" onClick={handleConfirm}>
//                     אישור אוואטר
//                   </button>
//                   <button className="btn btn-secondary ml-2" onClick={handleClear}>
//                     ניקוי
//                   </button>
//                 </div>
//               )}
//               {successMessage && (
//                 <div className="alert alert-success mt-4">
//                   {successMessage}
//                 </div>
//               )}
//               {errorMessage && (
//                 <div className="alert alert-danger mt-4">
//                   {errorMessage}
//                 </div>
//               )}
//             </div>
//           )}
//         </>
//       )}
//     </div>
//   );
// }

// export default AvatarPicker;
