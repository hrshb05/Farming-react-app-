import React from 'react';
import {render} from 'react-dom';
import {Link} from 'react-router-dom';
class Forecast extends React.Component {
    constructor(props)
    {
        super(props);
    }
    render(){
        return(
            <div className='container-fluid'>
                <div className='row justify-content-sm-center'>
                    <div className='col-sm-8 sign-up-wrapper'>
                        <div>
                            <p className="text">
                                Forecast
                            </p>
                        </div>
                        <div className="registrationDesign">
                            <form style={{padding: '20px', margin: 0}}>
                                <label>Weather Variables</label>
                                <div className='col-sm-8 checkbox-wrapper'>
                                    
                                    <div className='col-sm-6 fl'>
                                        <label style={{width:'100%'}}>
                                            <input type='checkbox'></input>
                                             Temparature
                                        </label>
                                        <label style={{width:'100%'}}>
                                            <input type='checkbox'></input>
                                             Humidity/moisture
                                        </label>
                                        <label style={{width:'100%'}}>
                                            <input type='checkbox'></input>
                                             Cloud cover
                                        </label>
                                        <label style={{width:'100%'}}>
                                            <input type='checkbox'></input>
                                             Radiation
                                        </label>
                                        <label style={{width:'100%'}}>
                                            <input type='checkbox'></input>
                                             Precipitation
                                        </label>
                                    </div>
                                   
                                    <div className='col-sm-6 fl'>
                                        <label style={{width:'100%'}}>
                                            <input type='checkbox'></input>
                                             Precipitation/Rainfall
                                        </label>
                                        <label style={{width:'100%'}}>
                                            <input type='checkbox'></input>
                                             Windspeed
                                        </label>
                                        <label style={{width:'100%'}}>
                                            <input type='checkbox'></input>
                                             Wind direction
                                        </label>
                                        <label style={{width:'100%'}}>
                                            <input type='checkbox'></input>
                                             Visibility
                                        </label>
                                        <label style={{width:'100%'}}>
                                            <input type='checkbox'></input>
                                             Dew point
                                        </label>
                                    </div>
                                </div>
                                <div className='clearfix'></div>

                                <div>
                                    <div>
                                        <p style={{marginTop: '15px'}}>Selected Locations</p>
                                    </div>

                                    <div className='child-form-weather col-md-8' style={{margin: '0 0 15px 0', padding: '15px'}}>
                                        <p style={{marginBottom: '10px'}}>Primary Location PL</p>
                                        <div>
                                            <div className="col-md-6 fl">Yedrbjerg</div>
                                            <div className="clearfix"></div>

                                            <div className="col-md-6 fl">DK-3213 Varlose</div>
                                            <div className="clearfix"></div>

                                            <div className="col-md-6 fl">Denmark</div>
                                            <div className="clearfix"></div>

                                            <div className="col-md-6 fl">(56.163, 126.432)</div>
                                            <div className="col-md-6 fl text-right">
                                                <input type="submit" value="GPS Location" className="gps-btn" style={{fontSize: '12px', padding: '4px 14px'}} />
                                            </div>
                                            <div className="clearfix"></div>
                                        </div>
                                    </div>

                                    <div className='child-form-weather col-md-8' style={{margin: '0 0 15px 0', padding: '15px'}}>
                                        <p style={{marginBottom: '10px'}}>Secondary Location 1 SL 1</p>
                                        <div>
                                            <div className="col-md-6 fl">Yedrbjerg</div>
                                            <div className="clearfix"></div>

                                            <div className="col-md-6 fl">DK-3213 Varlose</div>
                                            <div className="clearfix"></div>

                                            <div className="col-md-6 fl">Denmark</div>
                                            <div className="clearfix"></div>

                                            <div className="col-md-6 fl">(56.163, 126.432)</div>
                                            <div className="col-md-6 fl text-right">
                                                <input type="submit" value="GPS Location" className="gps-btn" style={{fontSize: '12px', padding: '4px 14px'}} />
                                            </div>
                                            <div className="clearfix"></div>
                                        </div>
                                    </div>

                                    <div className='child-form-weather col-md-8' style={{margin: '0 0 15px 0', padding: '15px'}}>
                                        <p style={{marginBottom: '10px'}}>Secondary Location 2 SL 2</p>
                                        <div>
                                            <div className="col-md-6 fl">Yedrbjerg</div>
                                            <div className="clearfix"></div>

                                            <div className="col-md-6 fl">DK-3213 Varlose</div>
                                            <div className="clearfix"></div>

                                            <div className="col-md-6 fl">Denmark</div>
                                            <div className="clearfix"></div>

                                            <div className="col-md-6 fl">(56.163, 126.432)</div>
                                            <div className="col-md-6 fl text-right">
                                                <input type="submit" value="GPS Location" className="gps-btn" style={{fontSize: '12px', padding: '4px 14px'}} />
                                            </div>
                                            <div className="clearfix"></div>
                                        </div>
                                    </div>




                                </div>

                                <div className="checkbox-wrapper">
                                    <div>
                                        <p style={{margin: '15px 0'}}>Options</p>
                                    </div>
                                    <div style={{paddingLeft: '30px'}}>
                                        <label style={{width:'100%'}}>
                                            <input type='radio' name='radio'/>
                                            Hourly forecast
                                        </label>
                                        <label style={{width:'100%'}}>
                                            <input type='radio' name='radio'/>
                                            3 Hourly forecast
                                        </label>
                                        <label style={{width:'100%'}}>
                                            <input type='radio' name='radio'/>
                                            6 Hourly forecast
                                        </label>
                                        <label style={{width:'100%'}}>
                                            <input type='radio' name='radio'/>
                                            12 Hourly forecast
                                        </label>
                                        <label style={{width:'100%'}}>
                                            <input type='radio' name='radio'/>
                                            Daily forecast
                                        </label>
                                        <label style={{width:'100%'}}>
                                            <input type='radio' name='radio'/>
                                            Weekly forecast
                                        </label>
                                    </div>
                                </div>
                                <div className="text-right" style={{borderTop: '1px solid #d2d2d2', paddingTop: '15px', marginTop: '15px'}}>
                                    <input type="button" value="Exit" className="registration-btn" />
                                    <input type="button" value="Back" className="registration-btn" />
                                    <input type="button" value="Save" className="registration-btn" />
                                    <Link to='/dashboard'>
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
export default Forecast;