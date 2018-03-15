import React from 'react';
import {render} from 'react-dom';
import {Link} from 'react-router-dom';
import Countries  from 'react-select-country';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import axios from 'axios';
import { Alert } from 'reactstrap';
import Notifications, {notify} from 'react-notify-toast';
import {BASE_URL} from '../constant.jsx';
import 'react-datepicker/dist/react-datepicker.css';
    class RegistrationAndOwnership extends React.Component{
    constructor(props){
        super(props);
        this.state = {
          startDate: moment(),
            farmId: 32,
            landTenureSystem: '',
            legislation: 'Inherited',
            other: '',
            parcelAcquiredDate: '2018-01-17T09:45:20.926Z',
            parcelOwnerUsername: '',
            parcelSizeUnit: '',
            parcelSizeUsed:''
        };
        this.handleInputChange=this.handleInputChange.bind(this);
        this.registrationAndOwner=this.registrationAndOwner.bind(this);
    }

    registrationAndOwner(event){
        event.preventDefault();
        
        axios.post(BASE_URL+'core-services/admin/farm/basic?username=rohit1.viithiisys@gmail.com&access_token=5ba6c132-8be6-447d-ac10-11d0132a5c53',this.state)
        .then(function (response) {
            if (response.data.message == undefined) {
                console.log('Message response.data.message',response.data.message);
                console.log('message is ',resonse.data.message);
              notify.show('success', 'success');
              const nextPage = this.props.history.push('/unique-identification-number');
            }else{
              notify.show(response.data.message, 'error');
            }
          })
          .catch(function (error, response) {
            console.log('catch');
            notify.show('Invalid Details  ', 'error');
          });
        
    }

    handleInputChange(event){
        const value= event.target.value;
        const name= event.target.name;
        this.setState({ 
            [name]:value
        });
    }
    render(){
        return(
            <div className='container-fluid'>
                <div className='row justify-content-sm-center'>
                    <div className='col-sm-8 sign-up-wrapper'>
                        <div className="weather-info-area-text-div ">
                            <p className='weather-info-area-text'>
                                Registration and Ownership
                            </p>
                        </div>
                        <div className="formDesign" style={{padding: 0}}>
                            <form onSubmit={this.registrationAndOwner} style={{padding: '20px'}}>
                                <div>
                                    <p style={{marginBottom: '15px'}}>
                                        Farm / Land Acquisition type
                                    </p>
                                </div>
                                <div className='Land-tenure-dropdown'>
                                    <div className='col-md-4 fl'>
                                        <p>
                                            <label style={{marginRight: '10px'}}><input  type="checkbox"  /></label>
                                            Land Tenure System:
                                        </p>
                                    </div>
                                    
                                    <div>
                                        <select value={this.state.landTenureSystem} name="landTenureSystem" className="name-email-phone" onChange={this.handleInputChange}>
                                            <option value=""> Please Select </option>
                                            <option value="Approved">Approved</option>
                                            <option value="Non-approved">Non-approved</option>                                            
                                        </select>
                                    </div>
                                    <div className='clearfix'></div>
                                </div>
                                
                                <div>
                                    <div className='col-md-4 fl'>
                                        <p>
                                            <label style={{marginRight: '10px'}}><input type="checkbox" /></label>
                                            Legislation :
                                        </p>
                                    </div>
                                    <div>
                                        <select value={this.state.legislation} name="legislation" onChange={this.handleInputChange} className="name-email-phone">
                                            <option value="Negotiated between owner and user">Negotiated between owner and user</option>
                                            <option value="Inherited">Inherited</option>
                                            <option value="Other">Other</option>
                                        </select>
                                    </div>  
                                </div>

                                <div>
                                    <label className='input-title'>If legistation type / option 'other', please describe:</label>
                                    <input type='text' value={this.state.other} name='other' className='name-email-phone' placeholder='If appropriate please describe here' onChange={this.handleInputChange}></input>
                                    <div className="clearfix"></div>
                                </div>
                                
                                <p>Parcel Size <span style={{fontSize: '10px'}}>(Please make sure all locations area automatically put here)</span></p>
                                <div className='child-form-weather col-sm-8' style={{padding: '15px', marginRight: 0}}>
                                    <p style={{marginBottom: '10px'}}>Primary Location PL</p>
                                    <div className='col-sm-6 fl '>
                                        <p>Yderbjerg 123</p>
                                        <p>DK-3213 varlose</p>
                                        <p>Denmark</p>
                                        <p>56.164, 126.432</p>
                                    </div>
                                    <div className='col-sm-6 fl'>
                                        <p>Size</p>
                                        <input  value={this.state.parcelSizeUsed} name="parcelSizeUsed" onChange={this.handleInputChange} className='col-sm-6 ownership-size' style={{width: '100px', marginRight: '5px'}}  type='text' placeholder='Enter Size'></input>
                                        <select  value={this.state.parcelSizeUnit} name="parcelSizeUnit" onChange={this.handleInputChange} className='name-email-phone' style={{width: '100px', float: 'none'}}>
                                            <option value="hectares">hectares</option>
                                            <option value="gunthas">gunthas</option>
                                            <option value="sq. yards">sq. yards</option>
                                            <option value="sq. metres">sq. metres</option>
                                            <option value="sq. feet">sq. feet</option>
                                            <option value="sq. km">sq. km</option>
                                            <option value="sq. miles">sq. miles</option>
                                        </select>
                                    </div>
                                    <div className="clearfix"></div>
                                </div>
                                <div className="clearfix"></div>

                                <div className='child-form-weather col-sm-8' style={{padding: '15px', marginRight: 0}}>
                                    <p style={{marginBottom: '10px'}}>Secondary Location 1 SL1</p>
                                    <div className='col-sm-6 fl '>
                                        <p>Yderbjerg 123</p>
                                        <p>DK-3213 varlose</p>
                                        <p>Denmark</p>
                                        <p>56.164, 126.432</p>
                                    </div>
                                    <div className='col-sm-6 fl'>
                                        <p>Size</p>
                                        <input value={this.state.parcelSizeUsed} name="parcelSizeUsed" onChange={this.handleInputChange} className='col-sm-6 ownership-size' style={{width: '100px', marginRight: '5px'}} type='text' placeholder='Enter Size'></input>
                                        <select value={this.state.parcelSizeUnit} name="parcelSizeUnit" onChange={this.handleInputChange} className='name-email-phone' style={{width: '100px', float: 'none'}}>
                                            <option value="hectares">hectares</option>
                                            <option value="gunthas">gunthas</option>
                                            <option value="sq. yards">sq. yards</option>
                                            <option value="sq. metres">sq. metres</option>
                                            <option value="sq. feet">sq. feet</option>
                                            <option value="sq. km">sq. km</option>
                                            <option value="sq. miles">sq. miles</option>
                                        </select>
                                    </div>
                                    <div className="clearfix"></div>
                                </div>
                                <div className="clearfix"></div>

                                <div className='child-form-weather col-sm-8' style={{padding: '15px', marginRight: 0}}>
                                    <p style={{marginBottom: '10px'}}>Secondary Location 2 SL2</p>
                                    <div className='col-sm-6 fl '>
                                        <p>Yderbjerg 123</p>
                                        <p>DK-3213 varlose</p>
                                        <p>Denmark</p>
                                        <p>56.164, 126.432</p>
                                    </div>
                                    <div className='col-sm-6 fl'>
                                        <p>Size</p>
                                        <input value={this.state.parcelSizeUsed} name="parcelSizeUsed" onChange={this.handleInputChange} className='col-sm-6 ownership-size' style={{width: '100px', marginRight: '5px'}} type='text' placeholder='Enter Size'></input>
                                        <select value={this.state.parcelSizeUnit} name="parcelSizeUnit" onChange={this.handleInputChange} className='name-email-phone' style={{width: '100px', float: 'none'}}>
                                            <option value="hectares">hectares</option>
                                            <option value="gunthas">gunthas</option>
                                            <option value="sq. yards">sq. yards</option>
                                            <option value="sq. metres">sq. metres</option>
                                            <option value="sq. feet">sq. feet</option>
                                            <option value="sq. km">sq. km</option>
                                            <option value="sq. miles">sq. miles</option>
                                        </select>
                                    </div>
                                    <div className="clearfix"></div>
                                </div>
                                <div className="clearfix"></div>

                                <p style={{margin: '10px 0'}}>Date Farm / Land wes acquired / owned / leased</p>
                                <DatePicker className="name-email-phone" value={this.state.parcelAcquiredDate} name="parcelAcquiredDate"selected={this.state.startDate} onChange={this.handleInputChange} dateFormat="DD | MM | YYYY"/>

                                <div>
                                    <input type="button" value="Preview" className="another-location-btn" />
                                </div>
                                <div className="text-right" style={{borderTop: '1px solid #d2d2d2', paddingTop: '15px'}}>
                                    <input type="button" value="Exit" className="registration-btn" />
                                    <input type="button" value="Back" className="registration-btn" />
                                    <input  type="button" value="Save" className="registration-btn" />
                                    <input  type="submit"  value="Save & Continue" className="login-btn margin-top-mobile" />
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
                <Notifications/>
            </div>
        );
    }
    handleChange(date) {
        this.setState({
          startDate: date
        });
    };
}
export default RegistrationAndOwnership; 