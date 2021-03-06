import React, { Component } from 'react';
import './_SearchForm.scss';

class SearchForm extends Component {

  constructor() {
    super();
    this.state = {
      inputValue: ''
    };
  }

  _handleChange = e => {
    this.setState({ inputValue: e.target.value });
  } 

  handleSubmit = e => {
    e.preventDefault();
    this.props.updateSearch(this.state.inputValue);
  }

  render() {
    return (
      <section className="SearchForm">
        <h1 className="SearchForm-logo">Climb<span>On</span></h1>
        <form className="SearchForm-form" onSubmit={this.handleSubmit}>
          <input 
            className="SearchForm-search-bar" 
            type="text" name="search" 
            autoComplete="on" 
            placeholder="Search an area or town..." 
            onChange={this._handleChange}/>
          <button className="SearchForm-submit-button"><i className="fas fa-search"></i></button>
        </form>
      </section>
    );
  }
}

export default SearchForm;