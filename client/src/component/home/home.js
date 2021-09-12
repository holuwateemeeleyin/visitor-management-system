import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {

    return (
        <div className="home_container">
            {/* <div className="container"> */}
            <div className="container-row">
                <div className="col-3 welcome">
                    <h1>
                        Welcome to <br />
                        Code Squad <br />
                        Visitor Management <br />
                        System
                    </h1>
                    <p style={{color:'#1a1f36'}}> Our guests are important to us. Hence, this is a way to save the stress of doing it traditional way. Enjoy your stay.
                    </p>
                    <p><strong>Note:</strong> Your data are saved</p>
                    <br/>
                    <Link to="/checkin" className="checkin">
                        Check In
                    </Link>
                </div>
                <div className="col-6">
                    {/* <img src='../images/visitor-management-system.png' alt='image1' height="450px" width="450px"/> */}
                    <img src='../images/image2.png' alt='image1' height="450px" width="450px"/>
                </div>

            </div>
        </div>
    )
}
export default Home