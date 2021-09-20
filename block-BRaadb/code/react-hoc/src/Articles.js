import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import articles from './data/articles.json';
import withSearch from './withSearch';

const Articles = (props) => {
  const { searchTerm } = props;

  let filteredArticles = articles.filter((article) =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <>
      <ul className="articles">
        {filteredArticles.map((article) => (
          <li key={article.slug}>
            <Link to={'articles/' + article.slug}>
              <h3>{article.title}</h3>
            </Link>
            <small>{article.author}</small>
          </li>
        ))}
      </ul>
    </>
  );
};

export default withSearch(Articles);
