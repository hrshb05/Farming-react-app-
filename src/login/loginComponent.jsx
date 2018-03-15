import React from 'react';
import {render} from 'react-dom';
import { Link } from 'react-router-dom';
import SignUpComponent from './SignUpComponent.jsx';
import SignInComponent from './SignInComponent.jsx';
class LoginComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 1,
    }
    this.handleRadioButton = this.handleRadioButton.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleRadioButton(value) {
    this.setState({
      value: value
    });
  }
  handleInputChange(event) {
    const data = event.target;
    const value = data.value;
    const name = data.name;
    this.setState({
      [name]: value
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    console.log('form submited', this.state);
  }
  render() {
    return (
      <div className="container-fluid">
        <div className="row justify-content-sm-center">
          <div className="col-xs-12 col-sm-6 col-lg-4">
            <div style={{marginTop: '10%'}}>
              <div className="text-center">
                
                <label>
                  <input type="radio" name="userType" checked={this.state.value === 1} onChange={() => this.handleRadioButton(1)} /> Already a User
                </label>
                
                <label style={{width: '50px'}}></label>
                
                <label>
                  <input type="radio" name="userType" checked={this.state.value === 2} onChange={() => this.handleRadioButton(2)} /> New User
                </label>
                {this.state.value === 1 ?
                  <div className="loginDesign">
                    <SignInComponent/>
                  </div> 
                  :
                  <div className="loginDesign">
                    <SignUpComponent/>
                  </div> 
                }
                
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default LoginComponent;