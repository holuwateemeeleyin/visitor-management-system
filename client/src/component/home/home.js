import React from 'react'
import { Link } from 'react-router-dom'
import Slide from 'react-reveal/Slide';
import Bounce from 'react-reveal/Bounce'
import Zoom from 'react-reveal/Zoom'
import Flip from 'react-reveal/Flip'


const Home = () => {

    return (
        <div className="home_container">
            {/* <div className="container"> */}
            <div className="container-row">
                <div className="col-3 welcome">

                    <Slide left>
                        <h1>
                            Welcome to <br/>
                            <i>Ems'</i> Visitor <br/>
                            Management System
                        </h1>
                    </Slide>
                    <Zoom left cascade>
                        <div>
                        <p style={{ color: '#1a1f36', fontSize:'20px'}} classname="guests"> Our guests are important to us. We provide a way to save the stress of doing it traditional way. 
                            Enjoy your stay.
                        </p>
                        <p><strong>Note:</strong> Your data is saved</p>
                        </div>
                    </Zoom>
                    <br/>
                    <Bounce>
                        <Link to="/checkin" className="checkin">
                            Check In
                        </Link>
                    </Bounce>

                </div>
                <Flip>
                    <div className="col-6">
                        <img src='../images/image2.png' alt='image1' className='responsive' />
                    </div>
                </Flip>
            </div>
        </div>
    )
}
export default Home