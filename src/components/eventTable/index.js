import React, { Component } from 'react';
import './index.css';
import EventItem from '../eventItem'

class EventTable extends Component {
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Date</th>
            <th>Notes</th>
            <th>Remove Event</th>
          </tr>
        </thead>
        <tbody>

        {this.props.events[0] &&
          this.props.events.map(
              item => <EventItem item={item} key={item.event_id} removeEvent={this.props.removeEvent}  />
            )
        }

        </tbody>
      </table>
    );
  }
}

export default EventTable;
