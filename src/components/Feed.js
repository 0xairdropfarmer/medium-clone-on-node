import React, { Component } from 'react';

class Feed extends Component {
    render() {
        const articles = [1,2,4]
                    const h = articles.map((po)=>
    <div className="container-fluid main-container">
        <div className="col-md-6 col-md-offset-1 dashboard-main-content">

            <div className="posts-wrapper animated fadeInUp" data-behavior="endless-scroll" data-animation="fadeInUp-fadeOutDown">
                <div className="post-panel">

                    <div className="post-metadata">
                        <img alt="avatar image" className="avatar-image" src="Stories_files/default-avatar-bc1fd887bdb17ccbce48fe7b038f0200cd826146e0bf2.svg" height="40" width="40"/>
                        <div className="post-info">
                            <div data-react-className="PopoverLink" data-react-props="{&quot;user_id&quot;:698,&quot;url&quot;:&quot;/users/vincepaopao&quot;,&quot;children&quot;:&quot;vincepaopao&quot;}"><span className="popover-link" data-reactroot=""><a href="https://my-medium-clone.herokuapp.com/users/vincepaopao">vincepaopao</a></span></div>
                            <small>7 months ago • less than a minute read</small>
                        </div>
                    </div>



                    <div className="main-body">
                        <h3 className="post-title"><a href="https://my-medium-clone.herokuapp.com/posts/my-journey-as-ruby-on-rails-developer">My Journey as Ruby on Rails Developer</a></h3>
                        <div className="post-body">
                            <p className="">February 6, 2017 - I started learning Ruby on Rails myself. I kept on studying the basics and until now, I haven't even create a...</p>
                        </div>
                        <a className="read-more" href="https://my-medium-clone.herokuapp.com/posts/my-journey-as-ruby-on-rails-developer">Read more</a>
                    </div>

                    <div className="post-stats clearfix">
                        <div className="pull-left">
                            <div className="like-button-wrapper">
                                <form className="button_to" method="get" action="">
                                    <button className="like-button" data-behavior="trigger-overlay" type="submit"><i className="fa fa-heart-o"></i><span className="hide-text">Like</span></button></form>
                                <span className="like-count">0</span>
                            </div>

                        </div>

                        <div className="pull-right">
                            <div className="bookmark-button-wrapper">
                                <form className="button_to" method="get" action=""><button className="bookmark-button" data-behavior="trigger-overlay" type="submit">      <span className="icon-bookmark-o"></span><span className="hide-text">Bookmark</span></button></form>
                            </div>

                        </div>

                        <div className="response-count pull-right">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
            )

        return ( 
            <div>
            {h}
            </div>
        );
    }
}

export default Feed;