import React from 'react'
import HeaderMobile from '../component/header/headerMobile'
import Header from '../component/header/header'
const Layout =(props)=> {
    return (
        <div>
            <HeaderMobile/>
            <Header/>
            <div>
                {props.children}
            </div>
        </div>
    )
}

export default Layout