import React, { Component } from 'react';
import './index.css';

class EventForm extends Component {
  render() {
    return (
        <form onSubmit={this.props.saveEvent}>
          <div className="form-group">
            <label>Title</label>
            <input type="text" className="form-control" name="title" placeholder="Enter Title" />
          </div>
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
          <div className="form-group">
            <label>Notes</label>
            <textarea type="text" className="form-control" name="notes" placeholder="Enter Note" />
          </div>

          <button type="submit" className="btn btn-primary">Submit Event</button>
        </form>
    );
  }
}

export default EventForm;
