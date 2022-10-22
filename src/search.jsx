import React, { Component } from 'react';

class Search extends Component  {
  constructor(props) {
    super(props);

  }



  render() {
    return (
      <div className="search">
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange}></input>
          <input onChange={this.handleChange}></input>
          <button type="submit">Send Cows</button>
        </form>
      </div>
    )
  }

}

export default Search;

        {/* <h1>Hello React World!</h1> */}
        {/* <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange}></input>
          <button type="submit">Send Cows</button>
        </form> */}