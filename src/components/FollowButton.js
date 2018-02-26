import React, { Component } from 'react';

/** renders bg white when user not follow, render green when followed */
class FollowButton extends Component {
    render() {
        return ( 
            <div>
                <div data-react-className="UserFollowButton" data-react-props="{&quot;isSignedIn&quot;:false}">
                    <div data-reactroot=""><a className="button green-inner-button follow-button" href="">Follow</a></div>
                </div>
            </div>
        );
    }
}

export default FollowButton;