import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';

const homeClient = () => {
    const myName = useSelector(state => state.myDetailsSlice.name);
    
    useEffect(() => {
       console.log("name:" + myName);
    }, [])

    return (
        <div className="container-fluid" style={{ height: '100vh' }}>
            <div className="row h-100">
                <div className="d-flex flex-row justify-content-between w-100 h-100">
                    {/* עוטף את הכפתורים */}
                    <div id='left' className="border border-primary p-5 col-md-6 d-flex flex-column align-items-center justify-content-center h-100">
                    <div className='d-flex align-items-center mt-2 ms-2 w-100'>
                            <div className='bg-white rounded-circle border border-secondary d-flex justify-content-center align-items-center' style={{ width: '70px', height: '70px' }}>
                                <span style={{ fontSize: '2rem' }}>1</span>
                            </div>
                            <button className="btn btn-outline-primary mb-2 ms-2" style={{ width: '100%', fontSize: '1.5rem' }}>choose avatar</button>
                        </div>
                        <div className='d-flex align-items-center mt-2 ms-2 w-100'>
                            <div className='bg-white rounded-circle border border-secondary d-flex justify-content-center align-items-center' style={{ width: '70px', height: '70px' }}>
                                <span style={{ fontSize: '2rem' }}>2</span>
                            </div>
                            <button className="btn btn-outline-primary mb-2 ms-2" style={{ width: '100%', fontSize: '1.5rem' }}>choose level</button>
                        </div>
                        <div className='d-flex align-items-center mt-2 ms-2 w-100'>
                            <div className='bg-white rounded-circle border border-secondary d-flex justify-content-center align-items-center' style={{ width: '70px', height: '70px' }}>
                                <span style={{ fontSize: '2rem' }}>3</span>
                            </div>
                            <button className="btn btn-outline-primary mb-2 ms-2" style={{ width: '100%', fontSize: '1.5rem' }}>start</button>
                        </div>
                    </div>

                    {/* עוטף את השורות מידע */}
                    <div id='right' className='border border-primary p-5 col-md-6 h-100'>
                        <div className="col-md-12 border border-primary p-5 rounded-5 h-100">
                            <div className="d-flex flex-column">
                                <div className='bg-white text-xl-center m-3 w-100' style={{ flex: 1 }}>
                                    <p className=''>ddd</p>
                                </div>
                                <div className='bg-white text-xl-center m-3 w-100' style={{ flex: 1 }}>
                                    <p className=''>dd</p>
                                </div>
                                <div className='bg-white text-xl-center m-3 w-100' style={{ flex: 1 }}>
                                    <p className=''>dd</p>
                                </div>
                                <div className='bg-white text-xl-center m-3 w-100' style={{ flex: 1 }}>
                                    <p className=''>dd</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default homeClient
