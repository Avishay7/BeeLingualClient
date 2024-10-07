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
            <div className="d-flex justify-content-around p-5 m-3" style={{ height: '350px' }}>
                <div className="text-center p-3" style={{ height: '100%', width: "40%" }}>
                    <div className="m-3">logo</div>
                    <button onClick={toSignIn} className="btn btn-outline-primary m-3 w-50" >Sign In</button>
                    <button onClick={toSignUp} className="btn btn-outline-primary m-3 w-50">Sign Up</button>
                </div>

                <div className="px-4" style={{ height: '100%', width: "60%" }}  >
                    <div className="bg-white p-4 shadow-lg text-center" style={{ height: '100%',width: "80%", borderRadius: '16px' }}>
                        <h3 className="py-2">About Us</h3>
                        <p>We are a company focused on providing the best services... We are a company focused on providing the best services... We are a company focused on providing the best services... We are a company focused on providing the best services... We are a company focused on providing the best services...</p>
                    </div>
                </div>
            </div>

            <div className=" row justify-content-center text-center m-4">
                <div className="col-3">
                    <div className="p-3 m-2 shadow-lg  bg-white" style={{minHeight: '150px', borderRadius: '16px' }}>
                        <div>image</div>
                        <h5>Recommendation 1</h5>
                        <p>"Great service! Highly recommended."</p>
                    </div>
                </div>

                <div className="col-3">
                    <div className="p-3 m-2 shadow-sm  bg-white" style={{minHeight: '150px', borderRadius: '16px' }}>
                        <div>image</div>
                        <h5>Recommendation 2</h5>
                        <p>"Exceptional quality and customer support."</p>
                    </div>
                </div>

                <div className="col-3">
                    <div className="p-3 m-2 shadow-sm  bg-white" style={{minHeight: '150px', borderRadius: '16px' }}>
                        <div>image</div>
                        <h5>Recommendation 3</h5>
                        <p>"Fast delivery and reliable services."</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Welcome;