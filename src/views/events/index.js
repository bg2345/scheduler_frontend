import React, { Component } from 'react';
import './index.css';
import DateForm from '../../components/dateForm';
import EventTable from '../../components/eventTable';

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

  removeEvent = async(id) => {
      let events = this.state.events;
      let url = 'https://event-sched-backend-bg.herokuapp.com/api/delete';

      let response = await fetch(url, {
        headers: {
          "Content-Type": "application/json",
          "event_id": id
        }
      });
      let data = await response.json();

      if (data.success) {
        let events = this.state.events;


      for (let i in events) {
        if (events[i].event_id === id){
          events.splice(i, 1);
          break;

        }
      }
      this.setState({ events });

      alert('Successfully deleted the event.');
    } else {
      alert('Sorry, but we could not delete the event. Please try again later.');
    }

  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <h1>Find Events</h1>
            <DateForm getEvents={this.getEvents} />

            <EventTable getEvents={this.getEvents} events={this.state.events} removeEvent={this.removeEvent} />
          </div>
        </div>

      </div>
    );
  }
}

export default Events;
