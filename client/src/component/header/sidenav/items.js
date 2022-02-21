import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSignInAlt, faSignOutAlt, faUserAlt, faUsers } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux'
import './sidenav.css'

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
            restricted: false,
            exclude:true
        },
        {
            type: 'navItem',
            text: "Checkout",
            link: "/checkout",
            icon: faSignOutAlt,
            restricted: false,
            exclude:true
        },
        {
            type: 'navItem',
            text: "Admin",
            link: "/profile",
            icon: faUserAlt,
            restricted: false,
            exclude:true
        },
        {
            type: 'navItem',
            text: "Visitors",
            link: "/visitors",
            icon: faUsers,
            restricted: true
        },
        {
            type: 'navItem',
            text: "Logout",
            link: "/logout",
            icon: faSignOutAlt,
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
        admin.login ?
            items.map((item, i) => {
                if(admin.login.isAuth){
                    return !item.exclude ?
                        element(item, i)
                    :null
                } else {
                    return !item.restricted ?
                        element(item,i)
                    :null
                }
                // return element(item, i)
            })
        :null
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