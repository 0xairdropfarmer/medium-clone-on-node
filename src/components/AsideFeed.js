import React, { Component } from 'react'

class AsideFeed extends Component {
    render () {
        const authors = this.props._articles
            .map((_article)=> {
                    return _article.author.name
                }
            )
            .sort()
            .filter((a, b, self)=>{
                return self.indexOf(a) === b
            })
            .map((__article)=>
                <a href='javascript:void(0);' className="tag">{__article}</a>
            )
        const top_articles = this.props._articles.map((_article, i)=>

                    <li className="top-stories-list-item">
                        <div className="count-button-wrapper">
                            <span className="count-button">{i}</span>
                        </div>
                        <div className="top-stories-links">
                            <a className="post-title" href={`/articleview/${_article._id}`}>{_article.title}</a><br/>
                            <small>
                              <div data-react-className="PopoverLink" data-react-props="">
                                <span className="popover-link" data-reactroot="">
                                    <a href={`/profile/${_article.author._id}`}>{_article.author.name}</a>
                                </span>
                              </div>
                            </small>
                        </div>
                    </li>

        )
        return (
    <div>
        <aside className="col-md-4 main-sidebar">
            <h4 className="small-heading border-top">Featured Authors</h4>
            <div data-react-className="TagList" data-react-props="">
                <div className="tags-wrapper undefined" data-reactroot="">
                    {authors}
                </div>
            </div>


            <h4 className="small-heading border-top">Top stories</h4>
            <div className="sidebar-top-stories">
                <ul>
                    {top_articles}
                </ul>
            </div>
        </aside>
</div>
        )
    }
}
export default AsideFeed