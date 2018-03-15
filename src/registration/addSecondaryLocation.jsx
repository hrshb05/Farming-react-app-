import React from 'react';
import {render} from 'react-dom';
import {Link} from 'react-router-dom';
import Countries  from 'react-select-country';
import axios from 'axios';
import Notifications, {notify} from 'react-notify-toast';
import {BASE_URL} from '../constant.jsx';
import { Alert } from 'reactstrap';
class AddSecondaryLocation extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
        <div className='container-fluid'>
            <div className='row justify-content-sm-center'>
                <div className='col-sm-8 sign-up-wrapper'>
                    <div className='weather-info-area-text-div'>
                        <p className='weather-info-area-text'>Weather Informations of Area(s) </p>
                    </div>
                    <div className="formDesign" style={{padding: 0}}>
                        <form style={{padding: '20px', margin: 0}}>
                            <div>
                                <p style={{marginBottom: '10px'}}><span>*</span>Weather information to be used for planning activities</p>
                            </div>
                            
                            
                            <div>
                                <div>
                                    <p className="font-weight-bold">
                                        <span>*</span>SL - Secondary Location 1
                                    </p>
                                </div>
                                <div style={{marginTop: '15px'}}>
                                    <Countries className="name-email-phone" ref="country" name="country" empty=" Please Select" onChange={(e)=>this.onSelectCountry(e)} />
                                </div>
                            </div>

                            <div >
                                <label className="input-title" >Name of Farm / Work /Home /Other<span className="astrick">*</span></label>
                                <input className="name-email-phone" type="text"  placeholder="Name of Entity" name="entityname" />
                            </div> 
                            <div>
                                <div form-group col-sm-5 fl>
                                    <label className="input-title" >Address of Farm / Work /Home /Other<span className="astrick">*</span></label>
                                </div>
                                <div className="clearfix"></div>
                                <div form-group col-sm-5 fl>
                                    <input className="weather-address width-full-mobile" type="text"  placeholder="Address 1" name="entityname" />
                                </div>
                                <div className="clearfix"></div>
                                <div form-group col-sm-5 fl>
                                    <input className="weather-address width-full-mobile" type="text"  placeholder="Address 2" name="entityname" />
                                </div>
                                <div className="clearfix"></div>
                                <div form-group col-sm-5 fl>
                                    <input className="weather-address width-full-mobile" type="text"  placeholder="Address 3" name="entityname" />
                                </div>
                                <div className="clearfix"></div>
                            </div>
                            <div className="col-sm-6 code-city " >
                                <div className="col-sm-6 fl code-city">
                                    <label className="input-title" >Zip/Postal Code<span className="astrick">*</span></label>
                                    <input  className="name-email-phone" type="text" placeholder="Enter Zip/ Postal Code" name="zip"/>
                                    <div className="clearfix"></div>
                                </div>
                    
                                <div className="col-sm-6 fl no-padding-mobile">
                                    <label className="input-title" >City<span className="astrick">*</span></label>
                                    <input className="name-email-phone" type="text" placeholder="Name of city" name="city"/>
                                    <div className="clearfix"></div>
                                </div>
                                <div className="clearfix"></div>
                            </div>
                            <div className="code-city">
                                <label className="input-title" >County<span className="astrick">*</span></label>
                                <input className="country width-full-mobile" type="text"  placeholder="County" name="country"/>
                            </div>
                            <div className="fl" >
                                <label className="input-title">Country<span className="astrick">*</span></label>
                                <Countries className="name-email-phone" ref="country" name="country" empty=" Please Select" onChange={(e)=>this.onSelectCountry(e)} />
                            </div>
                            <div className="clearfix"></div>

                            <div className=" child-form-weather" style={{margin: 0, padding: '15px'}}>
                                <div className="fl">
                                    <p>
                                        Location Summary For Primary Location - PL 
                                    </p>
                                </div>
                                <div className="clearfix"></div>
                                <div className="fl">
                                    <p>
                                        NA
                                    </p>
                                </div>
                                <div className="clearfix"></div>
                                <div className="fl">
                                    <p>
                                        NA 
                                    </p>
                                </div>
                                <div className="clearfix"></div>
                                <div>
                                    <div>
                                        <div className="fl no-float-mobile">Country Code</div>
                                        <input className="weather-address1 weather-mobile-input text-right" type="text"  placeholder="" name="entityname" />
                                        <div className="clearfix"></div>
                                    </div>
                                    <div>
                                        <div className="fl no-float-mobile">Longitude</div>
                                        <input className="weather-address2 weather-mobile-input text-right" type="text"  placeholder="xxxxx" name="entityname" />
                                        <div className="clearfix"></div>
                                    </div>
                                    <div>

                                        <div className="fl no-float-mobile">Latitude</div>
                                        <input className="weather-address3 weather-mobile-input text-right" type="text"  placeholder="xxxxx" name="entityname" style={{marginBottom: 0}} />

                                        <input type="button" value="Save Location" className="save-location-btn fr" style={{width: 'auto'}} />
                                        <div className="clearfix"></div>
                                    </div>
                                    <div className="clearfix"></div>
                                </div>
                            </div>
                                    
                            <div>
                                <input type="button" value="+ Add another Location" className="another-location-btn" />
                            </div>
                            <div className="text-right" style={{borderTop: '1px solid #d2d2d2', paddingTop: '15px'}}>
                                <input type="button" value="Exit" className="registration-btn" />
                                <input type="button" value="Back" className="registration-btn" />
                                <input type="button" value="Save" className="registration-btn" />
                                <Link to='/third-location-setting'>
                                    <input type="button" value="Save & Continue" className="login-btn margin-top-mobile" />
                                </Link>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}
export default AddSecondaryLocation;

