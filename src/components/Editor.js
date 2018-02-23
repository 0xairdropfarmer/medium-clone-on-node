import React, { Component } from 'react';

class Editor extends Component {
    render() {
        return ( 
<div>
    <div className="container-fluid main-container">
      <div className="row animated fadeInUp" data-animation="fadeInUp-fadeOutDown">
          <div id="main-post" className="col-xs-10 col-md-8 col-md-offset-2 col-xs-offset-1 main-content">
              <div className="post-metadata">
                  <img alt="netk" className="avatar-image" src="story1_Stories_files/thumb_8bJvyXmX.jpg" height="40" width="40" />
                  <div className="post-info">
                      <div data-react-className="PopoverLink" data-react-props="{&quot;user_id&quot;:608,&quot;url&quot;:&quot;/users/netk&quot;,&quot;children&quot;:&quot;netk&quot;}"><span className="popover-link" data-reactroot=""><a href="https://my-medium-clone.herokuapp.com/users/netk">netk</a></span></div>
                      <small>9 months ago • less than a minute read</small>
                  </div>
              </div>

              <form className="editor-form main-editor" autocomplete="off" >

                <label class="picture_upload">
                  <i class="fa fa-camera"></i>
                </label>
                <div class="file-upload-previewer hidden">
                  <img src="" id="image_preview"/>
                </div>
                  <div class="existing-img-previewer" id="existing-img-previewer">
                  </div>

                <div class="form-group">
                  <input type="text" className="editor-title" placeholder="Title" />
                </div>

                <div class="form-group">
                  <textarea className="medium-editable" placeholder="Tell your story..." /> 
                </div>

                <div class="hidden">
                  <input type="text" />
                </div>

              </form>

          </div>
      </div> 
    </div>
</div>
        );
    }
}

export default Editor;