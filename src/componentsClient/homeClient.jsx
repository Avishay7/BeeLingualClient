import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const HomeClient = () => {
    const myName = useSelector(state => state.myDetailsSlice.name);
    const myLevel = useSelector(state => state.myDetailsSlice.level);
    const navigate = useNavigate();

    // State to control modal visibility and selected level
    const [showLevelModal, setShowLevelModal] = useState(false);
    const [selectedLevel, setSelectedLevel] = useState(null);

    const myScore = 6;
    const playTime = "5 hours"; // Example value, replace with actual data
    const questionsAnswered = 20; // Example value, replace with actual data
    const daysPlaying = 10; // Example value, replace with actual data

    useEffect(() => {
        console.log("name: " + myName);
    }, [myName]);

    useEffect(() => {
        console.log("level: " + myLevel);
    }, [myLevel]);

    const handleButtonClick = (step) => {
        if (step === 1) {
            navigate('/avatar'); // Navigate to avatar selection page
        } else if (step === 2) {
            setShowLevelModal(true); // Show the level selection modal
        } else if (step === 3) {
            if (selectedLevel !== null) {
                navigate('/chat'); // Navigate to chat page only if a level is selected
            } else {
                alert("Please select a level first!"); // Alert if no level is selected
            }
        }
    };

    const handleLevelSelect = (level) => {
        console.log("Selected Level:", level);
        setSelectedLevel(level); // Set the selected level
        setShowLevelModal(false); // Close the modal after selection
    };

    return (
        <div className="container-fluid" style={{ height: '100vh' }}>

            {/* הדיב המשני לקונטיינר */}
            <div className="row h-100" >
                <div className="d-flex flex-row justify-content-between w-100 h-100">
                    {/* הצד השמאלי של הדף  */}
                    <div className="text-center mb-4">
                            <img src="/path/to/logo.png" alt="Logo" style={{ width: '50px', height: '50px' }} />
                            <h2 style={{ margin: '0' }}>beeLengual</h2>
                        </div>
                    <div id='left' className=" p-5 col-md-6 d-flex flex-column align-items-center justify-content-center h-100">
                        {[1, 2, 3].map((step) => (

                            // המספרים והכפתורי בחירת אווטאר רמה והתחלה
                            <div key={step} className='d-flex align-items-center mt-2 w-100'>

                                {/* המספרים ליד הכפתורי בחירה */}
                                <div className='bg-green rounded-circle border border-secondary d-flex justify-content-center align-items-center ' style={{ width: '70px', height: '70px' ,background:'green'}}>
                                    <span style={{ fontSize: '2rem' }}>{step}</span>
                                </div>
                                <button className="btn btn-outline-primary rounded-5" onClick={() => handleButtonClick(step)} style={{ width: '60%', fontSize: '2.9rem', padding: '20px', margin: '15px' }}>
                                    {step === 1 ? ' Personalize' : step === 2 ? 'Choose Level' : 'Start'}
                                </button>
                            </div>
                        ))}
                    </div>

                    {/* הצד הימני של הדף */}
                    <div id='right' className=' col-md-6 h-100 d-flex flex-column align-items-center justify-content-center'>
                       
                        <div className="col-md-12 rounded h-100" >
                            <div className="info d-flex flex-column border border-primary"  style={{marginTop:'250px',marginLeft:'250px',width:'600px'}}>
                                <div className='bg-white text-center m-3 p-3 rounded-3 fs-4 ' style={{ flex: 1 }}>
                                    <p>My Score: {myScore}</p>
                                </div>
                                <div className='bg-white text-center m-3 p-3 rounded-3 fs-4' style={{ flex: 1 }}>
                                    <p>Questions Answered: {questionsAnswered}</p>
                                </div>
                                <div className='bg-white text-center m-3 p-3 rounded-3 fs-4' style={{ flex: 1 }}>
                                    <p>Play Time: {playTime}</p>
                                </div>
                                <div className='bg-white text-center m-3 p-3 rounded-3 fs-4' style={{ flex: 1 }}>
                                    <p>Days Playing: {daysPlaying}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* בחירת רמת משחק */}
            {showLevelModal && (
                // מה שעוטף את הקופסא של בחירת רמה
                <div className="modal" style={{ display: 'block', position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 1000,width:'1000px',height:'500px'}}onClick={() => setShowLevelModal(false)}>
                    <div className="modal-content" style={{ position: 'relative', margin: '15% auto', padding: '20px', background: 'white', borderRadius: '5px', width: '80%' }}>
                        <h2 style={{alignSelf:'center'}}>Select Level</h2>
                        <div className="d-flex justify-content-around">
                            {[1, 2, 3].map(level => (
                                <button key={level} className="btn btn-primary" onClick={() => handleLevelSelect(level)}>
                                    Level {level}
                                </button>
                            ))}
                        </div>
                        <button className="btn btn-secondary" onClick={() => setShowLevelModal(false)} style={{ marginTop: '20px',width:'250px',alignSelf:'center'}}>
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default HomeClient;
