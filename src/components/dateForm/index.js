import React, { Component } from 'react';
import './index.css';

class DateForm extends Component {
  render() {
    return (
        <form onSubmit={this.props.getEvents}>
          <div className="form-group">
            <label>Month</label>
            <input type="number" className="form-control" name="month" placeholder="Enter Month" />
          </div>
          <div className="form-group">
            <label>Day</label>
            <input type="number" className="form-control" name="day" placeholder="Enter Day" />
          </div>
          <div className="form-group">
            <label>Year</label>
            <input type="number" className="form-control" name="year" placeholder="Enter Year" />
          </div>

          <button type="submit" className="btn btn-primary">Show Events</button>
        </form>
    );
  }
}

export default DateForm;
