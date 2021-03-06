import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Nav from './sidenav/sidenav'
import './headerMobile.css'
import logo from '../Assets/emLogo.png'

class Header extends Component {
    state = {
        showNav: false
    }
    onHideNav = () => {
        this.setState({ showNav: false })
    }
    render() {
        return (
            <header>
                <div className='header_container'>
                    <div className="open_nav">
                        <FontAwesomeIcon
                            onClick={() => this.setState({ showNav: true })}
                            // className="bars "
                            icon={faBars}
                            style={{
                                color: '#008116',
                                fontSize: '2em',
                                cursor: 'pointer'
                            }}
                        />
                    </div>
                    <Nav
                        showNav={this.state.showNav}
                        onHideNav={() => this.onHideNav()}
                    />
                    <Link to="/" className="logo">
                        {/* Ems' Place */}
                        <img src={logo} alt='logo' width='70px' />
                    </Link>
                </div>
            </header>
        )
    }
}

export default Header