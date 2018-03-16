import React from 'react';
import {render} from 'react-dom';
import { Link } from 'react-router-dom';
import {BASE_URL} from '../constant.jsx';
import axios from 'axios';
import { Alert } from 'reactstrap';
import Notifications, {notify} from 'react-notify-toast';
import OverlayLoader from 'react-loading-indicator-overlay/lib/OverlayLoader'
import { withRouter } from "react-router-dom";


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
        this.setState({
           showLoader: true
          })
          axios.post(BASE_URL+'auth-module-2/oauth/token?grant_type=password&username='+this.state.username+'&password='+this.state.password, this.state)
            .then( (response) => {
              if(response.status == 200){
                console.log("response",response) 
                this.props.history.push('/basic-information');  
                this.setState({
                 showLoader: false
                })  
              }
              if (response.data.message == undefined) {
                notify.show('User SignedIn', 'success');
              }else{
                notify.show(response.data.message, 'error');
              }
            })
            
            .catch((error)=>{
                    this.setState({showLoader: false});
                    notify.show('Invalid Details','error');
                });
    }else{
      notify.show('All Fields Required', 'error');
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

