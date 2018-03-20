import React from 'react';
import {render} from 'react-dom';
import {Link,withRouter} from 'react-router-dom';
import Countries  from 'react-select-country';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import axios from 'axios';
import { Alert } from 'reactstrap';
import Notifications, {notify} from 'react-notify-toast';
import {BASE_URL} from '../constant.jsx';
import 'react-datepicker/dist/react-datepicker.css';
import OverlayLoader from 'react-loading-indicator-overlay/lib/OverlayLoader';

class SignInComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSignIn = this.handleSignIn.bind(this);
  }

  handleInputChange(event) {
    const data = event.target;
    const value = data.value;
    const name = data.name;
    this.setState({
      [name]: value
    });
  }
  
   handleSignIn(event) {
    event.preventDefault();
     console.log('form submited', this.state);
    if (this.state.username != '' || this.state.password != '') {
            axios.post(BASE_URL+'auth-module-2/oauth/token?grant_type=password&username='+this.state.username+'&password='+this.state.password, this.state)
            .then( (response) => {
            localStorage.setItem('arrayList',JSON.stringify(response.data));     
            console.log('sample', response);
            if(response.statusText == "OK"){
            this.props.history.push('/basic-information');
             }
           })
           .catch((error) => {
            console.log('catch',error);
            notify.show('Invalid Details  ', 'error');
           });
    }
  }
  
  render() {
    return (
        <form onSubmit={this.handleSignIn}>
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
          <p className="login-title">Sign In</p>
          <label className="input-title">USER NAME or EMAIL</label>
          <input type="email" className="login-input" value={this.state.username} name="username" onChange={this.handleInputChange} />
          <label className="input-title">PASSWORD</label>
          <input type="password" className="login-input" value={this.state.password} name="password" onChange={this.handleInputChange} />
          <div>
            
              <input type="submit"  value="LOGIN" className="login-btn fl" />
           
            <a href="#" className="forgot-password fr">Forgot Password ?</a>
            <div className="clearfix"></div>
          </div>
          <Notifications />
        </form>
    );
  }
}
export default withRouter(SignInComponent);

