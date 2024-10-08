import React, { useEffect,useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';






const homeClient = () => {
    const myName = useSelector(state => state.myDetailsSlice.name);
    
    
    useEffect(() => {
       console.log("name:" + myName);
    }, [])

    
    const navigate = useNavigate();

    const handleButtonClick = (step) => {
        if (step === 1) {
            navigate('/avatar'); // הנתיב לדף בחירת אווטאר
        }
        else if(step===2){
           
        }
        else if(step===3){
            navigate('/chat');
        }
    };

    
    return (
        <div className="container-fluid" style={{ height: '100vh', backgroundColor: '#f8f9fa' }}>
        <div className="row h-100">
            <div className="d-flex flex-row justify-content-between w-100 h-100">
                {/* עוטף את הכפתורים */}
                <div id='left' className="border border-primary p-5 col-md-6 d-flex flex-column align-items-center justify-content-center h-100">
                    
                    {[1, 2, 3].map((step) => (
                        <div key={step} className='d-flex align-items-center mt-2 w-100'>
                            <div className='bg-white rounded-circle border border-secondary d-flex justify-content-center align-items-center' style={{ width: '70px', height: '70px' }}>
                                <span style={{ fontSize: '2rem' }}>{step}</span>
                            </div>
                            <button className="btn btn-outline-primary rounded-5 " onClick={()=> handleButtonClick(step)} style={{ width: '60%', fontSize: '2.9rem',padding:'20px', margin:'15px'}}>
                                {step === 1 ? ' Personalize' : step === 2 ? 'Choose Level' : 'Start'}
                            </button>
                        </div>
                    ))}
                </div>

                {/* עוטף את השורות מידע */}
                <div id='right' className='border border-primary p-5 col-md-6 h-100'>
                    <h2 className="mb-4">Information</h2>
                    <div className="col-md-12 border border-primary p-4 rounded h-100">
                        <div className="d-flex flex-column">
                            {['Info 1', 'Info 2', 'Info 3', 'Info 4'].map((info, index) => (
                                <div key={index} className='bg-white text-center m-3 p-3 rounded' style={{ flex: 1 }}>
                                    <p className=''>{info}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>

        
    </div>
    );
}
export default homeClient
