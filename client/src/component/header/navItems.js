import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSignInAlt, faCommentDots, faFileUpload, faSignOutAlt, faFileAlt } from '@fortawesome/free-solid-svg-icons';

const SideNavItems = () => {
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
            text: "Admin Profile",
            link: "/admin",
            icon: faFileAlt,
            restricted: true
        },
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

export default SideNavItems