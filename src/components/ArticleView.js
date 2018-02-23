import React, { Component } from 'react';

class ArticleView extends Component {

    componentDidMount() {
    document.body.className = 'posts show'
    }
    componentWillUnmount() {
        document.body.className = ''
    }

    render() {
        return ( 
            <div>
            <div className="container-fluid main-container">
    <div className="row animated fadeInUp" data-animation="fadeInUp-fadeOutDown">
        <div id="main-post" className="col-xs-10 col-md-8 col-md-offset-2 col-xs-offset-1 main-content">

            <div className="pull-right">
                <div className="social-share-wrapper">
                    <div className="social-share">
                        <a onclick="javascript:window.open('http://www.facebook.com/sharer.php?u=https://my-medium-clone.herokuapp.com/posts/it-s-looking-good', '_blank', 'width=800, height=500, top=200, left=300');void(0)" className="ico fb">
                            <i className="fa fa-facebook"></i>
                        </a>
                        <a onclick="javascript:window.open('http://twitter.com/share?text=It's looking good by netk - &amp;url=https://my-medium-clone.herokuapp.com/posts/it-s-looking-good', '_blank', 'width=800, height=500, top=200, left=300');void(0)" className="ico tw">
                            <i className="fa fa-twitter"></i>
                        </a>
                        <a onclick="javascript:window.open('http://plus.google.com/share?url=https://my-medium-clone.herokuapp.com/posts/it-s-looking-good', '_blank', 'width=800, height=500, top=200, left=300');void(0)" className="ico gp">
                            <i className="fa fa-google-plus"></i>
                        </a>
                        <span className="text"><em>SHARE</em></span>
                        <span className="ico-share"><i className="fa fa-share-alt"></i></span>
                    </div>
                </div>

            </div>
            <div className="post-metadata">
                <img alt="netk" className="avatar-image" src="story1_Stories_files/thumb_8bJvyXmX.jpg" height="40" width="40" />
                <div className="post-info">
                    <div data-react-className="PopoverLink" data-react-props="{&quot;user_id&quot;:608,&quot;url&quot;:&quot;/users/netk&quot;,&quot;children&quot;:&quot;netk&quot;}"><span className="popover-link" data-reactroot=""><a href="https://my-medium-clone.herokuapp.com/users/netk">netk</a></span></div>
                    <small>9 months ago • less than a minute read</small>
                </div>
            </div>


            <div className="post-picture-wrapper">
                <img src="story1_Stories_files/thumb_tumblr_n1o16cZTKg1rzp86uo1_540.jpg" alt="Thumb tumblr n1o16cztkg1rzp86uo1 540" />
            </div>

            <h3 className="title">It's looking good</h3>
            <div className="body">
                <p></p>
                <p className="">I just wish more developers would adopt the project. It's kind of sad such a hopeful product was not adopted out of fear it would stall in development. I understand forming a community around the project is difficult, perhaps that should
                    be a primary goal in and of itself. A community of contributors of skills and monetary resources.
                </p>
                <p></p>
            </div>

            <div className="post-tags">
                <a className="tag" href="https://my-medium-clone.herokuapp.com/tags/story">Story</a>
                <a className="tag" href="https://my-medium-clone.herokuapp.com/tags/community">community</a>
            </div>

            <div className="post-stats clearfix">
                <div className="pull-left">
                    <div className="like-button-wrapper">
                        <form className="button_to" method="get" action=""><button className="like-button" data-behavior="trigger-overlay" type="submit">      <i className="fa fa-heart-o"></i><span className="hide-text">Like</span></button>
                        </form> <span className="like-count">1</span>
                    </div>

                </div>
                <div className="pull-left">
                    <a className="response-icon-wrapper" href="https://my-medium-clone.herokuapp.com/posts/it-s-looking-good#responses">
                        <i className="fa fa-comment-o"></i>
                        <span className="response-count" data-behavior="response-count">0</span>
                    </a>
                </div>

                <div className="pull-right">
                    <div className="bookmark-button-wrapper">
                        <form className="button_to" method="get" action=""><button className="bookmark-button" data-behavior="trigger-overlay" type="submit">      <span className="icon-bookmark-o"></span><span className="hide-text">Bookmark</span></button>
                        </form>
                    </div>

                </div>
            </div>

            <div className="author-info">
                <div clas="author-metadata">
                    <img alt="netk" className="avatar-image" src="story1_Stories_files/thumb_8bJvyXmX.jpg" height="50" width="50" />
                    <div className="username-description">
                        <h4>netk</h4>
                        <p></p>
                    </div>
                </div>
                <div data-react-className="UserFollowButton" data-react-props="{&quot;isSignedIn&quot;:false}">
                    <div data-reactroot=""><a className="button green-border-button follow-button" href="">Follow</a></div>
                </div>
            </div>

        </div>
    </div>

    <div className="post-show-footer row animated fadeInUp" data-animation="fadeInUp-fadeOutDown">
        <div className="col-xs-10 col-md-6 col-xs-offset-1 col-md-offset-3 main-content related-stories">
            <h4 className="small-heading">Related stories</h4>
            <div className="post-list-item">
                <div className="flex-container">
                    <div className="avatar-wrapper">
                        <img alt="Mythreya Reddy" className="avatar-image" src="story1_Stories_files/thumb_13151768_1270169199679006_7440475011136933821_n.jpg" height="40" width="40" />
                    </div>
                    <div className="post-info">
                        <strong className="pli-title"><a href="https://my-medium-clone.herokuapp.com/posts/dare-to-do-startup-you-gotta-husstle">Dare to do startup? You gotta husstle</a></strong><br/>
                        <small className="pli-username"><a href="https://my-medium-clone.herokuapp.com/users/mythreya-reddy">Mythreya Reddy</a></small>
                    </div>
                </div>
            </div>

            <div className="post-list-item">
                <div className="flex-container">
                    <div className="avatar-wrapper">
                        <img alt="Mark Wang" className="avatar-image" src="story1_Stories_files/thumb_photo.png" height="40" width="40" />
                    </div>
                    <div className="post-info">
                        <strong className="pli-title"><a href="https://my-medium-clone.herokuapp.com/posts/7a075c2e-7ad3-44c8-b8ad-9d9985358bd6">问问</a></strong><br/>
                        <small className="pli-username"><a href="https://my-medium-clone.herokuapp.com/users/mark-wang">Mark Wang</a></small>
                    </div>
                </div>
            </div>

            <div className="post-list-item">
                <div className="flex-container">
                    <div className="avatar-wrapper">
                        <img alt="avatar image" className="avatar-image" src="story1_Stories_files/default-avatar-bc1fd887bdb17ccbce48fe7b038f0200cd826146e0bf2.svg" height="40" width="40" />
                    </div>
                    <div className="post-info">
                        <strong className="pli-title"><a href="https://my-medium-clone.herokuapp.com/posts/testing-1f8dc8be-35a7-4c39-9071-96d56edde8e9">Testing</a></strong><br/>
                        <small className="pli-username"><a href="https://my-medium-clone.herokuapp.com/users/onerbal">onerbal</a></small>
                    </div>
                </div>
            </div>

        </div>

        <div id="responses" className="col-xs-10 col-md-6 col-xs-offset-1 col-md-offset-3 main-content">
            <h4 className="small-heading">Responses</h4>

            <div data-behavior="responses-list">
            </div>
        </div>
    </div>

    <div className="post-metadata-bar" data-page="post-metadata-bar">
        <div className="flex-container is-inView" data-behavior="animated-metadata">
            <div className="post-stats flex-container">
                <div className="like-button-wrapper">
                    <form className="button_to" method="get" action=""><button className="like-button" data-behavior="trigger-overlay" type="submit">      <i className="fa fa-heart-o"></i><span className="hide-text">Like</span></button>
                    </form> <span className="like-count">1</span>
                </div>


                <div>
                    <a className="response-icon-wrapper" href="https://my-medium-clone.herokuapp.com/posts/it-s-looking-good#responses">
                        <i className="fa fa-comment-o"></i>
                        <span className="response-count" data-behavior="response-count">0</span>
                    </a>
                </div>

                <div className="bookmark-button">
                    <div className="bookmark-button-wrapper">
                        <form className="button_to" method="get" action=""><button className="bookmark-button" data-behavior="trigger-overlay" type="submit">      <span className="icon-bookmark-o"></span><span className="hide-text">Bookmark</span></button>
                        </form>
                    </div>

                </div>
            </div>
            <div className="metabar-author-info flex-container flex-space-btw">
                <div>
                    <img alt="netk" className="avatar-image" src="story1_Stories_files/thumb_8bJvyXmX.jpg" height="35" width="35" />
                    <div data-react-className="PopoverLink" data-react-props="{&quot;user_id&quot;:608,&quot;url&quot;:&quot;/users/netk&quot;,&quot;children&quot;:&quot;netk&quot;}"><span className="popover-link" data-reactroot=""><a href="https://my-medium-clone.herokuapp.com/users/netk">netk</a></span></div>
                </div>
                <div data-react-className="UserFollowButton" data-react-props="{&quot;isSignedIn&quot;:false}">
                    <div data-reactroot=""><a className="button green-border-button follow-button" href="">Follow</a></div>
                </div>
            </div>
        </div>
    </div>



</div>
            </div>
        );
    }
}

export default ArticleView;