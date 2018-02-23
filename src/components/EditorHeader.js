import React, { Component } from 'react';

class EditorHeader extends Component {
    render() {
        return ( 
<div>
  <nav className="navbar navbar-default navbar-fixed-top">
    <div className="container-fluid col-md-10 col-md-offset-1">
      <div className="navbar-header">
      </div>

      <ul className="nav navbar-nav filter-links">
        <li>
          <a href="#" data-behavior="editor-message">
          </a>
        </li>
      </ul>

      <div className="collapse navbar-collapse">
        <ul className="nav navbar-nav navbar-right">
          <li className="publish-button">
            <button className="button green-border-button dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
              Publish <i className="fa fa-chevron-down"></i>
            </button>
            <ul className="dropdown-menu publish-dropdown nav-dropdown">
              <span className="dropdown-arrow-top"></span>
              <span className="dropdown-arrow-bottom"></span>
              <div>
                <h4>Ready to Publish your work?</h4>
                <p>Add tags to reach more people</p>
                <div className="clearfix" data-behavior="tags" data-tags="">
                  <div id="js-taggle" data-behavior="autosave"></div>
                </div>
              </div>
              <hr />
              <div>
                <button className="button green-border-button pull-right" data-behavior="publish-button">Publish</button>
              </div>
            </ul>
          </li>
          <li id="notifications">
          </li>
        </ul>
      </div> 
    </div>
  </nav>

    <div data-behavior="progress-bar" className="progress-bar"></div>
</div>
        );
    }
}

export default EditorHeader;