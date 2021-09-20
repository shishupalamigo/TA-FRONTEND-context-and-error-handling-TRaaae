import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import articles from './data/articles.json';


class Articles extends React.Component {

  render() {
    let filteredArticles = articles.filter((article) =>
      article.title.toLowerCase().includes(this.props.searchTerm.toLowerCase())
    );
    return (
      <>
        <input
          placeholder="Search"
          className="search"
          value={this.props.searchTerm}
          onChange={this.props.handleChange}
        />
        <ul className="articles">
          {filteredArticles.map((article) => (
            <li>
              <Link to={"articles/" + article.slug}>
                <h3>{article.title}</h3>
              </Link>
              <small>{article.author}</small>
            </li>
          ))}
        </ul>
      </>
    );
  }
}


export default withRouter(Articles);
