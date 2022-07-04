import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onInputChange(e) {
    this.setState({ term: e.target.value });
  }

  // Arrow function bind the value of "this." to the searchBar class
  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <p>Image Search</p>
          {/* 
            onChange(onInputChange()) => Called with the render method
            oncChange(onInputChange) => Called only when the inputs changes (reference for the function)
            (e) => onInputChange(e) => Called only when input changes 
          */}
          <input
            type="text"
            value={this.state.terms}
            onChange={(e) => this.onInputChange(e)}
          />
        </form>
      </div>
    );
  }
}

export default SearchBar;
