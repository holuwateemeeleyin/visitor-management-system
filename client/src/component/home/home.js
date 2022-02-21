import React from 'react'
import { Link } from 'react-router-dom'
import Slide from 'react-reveal/Slide';
import Bounce from 'react-reveal/Bounce'
import Zoom from 'react-reveal/Zoom'
import Flip from 'react-reveal/Flip'
import './home.css'
import homeViewImage from '../Assets/image2.png'

const Home = () => {

    return (
        <div className="homeMobile_container-parent">
            <div className='homeMobile_container'>
                <div className='container_text'>
                    <Slide left>
                        <h1>
                            Welcome to <i>Ems'</i> Visitor Management System
                        </h1>
                    </Slide>
                    <Zoom left cascade>
                        <p style={{ color: '#1a1f36', fontSize: '20px' }}>
                            Our guests are important to us. We provide a way to save the stress of doing it traditional way.
                        </p>
                    </Zoom>
                    <Slide right>
                        <p><strong>Note:</strong> Your data will not be used for anything apart from record keeping</p>
                    </Slide>
                    <Bounce>
                        <Link to="/checkin" className="link-button">
                            Check In
                        </Link>
                    </Bounce>
                </div>
                <Flip>
                    <div className='container_image'>
                        <img src={homeViewImage} alt='visitorImage' />
                    </div>
                </Flip>
            </div>
            {/* <div className="container-row">
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
            </div> */}
        </div>
    )
}
export default Home