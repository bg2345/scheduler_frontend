import React, { Component } from 'react';
import './index.css';

class EventItem extends Component {

  render() {
    return (
      <tr>
        <td>{this.props.item.title}</td>
        <td>{this.props.item.month}/{this.props.item.day}/{this.props.item.year}</td>
        <td>{this.props.item.notes}</td>
        <td><button onClick={id =>
        window.confirm("Are you sure you wish to delete this event?") &&
        this.props.removeEvent(this.props.item.event_id)
    } className="btn btn-danger">X</button></td>
      </tr>
    );
  }
}

export default EventItem
