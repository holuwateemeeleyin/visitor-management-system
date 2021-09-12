import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './component/home/home'
import visitorDetails from './component/visitorDetails'
import Layout from './hoc/layout'
import Checkin from './component/visitor/checkin'
import Checkout from './component/visitor/checkout'
import Login from './component/admin/login'
import AdminProfile from './component/admin/adminProfile'
import Logout from './component/admin/logout'
import Auth from './hoc/auth'

const Routes = ()=>{
    return (
        <Layout>
            <Switch>
                <Route path="/" exact component={Auth(Home, null)} />
                <Route path="/checkin" exact component={Auth(Checkin, false)}/>
                <Route path="/visitors" exact component={Auth(visitorDetails, true)} />
                <Route path="/checkout" exact component={Auth(Checkout, false)}/>
                <Route path="/login" exact component={Auth(Login, false)} />
                <Route path="/profile" exact component ={Auth(AdminProfile, true)}/>
                <Route path="/logout" exact component ={Auth(Logout, true)}/>
            </Switch>
        </Layout>
    )
}

export default Routes