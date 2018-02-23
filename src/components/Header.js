import React, { Component } from 'react';

class Header extends Component {
    render() {
        return ( 
            <div>
                <div data-react-className="UserOverlay" data-react-props="{}">
        <div className="overlay overlay-hugeinc " data-reactroot=""><button className="overlay-close"><span className="glyphicon glyphicon-remove"></span></button>
            <nav className="users-overlay">
                <h2 className="grayed-heading center"></h2>
                <ul>
                    <li className="pagination-button-group"></li>
                </ul>
            </nav>
        </div>
    </div>

    <div data-behavior="progress-bar" className="progress-bar"></div>

    <nav data-behavior="animated-navbar" className="navbar navbar-default navbar-fixed-top is-inView">
        <div className="container-fluid col-md-10 col-md-offset-1">
            <div className="navbar-header">
                <a className="navbar-brand" id="logo" href="https://my-medium-clone.herokuapp.com/">
                    <img alt="Stories" src="profile_Stories_files/stories-logo-b94c0c3ea98cf69025e1b31a0c60eca185e0800bde6fa0e.svg" height="40"/>
                </a>
            </div>
            <ul className="nav navbar-nav filter-links">
                <li><a className="" href="https://my-medium-clone.herokuapp.com/top-stories">Top stories</a></li>
            </ul>

            <div className="folding-nav">
                <ul className="nav navbar-nav navbar-right">
                    <li className="new-post-button"><a className="button" data-behavior="trigger-overlay" href="https://my-medium-clone.herokuapp.com/posts/new">Write a story</a></li>
                    <li className="sign-in-button"><a className="button green-border-button" data-behavior="trigger-overlay" href="https://my-medium-clone.herokuapp.com/users/sign_in">Sign in / Sign up</a></li>
                </ul>
            </div>

        </div>
    </nav>
</div>
            );
    }
}

export default Header;