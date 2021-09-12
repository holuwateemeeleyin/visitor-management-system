import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { loginAdmin } from '../action'

class Login extends PureComponent {
    state = {
        adminId: '',
        password:'',
        error: '',
        success: '',
    }


    componentWillReceiveProps(nextProps){
        if(nextProps.admin.login.isAuth){
            this.props.history.push('/profile')
        }
    }
    
    submitForm = (e) => {
        e.preventDefault();

        const query = this.state.adminId

        if (query === '') {
            this.setState({
                error: 'please enter the admin ID'
            })
        }
        this.props.dispatch(loginAdmin(this.state))
    }
    
    render() {
        // console.log(this.props);
        let admin = this.props.admin
        return (
            <div>

                <div className="login-root">
                    <div className="box-root flex-flex flex-direction--column">
                        <div className="loginbackground box-background--white padding-top--64">
                            <div className="loginbackground-gridContainer">
                                <div className="box-root flex-flex">
                                    <div className="box-root">
                                    </div>
                                </div>
                                <div className="box-root flex-flex2">
                                    <div className="box-root box-divider--light-all-2 animationLeftRight tans3s"></div>
                                </div>
                                <div className="box-root flex-flex3">
                                    <div className="box-root box-background--blue800"></div>
                                </div>
                                <div className="box-root flex-flex4">
                                    <div className="box-root box-background--blue animationLeftRight"></div>
                                </div>
                                <div className="box-root flex-flex5">
                                    <div className="box-root box-background--gray100 animationLeftRight tans3s"></div>
                                </div>
                                <div className="box-root flex-flex6">
                                    <div className="box-root box-background--cyan200 animationRightLeft tans4s"></div>
                                </div>
                                <div className="box-root flex-flex7">
                                    <div className="box-root box-background--blue animationRightLeft"></div>
                                </div>
                                <div className="box-root flex-flex8">
                                    <div className="box-root box-background--gray100 animationRightLeft tans4s"></div>
                                </div>
                                <div className="box-root flex-flex9">
                                    <div className="box-root box-divider--light-all-2 animationRightLeft tans3s"></div>
                                </div>
                            </div>
                        </div>
                        <div className="box-root padding-top--24 flex-flex flex-direction--column">
                            <div className="box-root padding-top--48 padding-bottom--24 flex-flex flex-justifyContent--center">
                                <h1>Admin Page </h1>
                            </div>
                            <div className="formbg-outer">
                                <div className="formbg">
                                    <div className="formbg-inner padding-horizontal--48">
                                        <span className="padding-bottom--15">This is to keep track of our guests</span>
                                        <form id="stripe-login" onSubmit={this.submitForm}>
                                            <div className="field padding-bottom--24">
                                                <label for="adminId">Admin ID</label>
                                                <input
                                                    type="text"
                                                    value={this.state.adminId}
                                                    onChange={(e)=>this.setState({adminId:e.target.value})}
                                                />
                                            </div>
                                            
                                            <div className="field padding-bottom--24">
                                                <label for="password">Password</label>
                                                <input
                                                    type="password"
                                                    value={this.state.password}
                                                    onChange={(e)=>this.setState({password:e.target.value})}
                                                />
                                            </div>
                                            <div style={{color:'red'}}>
                                                {
                                                    admin.login ?
                                                    <div style={{color:'red'}}>{admin.login.message}</div>
                                                    :null
                                                }
                                            </div>
                                            <div style={{color:'green'}}> {this.state.success}</div>
                                            <div className="field padding-bottom--24">
                                                <input type="submit" name="submit" value="Login" />
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log(state);
    return {
        admin: state.admin
    }
}
export default connect(mapStateToProps)(Login)