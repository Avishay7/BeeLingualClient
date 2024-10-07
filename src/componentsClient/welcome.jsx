import React from "react";
import { useNavigate } from 'react-router-dom';

const Welcome = () => {
    let nav = useNavigate();
    const toSignIn = () => {
        nav("/login");
    };
    const toSignUp = () => {
        nav("/SignUp");
    };

    return (
        <div className="container mt-5">
            <div className="d-flex justify-content-lg-around p-2 m-3 rounded" style={{ height: '350px' }}>

                <div className="row" style={{ height: '50px' }}>
                    <button onClick={toSignIn} className="btn btn-outline-primary m-3">Sign In</button>
                    <button onClick={toSignUp} className="btn btn-outline-primary m-3">Sign Up</button>
                </div>

                <div>
                    <div className="bg-white p-3 shadow-lg rounded" style={{ height: '200px' }}>
                        <h3>About Us</h3>
                        <p>We are a company focused on providing the best services...</p>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-12">
                    <div className="row justify-content-center">
                        <div className="col-3">
                            <div className="p-3 m-2 shadow-sm rounded bg-white">
                                <h5>Recommendation 1</h5>
                                <p>"Great service! Highly recommended."</p>
                            </div>
                        </div>

                        <div className="col-3"> 
                            <div className="p-3 m-2 shadow-sm rounded bg-white">
                                <h5>Recommendation 2</h5>
                                <p>"Exceptional quality and customer support."</p>
                            </div>
                        </div>

                        <div className="col-3">
                            <div className=" p-3 m-2 shadow-sm rounded bg-white">
                                <h5>Recommendation 3</h5>
                                <p>"Fast delivery and reliable services."</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Welcome;