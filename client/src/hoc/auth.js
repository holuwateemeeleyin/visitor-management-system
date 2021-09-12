/* eslint-disable import/no-anonymous-default-export */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { auth } from '../component/action'

export default function (ComposedClass, reload){
    class AuthenticationCheck extends Component {
        state = {
            loading: true
        }

        componentWillMount(){
            this.props.dispatch(auth())
        }

        componentWillReceiveProps(nextProps){
            this.setState({loading:false})
            if(!nextProps.admin.login.isAuth){
                if(reload === true){
                    this.props.history.push('/login')
                }
            } else {
                if(reload === false){
                    this.props.history.push('/profile')
                }
            }
        }
        render(){
            if(this.state.loading){
                return <div className="loader">loading...</div>
            }
            return(
                <ComposedClass {...this.props} admin={this.props.admin}/>
            )
        }
    }

    function mapStateToProps(state){
        return {
            admin:state.admin
        }
    }
    return connect (mapStateToProps)(AuthenticationCheck)
}