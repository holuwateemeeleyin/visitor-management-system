import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { createVisitor, getVisitors } from '../action'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import './checkin.css'
class Checkin extends PureComponent {
    state = {
        name: "",
        email: '',
        phone: '',
        purpose: '',
        visitorHost: '',
        error: " ",
        success: '',
    }

    componentWillReceiveProps(nextProps) {
        
        if(nextProps.visitors.create === true) {
            this.setState({
                name:'',
                email:'',
                phone:'',
                purpose:'',
                visitorHost:'',
                success: 'Successfully checked In',
                error:''
            })
        } else if (nextProps.visitors.error !== undefined) {
            if(nextProps.visitors.error === "VISITORFOUND" ){
                this.setState({
                    error:"Visitor is already Checked in with the same email"
                })
            } else {
                this.setState(" Try Again. Network Error")
            }
        }
    }


    handleInputName = (event) => {
        this.setState({ name: event.target.value })
    }
    handleInputEmail = (event) => {
        this.setState({ email: event.target.value })
    }
    handleInputPhone = (event) => {
        this.setState({ phone: event.target.value })
    }
    handleInputPurpose = (event) => {
        this.setState({ purpose: event.target.value })
    }
    handleInputHost = (event) => {
        this.setState({ visitorHost: event.target.value })
    }

    componentWillMount() {
        this.props.dispatch(getVisitors())
    }
    submitForm = (e) => {
        e.preventDefault();

        const query = this.state.name

        if (query === '') {
            this.setState({
                error: 'All entries must be filled'
            })
        }
        this.props.dispatch(createVisitor({
            name: this.state.name,
            email: this.state.email,
            phone: this.state.phone,
            purpose: this.state.purpose,
            visitorHost: this.state.visitorHost
        }, this.props.visitors.visitors))
    }

    
    render() {
        console.log(this.props);
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
                                <h1>Fill in the the form </h1>
                            </div>
                            <div className="formbg-outer">
                                <div className="formbg">
                                    <div className="formbg-inner padding-horizontal--48">
                                        <span className="padding-bottom--15">This is to keep track of our guests</span>
                                        <form id="stripe-login" onSubmit={this.submitForm}>
                                            <div className="field padding-bottom--24">
                                                <label for="name">Name</label>
                                                <input
                                                    type="text"
                                                    value={this.state.name}
                                                    onChange={this.handleInputName}
                                                />
                                            </div>
                                            <div className="field padding-bottom--24">
                                                <label for="email">Email</label>
                                                <input
                                                    type="email"
                                                    value={this.state.email}
                                                    onChange={this.handleInputEmail}
                                                />
                                            </div>
                                            <div className="field padding-bottom--24">
                                                <label for="phone">Phone Number</label>
                                                <input
                                                    type="number"
                                                    value={this.state.phone}
                                                    onChange={this.handleInputPhone}
                                                />
                                            </div>
                                            <div className="field padding-bottom--24">
                                                <label for="purpose">Purpose of Visit</label>
                                                <input
                                                    type="text"
                                                    value={this.state.purpose}
                                                    onChange={this.handleInputPurpose}
                                                />
                                            </div>
                                            <div className="field padding-bottom--24">
                                                <label for="host">Host Name</label>
                                                <input
                                                    type="text"
                                                    value={this.state.visitorHost}
                                                    onChange={this.handleInputHost}
                                                />
                                            </div>
                                            <div style={{color:'red'}}>{this.state.error}</div>
                                            <div style={{color:'green'}}> {this.state.success}</div>
                                            <div className="field padding-bottom--24">
                                                <input type="submit" name="submit" value="Check in" />
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
    return {
        visitors: state.visitors
    }
}
export default connect(mapStateToProps)(Checkin)