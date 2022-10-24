import React, { Component } from "react";
import Search from './search.jsx';
import $ from 'jquery';

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      cows: []
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    $.ajax({
      url: "/api/cows",
      method: "GET"
    })
    .then((results) => {
      console.log(results);
    })
    .catch((err) => {
      console.log(err);
      return;
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(e);
  }

  handleChange(e) {
    e.preventDefault();
    console.log(e.target.value)
  }


  render() {
    return(
      <div className="App">
        COWS LIST
        <Search />
      </div>
    );
  }
}

export default App;