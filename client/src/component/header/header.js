import React from 'react'
import './header.css'
import { Link } from 'react-router-dom'
export default function header() {
    return (
        <div className='header_container-parent'>
            <div className='header_container'>
                <div className='navbar-link'>
                    <Link to='/' >Home</Link>
                    <Link to='/checkin'>Checkin</Link>
                    <Link to='/checkout'>Checkout</Link>
                    <Link to='profile'>Admin</Link>
                    <Link to='visitors'>Visitors</Link>
                    <Link to='/logout'>Logout</Link>
                </div>
                <div className='header-logo'>
                    <Link to="/" className="logo">
                        Ems' Place
                    </Link>
                </div>
            </div>
        </div>
    )
}
