import React, { Component } from 'react';

class Profile extends Component {

    componentDidMount() {
        document.body.className = 'users show'
    }
    componentWillUnmount() {
        document.body.className = ''
    }
    render() {
        return ( 
            <div className="users show">
            <div className="container-fluid main-container">
            <div className="banner-container animated fadeInUp-small" data-animation="fadeInUp-fadeOutDown-slow">
                <div className="hero-wrapper">
                    <header className="hero">
                        <div className="profile-info">
                            <h1 className="hero-title">mark</h1>
                            <p className="hero-description">Charles Atlas (born Angelo Siciliano; October 30, 1892[1] – December 24, 1972) was the developer of a bodybuilding method and its associated exercise program that was best known for a landmark advertising campaign featuring Atlas's
                                name and likeness. It has been described as one of the longest-lasting and most memorable ad campaigns of all time.</p>
                            <div className="hero-location">
                                <i className="fa fa-map-marker"></i>Acri, Province of Cosenza, Italy
                            </div>
                        </div>
                        <div className="hero-avatar">
                            <img alt="mark" className="avatar-image" src="profile_Stories_files/2f591e8054a93c8503efa311330bfd8b.jpg" height="100" width="100"/>
                        </div>
                    </header>

                    <div>
                        <div data-react-className="UserFollowContainer" data-react-props="{&quot;followerCount&quot;:6,&quot;followingCount&quot;:2,&quot;following&quot;:false,&quot;followed_id&quot;:396,&quot;hideButton&quot;:false,&quot;username&quot;:&quot;mark&quot;,&quot;overlayTrigger&quot;:true}">
                            <div data-reactroot="">
                                <div className="following-metadata"><span className="following-count"><span><span><b>2</b> Following</span></span>
                                    </span><span className="follower-count"><span><span><b>6</b> Followers</span></span>
                                    </span>
                                </div>
                                <div><a className="button green-border-button follow-button" href="">Follow</a></div>
                            </div>
                        </div>



                    </div>
                </div>
            </div>


            <div className="posts-wrapper animated fadeInUp" data-animation="fadeInUp-fadeOutDown">
                <div className="flex-container border-top">
                    <h4 className="small-heading">Interests</h4>
                </div>
                <div data-react-className="TagList" data-react-props="{&quot;tags&quot;:[{&quot;id&quot;:30,&quot;name&quot;:&quot;rails&quot;,&quot;created_at&quot;:&quot;2016-02-16T15:07:10.262Z&quot;,&quot;updated_at&quot;:&quot;2016-03-30T01:45:53.663Z&quot;,&quot;featured&quot;:false,&quot;slug&quot;:&quot;rails&quot;,&quot;lowercase_name&quot;:&quot;rails&quot;}]}">
                    <div className="tags-wrapper undefined" data-reactroot="" data-reactid="1" data-react-checksum="-528535913"><a className="tag" href="https://my-medium-clone.herokuapp.com/tags/rails" data-reactid="2">rails</a></div>
                </div>

                <h4 className="small-heading border-top">latest</h4>
                <div className="post-panel">

                    <div className="post-metadata">
                        <img alt="mark" className="avatar-image" src="profile_Stories_files/thumb_2f591e8054a93c8503efa311330bfd8b.jpg" height="40" width="40"/>
                        <div className="post-info">
                            <div data-react-className="PopoverLink" data-react-props="{&quot;user_id&quot;:396,&quot;url&quot;:&quot;/users/mark&quot;,&quot;children&quot;:&quot;mark&quot;}"><span className="popover-link" data-reactroot=""><a href="https://my-medium-clone.herokuapp.com/users/mark">mark</a></span></div>
                            <small>about 1 year ago • less than a minute read</small>
                        </div>
                    </div>


                    <div className="post-picture-wrapper">
                        <img src="profile_Stories_files/thumb_6450eff680b1981d6c2e96d98225ca98.jpg" alt="Thumb 6450eff680b1981d6c2e96d98225ca98"/>
                    </div>

                    <div className="main-body">
                        <h3 className="post-title"><a href="https://my-medium-clone.herokuapp.com/posts/wish-upon-a-star">Wish Upon A Star</a></h3>
                        <div className="post-body">
                            <p className="">This is a true story I just made up for further testing this service.</p>
                        </div>
                        <a className="read-more" href="https://my-medium-clone.herokuapp.com/posts/wish-upon-a-star">Read more</a>
                    </div>

                    <div className="post-stats clearfix">
                        <div className="pull-left">
                            <div className="like-button-wrapper">
                                <form className="button_to" method="get" action="">
                                    <button className="like-button" data-behavior="trigger-overlay" type="submit"><i className="fa fa-heart-o"></i><span className="hide-text">Like</span></button>
                                </form>
                                <span className="like-count">2</span>
                            </div>

                        </div>

                        <div className="pull-right">
                            <div className="bookmark-button-wrapper">
                                <form className="button_to" method="get" action=""><button className="bookmark-button" data-behavior="trigger-overlay" type="submit">      <span className="icon-bookmark-o"></span><span className="hide-text">Bookmark</span></button>
                                </form>
                            </div>

                        </div>

                        <div className="response-count pull-right">
                            <a className="response-count" href="https://my-medium-clone.herokuapp.com/posts/wish-upon-a-star#responses">3 responses</a>
                        </div>
                    </div>
                </div>
                <div className="post-panel">

                    <div className="post-metadata">
                        <img alt="mark" className="avatar-image" src="profile_Stories_files/thumb_2f591e8054a93c8503efa311330bfd8b.jpg" height="40" width="40"/>
                        <div className="post-info">
                            <div data-react-className="PopoverLink" data-react-props="{&quot;user_id&quot;:396,&quot;url&quot;:&quot;/users/mark&quot;,&quot;children&quot;:&quot;mark&quot;}"><span className="popover-link" data-reactroot=""><a href="https://my-medium-clone.herokuapp.com/users/mark">mark</a></span></div>
                            <small>about 1 year ago • less than a minute read</small>
                        </div>
                    </div>


                    <div className="post-picture-wrapper">
                        <img src="profile_Stories_files/thumb_10efdc1aa39f7279d5646e63dec33569.jpg" alt="Thumb 10efdc1aa39f7279d5646e63dec33569"/>
                    </div>

                    <div className="main-body">
                        <h3 className="post-title"><a href="https://my-medium-clone.herokuapp.com/posts/on-the-way-home">On the Way Home...</a></h3>
                        <div className="post-body">
                            <p>... I saw this hitchhiker.</p>
                        </div>
                        <a className="read-more" href="https://my-medium-clone.herokuapp.com/posts/on-the-way-home">Read more</a>
                    </div>

                    <div className="post-stats clearfix">
                        <div className="pull-left">
                            <div className="like-button-wrapper">
                                <form className="button_to" method="get" action=""><button className="like-button" data-behavior="trigger-overlay" type="submit">      <i className="fa fa-heart-o"></i><span className="hide-text">Like</span></button>
                                </form> <span className="like-count">7</span>
                            </div>

                        </div>

                        <div className="pull-right">
                            <div className="bookmark-button-wrapper">
                                <form className="button_to" method="get" action=""><button className="bookmark-button" data-behavior="trigger-overlay" type="submit">      <span className="icon-bookmark-o"></span><span className="hide-text">Bookmark</span></button>
                                </form>
                            </div>

                        </div>

                        <div className="response-count pull-right">
                            <a className="response-count" href="https://my-medium-clone.herokuapp.com/posts/on-the-way-home#responses">4 responses</a>
                        </div>
                    </div>
                </div>
                <div className="post-panel">

                    <div className="post-metadata">
                        <img alt="mark" className="avatar-image" src="profile_Stories_files/thumb_2f591e8054a93c8503efa311330bfd8b.jpg" height="40" width="40"/>
                        <div className="post-info">
                            <div data-react-className="PopoverLink" data-react-props="{&quot;user_id&quot;:396,&quot;url&quot;:&quot;/users/mark&quot;,&quot;children&quot;:&quot;mark&quot;}"><span className="popover-link" data-reactroot=""><a href="https://my-medium-clone.herokuapp.com/users/mark">mark</a></span></div>
                            <small>about 1 year ago • less than a minute read</small>
                        </div>
                    </div>


                    <div className="post-picture-wrapper">
                        <img src="profile_Stories_files/thumb_7c5ae21d6ddb31a686a6893de7367f22.jpg" alt="Thumb 7c5ae21d6ddb31a686a6893de7367f22"/>
                    </div>

                    <div className="main-body">
                        <h3 className="post-title"><a href="https://my-medium-clone.herokuapp.com/posts/this-is-fun">This is Fun...</a></h3>
                        <div className="post-body">
                            <p>I'm very impressed with this medium cousin.</p>
                        </div>
                        <a className="read-more" href="https://my-medium-clone.herokuapp.com/posts/this-is-fun">Read more</a>
                    </div>

                    <div className="post-stats clearfix">
                        <div className="pull-left">
                            <div className="like-button-wrapper">
                                <form className="button_to" method="get" action=""><button className="like-button" data-behavior="trigger-overlay" type="submit">      <i className="fa fa-heart-o"></i><span className="hide-text">Like</span></button>
                                </form> <span className="like-count">2</span>
                            </div>

                        </div>

                        <div className="pull-right">
                            <div className="bookmark-button-wrapper">
                                <form className="button_to" method="get" action=""><button className="bookmark-button" data-behavior="trigger-overlay" type="submit">      <span className="icon-bookmark-o"></span><span className="hide-text">Bookmark</span></button>
                                </form>
                            </div>

                        </div>

                        <div className="response-count pull-right">
                            <a className="response-count" href="https://my-medium-clone.herokuapp.com/posts/this-is-fun#responses">1 response</a>
                        </div>
                    </div>
                </div>

            </div>


            <div className="banner-container animated fadeInUp" data-animation="fadeInUp-fadeOutDown">
                <div className="posts-wrapper">
                    <h4 className="heading-border-b">Recommended by mark •
                        <a href="https://my-medium-clone.herokuapp.com/users/mark/recommended_posts">See all</a>
                    </h4>
                    <div className="flex-container f-wrap">
                        <div className="recommended-post-card">
                            <a className="rpc-title" href="https://my-medium-clone.herokuapp.com/posts/this-is-fun">This is Fun...</a><br/>
                            <small className="rpc-username">mark</small>
                        </div>
                    </div>
                </div>
            </div>


            </div>
            </div>
        );
    }
}

export default Profile;