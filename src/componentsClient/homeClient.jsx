import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';

const homeClient = () => {
    const myName = useSelector(state => state.myDetailsSlice.name);
    
    useEffect(() => {
       console.log("name:" + myName);
    }, [])

    return (
        <div className="container">
            {/* Navbar */}
            <nav className="navbar navbar-light bg-light">
                <a className="navbar-brand" href="#">Welcome: {myName}</a>              
                <div className="ml-auto">
                    <button className="btn btn-outline-primary">Menu Item 1</button>
                    <button className="btn btn-outline-primary">Menu Item 2</button>
                </div>
            </nav>

            <div className="row mt-4">

                <div className="col-md-6 d-flex flex-column align-items-end">
                    {/* Buttons */}
                    <button className="btn btn-outline-primary mb-2">choose avatar</button>
                    <button className="btn btn-outline-primary mb-2">choose level</button>
                    <button className="btn btn-outline-primary ">start</button>
                </div>

                <div className="col-md-6">
                    {/* Input Fields */}
                    <div className="d-flex flex-column">
                        <input type="text" className="form-control mb-2" placeholder="Input 1" />
                        <input type="text" className="form-control mb-2" placeholder="Input 2" />
                        <input type="text" className="form-control" placeholder="Input 3" />
                    </div>
                </div>

            </div>
        </div>
    );
}
export default homeClient
