import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { visitorCheckout } from '../action'
import Alert from 'react-bootstrap/Alert'
class Checkout extends PureComponent {
    state = {
        email: "",
        error:" ",
        success:""
    }

    // the details sent by the form will be received here
    componentWillReceiveProps(nextProps){
        const query = this.state.email
        // if user entered an empty string
        if(query === ""){
            this.setState({error:"You must enter an email"})
        } else if (nextProps.visitors.visitors === true ) {
            this.setState({ 
                success:"You've successfully checked Out. Thanks for visiting",
                email:'',
                error: ''
            })
        }
        // if user enter an email that is not found or already checked in
        else if (nextProps.visitors.error !== undefined){
            if(nextProps.visitors.error === "NOVISITORFOUND") {
                this.setState({error:"This visitor has not checked in"})
            }
            else {
                this.setState({error: "Network Error, try again"})
            } 
        }  
    }

    submitForm =(e)=> {
        e.preventDefault()
        
        this.props.dispatch(visitorCheckout({
            email:this.state.email
        }))
        
        
        
    }
    render() {
        console.log(this.props);
        return (
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
                            <h1>Check Out  </h1>
                        </div>
                        <div className="formbg-outer">
                            <div className="formbg">
                                <div className="formbg-inner padding-horizontal--48">
                                    <span className="padding-bottom--15">Kindly Check out with the email you checked in with</span>
                                    <form id="stripe-login" onSubmit={this.submitForm}>
                                        <div className="field padding-bottom--24">
                                            <label for="email">Email</label>
                                            <input
                                                type="email"
                                                value={this.state.email}
                                                onChange={(e)=> this.setState({email: e.target.value})}
                                            />
                                        </div>
                                        <div style={{
                                            color:"red"
                                        }}> {this.state.error}</div>
                                        <div style={{
                                            color:"green"
                                        }}> {this.state.success}</div>
                                        <div className="field padding-bottom--24">
                                            <input type="submit" name="submit" value="Check Out" />
                                        </div>
                                    </form>
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

export default connect (mapStateToProps)(Checkout)