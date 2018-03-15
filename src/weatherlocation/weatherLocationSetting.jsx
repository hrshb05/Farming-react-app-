import React from 'react';
import {render} from 'react-dom';
import {Link} from 'react-router-dom';
import Countries  from 'react-select-country';

class  WeatherLocationSetting extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        
        return(
            <div className="container-fluid">
                <div className="row justify-content-sm-center">
                    <div className="col-xs-12 col-sm-8">
                        <div>
                            <p className="weather-text">
                            Weather Location Settings
                            </p>
                        </div>
                        <div>
                            <p>
                                Weather information to be used for planning activities
                            </p>
                        </div>
                        <div style={{marginTop:'50px'}} className="formDesign">
                            
                            <form className="form">
                                <div className=" fl" >
                                    <Countries className="dropdown" ref="country" style={{width: '70%'}} name="country" empty=" Please Select country " onChange={(e)=>this.onSelectCountry(e)} />
                                    <div className="clearfix"></div>
                                </div> 
                                <div >
                                    <label className="input-title" >Name of Farm / Work /Home /Other</label>
                                    <input className="name-email-phone" type="text"  placeholder="Name of Entity" name="entityname" />
                                </div> 
                                <div>
                                    <div form-group col-sm-5 fl>
                                        <label className="input-title" >Address of Farm / Work /Home /Other</label>
                                    </div>
                                    <div className="clearfix"></div>
                                    <div form-group col-sm-5 fl>
                                        <input className="weather-address" type="text"  placeholder="Address 1" name="entityname" />
                                    </div>
                                    <div className="clearfix"></div>
                                    <div form-group col-sm-5 fl>
                                        <input className="weather-address" type="text"  placeholder="Address 2" name="entityname" />
                                    </div>
                                    <div className="clearfix"></div>
                                    <div form-group col-sm-5 fl>
                                        <input className="weather-address" type="text"  placeholder="Address 3" name="entityname" />
                                    </div>
                                    <div className="clearfix"></div>
                                </div>
                                <div className="col-sm-6 code-city " >
                                    <div className="col-sm-6 fl code-city">
                                        <label className="input-title" >Zip/Postal Code</label>
                                        <input  className="zip-city" type="text" style={{width: '100%'}} placeholder="Enter Zip/ Postal Code" name="zip"/>
                                        <div className="clearfix"></div>
                                    </div>
                            
                                    <div className="col-sm-6 fl ">
                                        <label className="input-title" >City</label>
                                        <input className="zip-city" type="text" style={{width: '100%'}} placeholder="Name of city" name="city"/>
                                        <div className="clearfix"></div>
                                    </div>
                                    <div className="clearfix"></div>
                                </div>
                                <div className="code-city">
                                        <label className="input-title" >Country</label>
                                        <input className="country" type="text"  placeholder="Country" name="country"/>
                                </div>
                                <div className="fl" >
                                    <Countries className="dropdown" ref="country" style={{width: '70%'}} name="country" empty=" Please Select" onChange={(e)=>this.onSelectCountry(e)} />
                                </div>
                                <div className="clearfix"></div>
                                    <div className=" child-form-weather ">
                                        <form style={{marginLeft:'20px'}} >
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
                                                <div form-group col-sm-5 fl>
                                                    <div className="fl">Country Code</div><input className="weather-address1" type="text"  placeholder="" name="entityname" />
                                                </div>
                                                <div className="clearfix"></div>
                                                <div form-group col-sm-5 fl>
                                                <div className="fl">Longitude</div><input className="weather-address2" type="text"  placeholder="xxxxx" name="entityname" />
                                                    <div className="clearfix"></div>
                                                </div>
                                                <div >
                                                    <div>
                                                    <div className="fl">Latitude</div>
                                                    <input className="weather-address3" type="text"  placeholder="xxxxx" name="entityname" />
                                                    <input type="submit" value="Save Location" className="save-location-btn fr" style={{width: 'auto'}} />
                                                        <div className="clearfix"></div>
                                                    </div>
                                                    <div className=" div-save-btn fr">
                                                        
                                                        <div className="clearfix"></div>
                                                    </div>
                                                </div>
                                                <div className="clearfix"></div>
                                            </div>
                                            
                                            
                                        </form>
                                    </div>
                                    
                                    <div className="col-sm-4 fl">
                                                <input type="submit" value="+ Add another Location" className="another-location-btn fl" />
                                            </div>
                                            <div>
                                                
                                            </div>
                                            
                                            <div className="clearfix"></div>
                                            <div>
                                            <div className="col-sm-2 fl">
                                            </div>
                                            <div className="clearfix"></div>
                                            <div className="col-sm-10 fr">
                                                <div className="col-sm-3 fl">
                                                    <input type="submit" value="Exit" className="registration-btn fl" />
                                                </div>

                                                <div className="col-sm-3 fl">
                                                    <input type="submit" value="Back" className="registration-btn fl" />
                                                </div>

                                                <div className="col-sm-3 fl">
                                                    <input type="submit" value="Save" className="registration-btn fl" />
                                                </div>
                                                <div className="col-sm-3 fl">
                                                    <input type="submit" value="Save & Continue" className="login-btn fl" />
                                                </div>

                                                <div className="clearfix"></div>
                                            </div>
                                            <div className="clearfix"></div>
                                            </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
            
        );
    }
}
export default WeatherLocationSetting;