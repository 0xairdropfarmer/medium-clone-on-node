import React, { Component } from 'react';
import { connect } from 'react-redux'
import GoogleLogin from 'react-google-login'
import { SignInUser } from './../redux/actions/actions'

class SignInWith extends Component {

    render() {
    const responseGoogle = (res) => {
        console.log(res)
        let postData = {
            name: res.w3.ig,
            provider: 'google',
            email: res.w3.U3,
            provider_id: res.El,
            token: res.Zi.access_token,
            provider_pic: res.w3.Paa
        }
        console.log(postData)
        // build our user data
        this.props.SignInUser(postData)
        this.props.toggleClose()
    }

        return ( 
            <div>
                <div data-behavior="overlay" className="overlay overlay-hugeinc this.props.modalMode ? 'open':''">
        <button data-behavior="close-overlay" type="button" className="overlay-close"><span className="glyphicon glyphicon-remove"></span></button>
        <nav>
            <h2 className="grayed-heading center">Sign In</h2>
            <ul className="omniauth-button-group">
                <li className="omniauth-button">
                    <a className="button facebook" href="#">
                        <i className="fa fa-facebook-official"></i>Sign in with Facebook
                    </a>
                </li>                

                <li className="omniauth-button google">
                    <GoogleLogin className="button google"
                    clientId="886637869712-573t01u5erqv7dh8ilt0rbi7mftki3ts.apps.googleusercontent.com"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle} >
                        <i className="fa fa-google"></i><span> SignIn with Google</span>
                    </GoogleLogin>
                </li>
                
                <li className="omniauth-button google">
                    <a className="button google" href="https://my-medium-clone.herokuapp.com/users/auth/google_oauth2">
                        <i className="fa fa-google"></i>Sign in with Google
                    </a>
                </li>

                <li className="omniauth-button twitter">
                    <a className="button twitter" href="https://my-medium-clone.herokuapp.com/users/auth/twitter">
                        <i className="fa fa-twitter"></i>Sign in with Twitter
                    </a>
                </li>

                <li>
                    <a className="signin-signup-link" href="https://my-medium-clone.herokuapp.com/users/sign_in">Sign in or Sign up with email</a>
                </li>
            </ul>
        </nav>
    </div>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        modalMode: state.common.modalMode
    }
}

const mapDispatchToProps = dispatch => {
    return {
        toggleClose: (dispatch)=> {dispatch({type: 'TOGGLE_MODAL', modalMode: false})},
        toggleOpen: (dispatch)=> {dispatch({type: 'TOGGLE_MODAL', modalMode: true})},
        SignInUser
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignInWith);