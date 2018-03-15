import React from 'react';
import {render} from 'react-dom';
import {Link} from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';
 class WeatherDataVariables extends React.Component{
     constructor(props)
     {
        super(props);
        this.state = {
            startDate: moment()
          };
     }

     handleChange(date) {
        this.setState({
          startDate: date
        });
    };

     render(){
         return(
             <div className="container-fluid">
                <div className="row justify-content-sm-center">
                    <div className="className='col-sm-8 sign-up-wrapper'">
                        <div className="text">
                            <p>
                                Weather Data Variables & Setup
                            </p>
                        </div>
                        <div className="registrationDesign">
                            <form  style={{padding: '20px', margin: 0}}>
                                <label>Period   </label>
                                <div>
                                    <label style={{margin: '10px 0'}}>Start Date</label>
                                    <DatePicker className="name-email-phone" selected={this.state.startDate} onChange={this.handleChange.bind(this)} dateFormat="DD | MM | YYYY"/>
                                </div>

                                <div>
                                    <label style={{margin: '10px 0'}}>End Date</label>
                                    <DatePicker className="name-email-phone" selected={this.state.startDate} onChange={this.handleChange.bind(this)} dateFormat="DD | MM | YYYY"/>
                                </div>

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
 export default WeatherDataVariables;