import React from 'react';
import { withRouter } from 'react-router';
import books from './data/books.json';

class Books extends React.Component {
  render() {
    const { searchTerm } = this.props;

    let filteredBooks = books.filter((article) =>
      article.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return (
      <div className="page">
        <input
          placeholder="Search"
          className="search"
          value={this.props.searchTerm}
          onChange={this.props.handleChange}
        />
        <ul className="archive">
          {filteredBooks.map((book) => (
            <Book {...book} />
          ))}
        </ul>
      </div>
    );
  }
}

function Book(props) {
  return (
    <li className="book" key={props.title}>
      <img src={props.image} alt={props.title} />
      <h2>{props.title}</h2>
      <p>
        Author:<span>{props.author}</span>
      </p>
      <a href={props.website}>
        <button>Buy Now</button>
      </a>
    </li>
  );
}

export default withRouter(Books);
