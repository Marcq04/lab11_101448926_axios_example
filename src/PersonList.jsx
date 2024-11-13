import React, { Component } from 'react';
import axios from 'axios';

class PersonList extends Component {
  constructor(props) {
    super(props);
    // Define state default values
    this.state = {
      persons: []
    };
  }

  // Component Lifecycle Callback
  componentDidMount() {
    axios.get('https://randomuser.me/api/?results=10')
      .then(response => {
        const persons = response.data.results;
        this.setState({ persons });
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }

  render() {
    return (
      <ul>
        {this.state.persons.map((person, index) => (
          <li key={index}>{person.name.first} {person.name.last}</li>
        ))}
      </ul>
    );
  }
}

export default PersonList;

