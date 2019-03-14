import React, { Component } from 'react';
import './index.css';
import DateForm from '../../components/dateForm'

class Events extends Component {
  constructor(){
  super();
  this.state = {
    events: []
  }
  }

  getEvents = async(e) => {
    e.preventDefault();

    let day = e.target.elements.day.value;
    let month = e.target.elements.month.value;
    let year = e.target.elements.year.value;

    // console.log(month, day, year);

    let url = 'https://event-sched-backend-bg.herokuapp.com/api/retrieve';

    let response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        "year": year,
        "month": month,
        "day": day
      }
    });

    let events = await response.json();
    

    // console.log(data);
    this.setState({ events });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <h1>Find Events</h1>
            <DateForm getEvents={this.getEvents} />
          </div>
        </div>
      </div>
    );
  }
}

export default Events;
