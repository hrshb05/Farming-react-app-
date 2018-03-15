import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
 
import 'react-datepicker/dist/react-datepicker.css';
 
// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';
 
class AddAnotherSecondaryLocation extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      startDate: moment(),
      dateOfRegistration: ''
      
    };
    this.handleChange = this.handleChange.bind(this);
  }
 
  handleChange(date) {
    this.setState({
      startDate: date
    });
  }
 
  render() {
    return (
        <DatePicker
  dateFormat="YYYY/MM/DD"
selected={this.state.startDate}
onChange={this.handleChange}
value={this.state.dateOfRegistration}
 />
  )
}
}

export default AddAnotherSecondaryLocation;

