import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSignInAlt, faSignOutAlt, faFileAlt, faPeopleArrows, faPeopleCarry, faPowerOff, faUser, faUserAlt, faUserAltSlash, faUserAstronaut, faUserCheck, faUserCircle, faUserCog, faUserEdit, faUserInjured, faUserLock, faUsers } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux'

const SideNavItems = ({admin}) => {
    const items = [
        {
            type: 'navItem',
            icon: faHome,
            text: 'Home',
            link: '/',
            restricted: false
        },
        {
            type: 'navItem',
            text: "Checkin",
            link: "/checkin",
            icon: faSignInAlt,
            restricted: false
        },
        {
            type: 'navItem',
            text: "Checkout",
            link: "/checkout",
            icon: faSignOutAlt,
            restricted: false
        },
        {
            type: 'navItem',
            text: "Admin",
            link: "/admin",
            icon: faUserAlt,
            restricted: true
        }
    ]
    
    const element = (item, i) => (
        <div key={i} className={item.type}>
            <Link to={item.link}>
                <FontAwesomeIcon icon={item.icon} />
                {item.text}
            </Link>
        </div>
    )

    const showItems = () => (
        items.map((item, i) => {
            return element(item, i)
        })
    )
    return (
        <div>
            {showItems()}
        </div>
    )
}

function mapStateToProps(state){
    return {
        admin:state.admin
    }
}
export default connect(mapStateToProps)(SideNavItems)