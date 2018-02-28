import React, { Component } from 'react';
import { connect } from 'react-redux'
import {
    follow
} from './../redux/actions/actions'

/** renders bg white when user not follow, render green when followed */
class FollowButton extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        let following = this.props.user
        const f = following.indexOf(this.props.to_follow)
        return ( 
            <div>
                <div>
                    <div onClick={() => this.props.follow(this.props._user._id,this.props.to_follow)} data-reactroot=""><a className={f == -1 ? "button green-border-button follow-button" : "button green-inner-button follow-button"} href="#">{f == -1 ? 'Follow':'Following'}</a></div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        _user: state.authUser.user
    }
}
export default connect(mapStateToProps, { follow })(FollowButton);