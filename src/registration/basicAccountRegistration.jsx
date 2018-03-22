import React from 'react';
import {render} from 'react-dom';
import { Link } from 'react-router-dom';
import Countries  from 'react-select-country';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import axios from 'axios';
import 'react-datepicker/dist/react-datepicker.css';
import Notifications, {notify} from 'react-notify-toast';
import {BASE_URL} from '../constant.jsx'; 
import OverlayLoader from 'react-loading-indicator-overlay/lib/OverlayLoader'
import { withRouter } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
class BasicAccountRegistartion extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          
            accountType: "Individual",
            addressLine1: "",
            addressLine2: "",
            city: "",
            country: "",
            countryCode: "",
            creationDate: "",
            email: "",
            firstName: "",
            groupRole: "USER",
            lastAccessDate: "",
            lastName: "",
            mobile: null,
            sex: "",
            userAuthorities: "USER",
            userName: "rohit1.viithiisys@gmail.com",
            zipcode: null,
            startDate: moment(),
          dateOfRegistration: "",
        };
        this.onSelectCountry=this.onSelectCountry.bind(this);
        this.handleBasicInfo=this.handleBasicInfo.bind(this);
        this.handleOnInputChange=this.handleOnInputChange.bind(this);
        this.basicInputChange=this.basicInputChange.bind(this);
    }
    
    handleOnInputChange(event) {
        const data = event.target;
        const value = data.value;
        const name = data.name;
        this.setState({
          [name]: value,
        });
      }
       basicInputChange(event) {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
          [name]: value,
        });
      }
     
    onSelectCountry(event){
        this.state.selectedCountry={
             id:event.target.value,
             name:event.target.options[event.target.selectedIndex].text
        }
        this.state.selectedCountry=this.refs.country.selected;
    }

    handleBasicInfo(event) {
        let data_var=JSON.parse(localStorage.getItem('signin-access-token'));
        event.preventDefault();
        console.log('form submited', this.state);
        if (this.state.username != '' && this.state.password != ''&&  this.state.addressLine1!=''&& this.state.addressLine2!=''  && this.state.city!='' &&  
        this.state.country!='' && this.state.countryCode==''  && this.state.creationDate=='' && this.state.dateOfRegistration!='' && this.state.email!='' && this.state.firstName!=''
        && this.state.groupRole!='' && this.state.lastAccessDate=='' && this.state.lastName!='' && this.state.mobile!='' && this.state.sex!='' && this.state.userAuthorities!=''
        && this.state.zipcode!='' ) {
            this.setState({
           showLoader: true
          })
              
              axios.put(BASE_URL+'auth-module-2/users/55?access_token='+data_var.access_token, this.state,{
                headers: {
                    'Content-Type': 'application/json',
                }
            } )
                .then( (response) =>{
            localStorage.setItem('signin-access-token',JSON.stringify(response.data));     
                    
                    if(response.status == 200){
                console.log("response",response)
                 this.props.history.push('/primary-location-setting'); 
                this.setState({
                 showLoader: false
                })  
              }
                  if (response.data.message == undefined) {
                    notify.show('success', 'success');
                  }else{
                    notify.show(response.data.message, 'error');
                  }
                })
                .catch((error)=>{
                    this.setState({showLoader: false});
                    notify.show('Invalid Details','error');
                });
        } else{
          notify.show('All Fields Required', 'error');
        }
      }
    
    render(){
        return(
    
            <div className="container-fluid" >
                <div className="row justify-content-sm-center">
                    <div className="col-xs-12 col-sm-10 col-lg-8">
                        <div className="sign-up-wrapper">
                            <div>
                            <p className="text">Setup Account - Basic Information</p>
                                <div className="registrationDesign">
                                    <form onSubmit={this.handleBasicInfo} className="form" style={{padding: '20px', margin: 0}}>
                                        <div >
                                            <label className="input-title" >Last Name<span className="astrick">*</span></label>
                                            <input className="name-email-phone" value={this.state.lastName} type="text"  placeholder="Last Name" name="lastName" onChange={this.handleOnInputChange}/>
                                        </div>
                                        <div >
                                            <label className="input-title" >First Name<span className="astrick">*</span></label>
                                            <input className="name-email-phone" value={this.state.firstName} type="text"  placeholder="First Name" name="firstName" onChange={this.handleOnInputChange}/>
                                        </div>
                                        <div >
                                            <label className="input-title" >Email<span className="astrick">*</span></label>
                                            <input className="name-email-phone" value={this.state.email}  type="email" placeholder="Enter Email" name="email" onChange={this.handleOnInputChange}/>
                                        </div>

                                        <div>
                                            <label className="input-title ">Mobile Number<span className="astrick">*</span></label>
                                            <input  className="name-email-phone" value={this.state.mobile} type="tel" name="mobile" placeholder="Enter Phone Number" onChange={this.handleOnInputChange}/>
                                        </div>
                                        <div className="clearfix"></div>
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
                                        <div className="input-little ">
                                            <p>Sex<span className="astrick">*</span></p>
                                            <label>
                                                <input  type="radio" value="M" name="sex" onChange={this.handleOnInputChange}/> Male &nbsp;
                                            </label>
                                            <label>
                                                <input  className="radio-btn" value="F" type="radio" name="sex" onChange={this.handleOnInputChange}/> Female               
                                            </label>
                                        </div>

                                          <FormGroup>
                                            <Label className="input-title " for="exampleDate">Date</Label>
                                            <Input className="name-email-phone" type="date"  id="exampleDate" onChange={this.basicInputChange} name="dateOfRegistration" value={this.state.dateOfRegistration} placeholder="date placeholder" />
                                          </FormGroup>
                                        {/*<div>
                                        <label className="input-title ">Date Of Registration<span className="astrick">*</span></label>
                                            <DatePicker className="name-email-phone" value={this.state.dateOfRegistration} name="dateOfRegistration" selected={this.state.startDate} onChange={this.handleOnInputChange} dateFormat="DD | MM | YYYY"/>
                                        </div>*/}
                                        <div className="clearfix"></div>
                                        <div>
                                            <label className="input-title " >Basic Address<span className="astrick">*</span></label>
                                            <div style={{width: '100%'}}>
                                                <input className="name-email-phone" value={this.state.addressLine1} name='addressLine1' style={{float: 'none', maxWidth: '450px'}} type="text"  placeholder="Address Line 1"  onChange={this.handleOnInputChange}/>
                                            </div>
                                            <div style={{width: '100%'}}>
                                                <input className="name-email-phone" value={this.state.addressLine2} name='addressLine2' type="text"  style={{float: 'none', maxWidth: '450px'}} placeholder="Address Line 2" onChange={this.handleOnInputChange}/>
                                            </div>
                                        </div>
                                        <div className="clearfix"></div>
                                        <div className="col-sm-6 code-city " >
                                            <div className="col-sm-6 fl code-city">
                                                <label className="input-title" >Zip/Postal Code<span className="astrick">*</span></label>
                                                <input  className="name-email-phone" value={this.state.zipcode} name='zipcode' type="text" placeholder="Enter Zip/ Postal Code" onChange={this.handleOnInputChange} />
                                                <div className="clearfix"></div>
                                            </div>
                                
                                            <div className="col-sm-6 fl no-padding-mobile">
                                                <label className="input-title" >City<span className="astrick">*</span></label>
                                                <input className="name-email-phone" value={this.state.city} type="text" placeholder="Name of city" name="city" onChange={this.handleOnInputChange}/>
                                                <div className="clearfix"></div>
                                            </div>
                                            <div className="clearfix"></div>
                                        </div>
                                        <div className="clearfix"></div>
                                        <div className="clearfix"></div>
                                        <div className="row fl code-city">
                                            <div className="col-sm-6 fl">
                                                <Countries className="name-email-phone" value={this.state.country} type='country' ref="country" name="country" empty=" Please Select country " onChange={this.handleOnInputChange} />
                                            </div> 
                                            <div className="clearfix"></div>                                            
                                            <div className="form-group col-sm-6 fl" style={{marginBottom: 0}}>
                                                <label className="input-title" >Country Code</label>
                                                <input className="name-email-phone" value={this.state.countrycode} style={{width: 70}} type="text" placeholder="" name="countrycode" onChange={this.handleOnInputChange} />
                                            </div>
                                            <div className="clearfix"></div>
                                        </div> 
                                        <div className="clearfix"></div>
                                        <div className="text-right" style={{borderTop: '1px solid #d2d2d2', paddingTop: '15px'}}>
                                            <input type="button" name="Exit" value='Exit' className="registration-btn"  />
                                            <Link   to="/">
                                            <input type="button" name="Back" value='Back' className="registration-btn"  />
                                            </Link>
                                            <input type="button" onClick={this.handleBasicInfo} name="Save" value='Save' className="registration-btn"  />
                                            <input type="submit"  value="Save & Continue button"  className="login-btn margin-top-mobile"  />   
                                        </div>
                                        <div className="clearfix"></div>
                                        <Notifications/>
                                    </form>
                                </div>
                            </div>
                        <div>
                    </div>
                </div>
            </div>
            </div>
        </div>

            
        );
    }
    handleChange(date) {
        this.setState({
          startDate: date
        });
    };
}

export default withRouter (BasicAccountRegistartion);