import React from 'react'

const AdminProfile = (props)=> {
    console.log(props);
    const admin = props.admin.login
    return (
        <div className="user_container">
            <div className="avatar">
                <div className="nfo">
                    <div><span>Name:</span> {admin.name} </div>
                    <div><span>Admin ID:</span> {admin.adminId}</div>
                </div>
            </div>
        </div>
    )
}

export default AdminProfile