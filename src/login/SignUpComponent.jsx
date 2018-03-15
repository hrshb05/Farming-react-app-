import React from 'react';
import {render} from 'react-dom';
import { Link } from 'react-router-dom';
import {BASE_URL} from '../constant.jsx';
import axios from 'axios';
import { Alert } from 'reactstrap';
import Notifications, {notify} from 'react-notify-toast';
import OverlayLoader from 'react-loading-indicator-overlay/lib/OverlayLoader'

class SignUpComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      userPassword: '',
      groupRole: 'USER',
      userAuthorities: 'USER',
      confirmPassword: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
    this.checkValid = this.checkValid.bind(this);
    this.matchPassword = this.matchPassword.bind(this);
  }
  
  handleInputChange(event) {
    const data = event.target;
    const value = data.value;
    const name = data.name;
    this.setState({
      [name]: value
    });
  }
  handleSignUp(event) {
    event.preventDefault();
     console.log('form submited', this.state);
    if (this.state.email != '' || this.state.userPassword != '') {
      if (this.checkValid(this.state.userPassword)) {
        if (this.state.confirmPassword == this.state.userPassword) {
        this.setState({
           showLoader: true
          })
          axios.post(BASE_URL+'auth-module-2/admin/users', this.state)
            .then(function (response) {
              if (response.data.message == undefined) {
                notify.show('User Created', 'success');
              }else{
                notify.show(response.data.message, 'error');
              }
            })
            .catch(error => {
             console.log("Error:" + error.message);
             this.setState({showLoader: false});
             notify.show("invalid details",error)
           })
        }else{
          notify.show('Password Not Matched', 'error');
        }
      }else{
        notify.show('Invalid Password', 'error');
      }
    }else{
      notify.show('All Fields Required', 'error');
    }
  }
  checkValid(data){
    const valid = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/;
    return valid.test(data);
  }
  matchPassword(){
    if (this.state.confirmPassword != this.state.userPassword) {
      notify.show('Password Not Matched', 'error');
    }
  }
  render() {
    return (
      <form onSubmit={this.handleSignUp}>
      {this.state.showLoader &&
                 <OverlayLoader
                   color={'red'}
                   loader="ScaleLoader"
                   text="Loading... Please wait!"
                   active={true}
                   backgroundColor={'black'}
                   opacity=".1"  >
                 </OverlayLoader>
               }
        <p className="login-title">Create CLAFIS User</p>
        <label className="input-title">USER NAME or EMAIL</label>
        <input type="email" name="email" value={this.state.email} className="login-input" onChange={this.handleInputChange} />
        <label className="input-title">PASSWORD</label>
        <input type="password" name="userPassword" value={this.state.userPassword} className="login-input" onChange={this.handleInputChange} />
        <label className="input-title">CONFIRM PASSWORD</label>
        <input type="password" name="confirmPassword" value={this.state.confirmPassword} onBlur={this.matchPassword} className="login-input" onChange={this.handleInputChange} />
        <div>
        
          <input type="submit" value="SIGN UP FOR FREE" className="login-btn" style={{width: '100%'}} />
        
        </div>
        <Notifications />
      </form>
    );
  }
}
export default SignUpComponent;