import React, {Component} from 'react';
import { connect } from 'react-redux';
import { addReminder} from '../actions';
import "../App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''

    }
  }

  addReminder() {
    this.props.addReminder(this.state.text);
  }

  renderReminders() {
    const { reminders } = this.props;
    return (
      <ul className="list-group col-sm-4">
        {
          reminders.map(reminder=>{
            return (
              <li key={reminder.id} className="list-group-item">
                <div>
                  {reminder.text}
                </div>
              </li>
            )
          })
        }
      </ul>
    )
  }

  render(){
    return (
      <div className="App">
        <div className="title">
            Reminder Pro
        </div>
        <div className="form-inline">
          <div className="form-group">
            <input
              className="form-control"
              placeholder="I have to..."
              onChange={event => this.setState({
                text: event.target.value
              })}
            />
          </div>
          <button
            type="button"
            className="btn btn-success"
            onClick={()=> this.addReminder()}
          >
            Add reminder
          </button>
          {this.renderReminders()}
        </div>
      </div>
    )
  }

}

function  mapStateToprops(state) {
  console.log('state', state);
  return {
    reminders: state
  }
}



export default connect(mapStateToprops, {addReminder})(App);
