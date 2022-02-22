import React from 'react'
import SideNav from 'react-simple-sidenav'
import SideNavItems from './items'
const Nav = (props) => {
    return (
        <SideNav
            showNav={props.showNav}
            onHideNav={props.onHideNav}
            navStyle={{
                background: '#242',
                maxWidth: '220px',
            }}
        >
            <div className='sidebar_button-close'>
                <button onClick={props.onHideNav} className='button-close'>
                    X
                </button>
            </div>

            <SideNavItems />
        </SideNav>
    )
}

export default Nav