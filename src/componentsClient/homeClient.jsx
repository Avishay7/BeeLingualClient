import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const HomeClient = () => {
    const myName = useSelector(state => state.myDetailsSlice.name);
    const myLevel = useSelector(state => state.myDetailsSlice.level);
    const navigate = useNavigate();

    const [showLevelModal, setShowLevelModal] = useState(false);
    const [selectedLevel, setSelectedLevel] = useState(null);

    const myScore = 6;
    const playTime = "5 hours"; 
    const questionsAnswered = 20; 
    const daysPlaying = 10; 

    useEffect(() => {
        console.log("name:", myName);
    }, [myName]);

    useEffect(() => {
        console.log("level:", myLevel);
    }, [myLevel]);

    const handleButtonClick = (step) => {
        switch (step) {
            case 1:
                navigate('/avatar');
                break;
            case 2:
                setShowLevelModal(true);
                break;
            case 3:
                selectedLevel !== null ? navigate('/chat') : alert("Please select a level first!");
                break;
            default:
                break;
        }
    };

    const handleLevelSelect = (level) => {
        console.log("Selected Level:", level);
        setSelectedLevel(level);
        setShowLevelModal(false);
    };

    const handleModalClick = (e) => {
        // אם הלחיצה היא על דיב המודל ולא על התוכן, נסגור את המודל
        if (e.target === e.currentTarget) {
            setShowLevelModal(false);
        }
    };

    const steps = [
        { label: 'Personalize', step: 1 },
        { label: 'Choose Level', step: 2 },
        { label: 'Start', step: 3 }
    ];

    return (
        <div className="container-fluid bg-light text-dark" style={{ height: '100vh', padding: '20px', backgroundImage: 'linear-gradient(to bottom right, #f9f9f9, #e0e0e0)' }}>
            <div className="row h-100">
                <div className="d-flex flex-row justify-content-between w-100 h-100">
                    {/* Left Side */}
                    <div id='left' className="p-5 col-md-6 d-flex flex-column align-items-center justify-content-center h-100">
                        <h1 className="mb-4 text-primary" style={{ fontFamily: 'fantasy' }}>Welcome, {myName}!</h1>
                        {steps.map(({ label, step }) => (
                            <div key={step} className='d-flex align-items-center mt-3 w-100'>
                                <button className="btn btn-outline-success rounded-5" onClick={() => handleButtonClick(step)} style={{ width: '60%', fontSize: '2rem', padding: '15px', margin: '15px', backgroundColor: '#28a745', color: '#fff' }}>
                                    {label}
                                </button>
                            </div>
                        ))}
                    </div>

                    {/* Right Side */}
                    <div id='right' className='col-md-6 h-100 d-flex flex-column align-items-center justify-content-center'>
                        <div className="col-md-12 rounded h-100">
                            <div className="info d-flex flex-column border border-dark mt" style={{ marginTop: '50px', width: '80%', background: '#ffffff', borderRadius: '15px', boxShadow: '0 4px 15px rgba(0,0,0,0.2)' }}>
                                <h3 className="text-center mt-3 text-primary">Game Stats</h3>
                                {[{ label: 'My Score', value: myScore }, { label: 'Questions Answered', value: questionsAnswered }, { label: 'Play Time', value: playTime }, { label: 'Days Playing', value: daysPlaying }].map(({ label, value }) => (
                                    <div key={label} className='bg-light text-center m-2 p-3 rounded-3 fs-4' style={{ flex: 1, border: '2px solid #28a745' }}>
                                        <p>{label}: <strong>{value}</strong></p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Level Selection Modal */}
            {showLevelModal && (
                <div 
                    className="modal" 
                    style={{ display: 'block', position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.8)', zIndex: 1000 }}
                    onClick={handleModalClick} // הוספת האירוע כאן
                >
                    <div className="modal-content" style={{ position: 'relative', margin: '15% auto', padding: '20px', background: '#ffffff', borderRadius: '10px', width: '80%', color: 'black', boxShadow: '0 4px 15px rgba(0,0,0,0.2)' }}>
                        <h2 style={{ alignSelf: 'center', color: '#007bff' }}>Select Level</h2>
                        <div className="d-flex justify-content-around">
                            {[1, 2, 3].map(level => (
                                <button key={level} className="btn btn-info" onClick={() => handleLevelSelect(level)} style={{ fontSize: '1.5rem', padding: '10px 20px' }}>
                                    Level {level}
                                </button>
                            ))}
                        </div>
                        <button className="btn btn-secondary" onClick={() => setShowLevelModal(false)} style={{ marginTop: '20px', width: '250px', alignSelf: 'center' }}>
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default HomeClient;
