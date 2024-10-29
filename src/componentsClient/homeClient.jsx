import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { API_URL, doApiGet, doApiMethod } from '../services/apiService';
import { addAvatar, addLevel, addName } from '../featuers/myDetailsSlice';

const HomeClient = () => {
    const initialUsers = [
        {
            id: 1,
            tate: "William Justice",
            time: "Davis",
            level: "hvusa",
        },
        {
            id: 2,
            tate: "William Justice",
            time: "Davis",
            level: "hvusa",
        },
    ];

    let [ar, setAr] = useState(initialUsers);
    const myName = useSelector(state => state.myDetailsSlice.name);
    const myLevel = useSelector(state => state.myDetailsSlice.level);
    const myAvatar = useSelector(state => state.myDetailsSlice.avatar);
    const navigate = useNavigate();
    const [showLevelModal, setShowLevelModal] = useState(false);
    const [selectedLevel, setSelectedLevel] = useState(myLevel ? myLevel : "beginner");
    const [myInfo, setmyInfo] = useState({});
    const dispatch = useDispatch();

    const myScore = 6;
    const playTime = "5 hours";
    const questionsAnswered = 20;

    useEffect(() => {
        doApi()
    }, []);

    const doApi = async () => {
        let url = API_URL + "/users/myInfo";
        try {
            let data = await doApiGet(url);
            console.log(data.data);
            setmyInfo(data.data);
            setSelectedLevel(data.data.level);
            dispatch(addLevel({ level: data.data.level }));
            dispatch(addAvatar({ avatar: data.data.avatar }));
            dispatch(addName({ name: data.data.FirstName }));
            doApiAllChats(data.data._id)
        } catch (error) {
            console.log(error);
        }
    }


    const doApiAllChats = async(_id) => {
        let url = API_URL + "/chats/allChats/" + _id;
        console.log(url);
        try {
            let data = await doApiGet(url);
            console.log(data.data);
            setAr(data.data);
          } catch (error) {
            console.log(error);
          }
      };




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
        doApiUpdatelevel(level)
        setShowLevelModal(false);
    };

    const doApiUpdatelevel = async (_level) => {
        let _dataBody = {
            level: _level,
        }
        let url = API_URL + "/users/level";
        console.log(url);

        try {
            let data = await doApiMethod(url, "PUT", _dataBody);
            console.log(data);
            dispatch(addLevel({ level: _level }));
            window.location.reload();
        } catch (error) {
            console.log(error);
        }
    }

    const handleModalClick = (e) => {
        // אם הלחיצה היא על דיב המודל ולא על התוכן, נסגור את המודל
        if (e.target === e.currentTarget) {
            setShowLevelModal(false);
        }
    };

    const steps = [
        { label: 'Personalize', step: 1 },
        { label: 'Choose Level', step: 2 },
        { label: 'Start a lesson', step: 3 }
    ];



    return (
        <div className="container " style={{ height: '100vh', padding: '20px', }}>

            <div style={{
                marginBottom: '0.5rem',
                textAlign: 'center',
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
            }}>
                <h1 className='mb-2'>Welcome {myInfo.FirstName}</h1>
                <h4>It is important to keep practicing</h4>
            </div>

            <div className="row">
                <div className="d-flex flex-row justify-content-between w-100 h-100">
                    {/* Left Side */}
                    <div id='left' className=" p-5 col-md-6 d-flex flex-column align-items-center justify-content-center h-100">
                        {steps.map(({ label, step }) => (
                            <div key={step} className='d-flex align-items-center mt-3 w-100'>
                                <button className="btn btn-info border-dark rounded-3"
                                    onClick={() => handleButtonClick(step)} style={{
                                        width: '50%', fontSize: '1.5rem', padding: '15px',
                                        margin: '10px', color: 'black'
                                    }}>
                                    {label}
                                </button>
                            </div>
                        ))}
                    </div>

                    {/* Right Side */}
                    <div id='right' className=' col-md-6 m-4 h-100 d-flex flex-column align-items-center justify-content-center'>
                        <div className="col-md-12 ">
                            <div className="p-3 info d-flex flex-column border border-dark mt p-2" style={{ marginTop: '50px', width: '80%', background: '#ffffff', borderRadius: '10px', boxShadow: '0 4px 15px rgba(0,0,0,0.2)' }}>
                                <h3 className=" p-2 text-center mt-3">Your lesson history:</h3>
                                <div className='p-2'>
                                    <table className="table table-striped shadow-lg">
                                        <thead>
                                            <tr>
                                                <th>List</th>
                                                <th>date</th>
                                                <th>level</th>
                                                <th>time</th>
                                            </tr>
                                        </thead>
                                        <tbody >
                                            {ar.map((chat, index) => {
                                                return (
                                                    <tr key={index}>
                                                        <td>{index + 1}</td>
                                                        <td>{chat.date_created ? chat.date_created.substring(10, length - 1) : ""}</td>
                                                        <td>{chat.level}</td>
                                                        <td>{chat.time}</td>
                                                    </tr>
                                                );
                                            })}
                                        </tbody>
                                    </table>
                                </div>

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
                    <div className="modal-content" style={{ position: 'relative', margin: '15% auto', padding: '50px', background: '#ffffff', borderRadius: '50px', width: '80%', color: 'black', boxShadow: '0 4px 15px rgba(0,0,0,0.2)' }}>
                        <h1 className='mb-4 text-center'>{myLevel ? `your level ${myLevel}` : "Select Level :"}</h1>
                        <div className="d-flex justify-content-around">
                            {["beginner", "Advanced", "Professional"].map(level => (
                                <button key={level} className="btn btn-info" onClick={() => handleLevelSelect(level)} style={{ fontSize: '1.5rem', padding: '10px 20px' }}>
                                    {level}
                                </button>
                            ))}
                        </div>
                        <button className="btn btn-secondary mt-5" onClick={() => setShowLevelModal(false)} style={{ marginTop: '20px', width: '500px', alignSelf: 'center' }}>
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default HomeClient;
