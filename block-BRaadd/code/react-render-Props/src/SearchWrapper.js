import React from 'react';

class SearchWrapper extends React.Component {
  state = {
    searchTerm: '',
  };
  handleSearch = (event) => {
    this.setState({ searchTerm: event.target.value });
  };

  render() {
    const { searchTerm } = this.state;

    return (
      <div>
        {this.props.render(
          this.state.searchTerm,
          this.handleSearch,
        )}
      </div>
    );
  }
}
export default SearchWrapper;
