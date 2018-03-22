import React from 'react';
import {render} from 'react-dom';
import {Link} from 'react-router-dom';
import {BASE_URL} from '../constant.jsx';
class UIN extends React.Component{
    constructor(props)
    {
        let newData = JSON.parse(localStorage.getItem("arrayList"));
        super(props);
        this.state={
            dateOfRegistration:null,
            id:null,
            country:'',
            sex:'',
            uin:null,
            newData: newData,
         
        };
        this.componentDidMount = this.componentDidMount.bind(this); 
    }
    componentDidMount(){
           this.fetchData();
          }

          fetchData(){

          }

         componentWillUpdate(nextProps,nextState){
           // localStorage.getItem('arrayList',JSON.stringify(nextState.arrayList));
           // localStorage.getItem("result").JSON = localStorage.lastname;
           //console.log("=====Local-value", newData);
           
         }

    componentDidMount() {
        // let data_var=JSON.parse(localStorage.getItem('weather-access-token'));
           console.log('UIN',this.state);
            axios.get(BASE_URL+'auth-module-2/business/generate/UIN/55?access_token=d9141b32-a7bb-4fdc-a043-e2a7efc280fc', {
             headers: { ContentType: 'application/json' },
             data: {}
            })
              .then(response => {
                this.setState({
                  classrooms:response.data.classrooms,
                  profile:response.data.profile,
                  dateOfRegistration:response.data.dateOfRegistration,
                  id:response.data.id,
                  country:response.data.country,
                  sex:response.data.sex,
                  uin:response.data.uin


                })
              })
              .then(response => {
                this.setState({classrooms: response.data.profile})
              })
              .catch((error) => {
                console.log("error",error)
              })
      }
    
    render(){
        return(
            <div className="container-fluid">
                <div className="row justify-content-sm-center">
                    <div className="col-sm-8 sign-up-wrapper">
                        <div>
                            <p className="text">
                                Unique Identification Number (UIN)
                            </p>
                        </div>
                        <div className="registrationDesign">
                            <form style={{padding: '20px', margin: 0}}>
                                <div>
                                    <div>
                                        <p style={{marginBottom: '15px'}}>Review Basic User Information</p>
                                    </div>
                                    <div className='child-form-weather col-sm-11' style={{margin: 0, padding: '15px'}}>
                                        <p style={{marginBottom: '10px'}}>User Summary</p>
                                        <div>
                                            <div className="col-md-4 fl">Last Name</div>
                                            <div className="col-md-5 fl text-right font-weight-bold">Hansen</div>
                                            <div className="clearfix"></div>

                                            <div className="col-md-4 fl">First Name</div>
                                            <div className="col-md-5 fl text-right font-weight-bold">Jorgen</div>
                                            <div className="clearfix"></div>

                                            <div className="col-md-4 fl">Email</div>
                                            <div className="col-md-5 fl text-right font-weight-bold">jorgen.hansen@gmail.com</div>
                                            <div className="clearfix"></div>

                                            <div className="col-md-4 fl">Mobile Number</div>
                                            <div className="col-md-5 fl text-right font-weight-bold">+45 1234567890</div>
                                            <div className="clearfix"></div>

                                            <div className="col-md-4 fl">Date of Registration (DOR)</div>
                                            <div className="col-md-5 fl text-right font-weight-bold">20.4.2016</div>
                                            <div className="col-md-3 fl text-right">
                                                <input type="button" value="Edit" className="save-location-btn margin-top-mobile" style={{width: 'auto', marginRight: 0}} />
                                            </div>
                                            <div className="clearfix"></div>
                                        </div>
                                    </div>
                                </div>
                                {this.state.newData.map((location, i) => (
                                <div key={i}>
                              
                             <div>
                                        {location.primaryLocation ?
                                            <p style={{margin: '15px 0'}}>Review Primary Location Information</p>
                                            :
                                            <p style={{marginBottom: '10px'}}>Review Secondary Location Information</p>
                                        }
                                    </div>
                                    <div className='child-form-weather col-sm-11' style={{margin: 0, padding: '15px'}}>
                                        {location.primaryLocation ?
                                            <p style={{marginBottom: '10px'}}>PL - Primary Location Summary</p>
                                            :
                                            <p style={{marginBottom: '10px'}}>SL{i} - Secondary Location {i} Summary</p>
                                        }
                                        <div>
                                            <div className="col-md-9 fl">{location.addressLine1}</div>
                                            <div className="clearfix"></div>

                                            <div className="col-md-9 fl">{location.addressLine2} {location.addressLine3}</div>
                                            <div className="clearfix"></div>

                                            <div className="col-md-4 fl">Country</div>
                                            <div className="col-md-5 fl text-right font-weight-bold">{location.country}</div>
                                            <div className="clearfix"></div>

                                            <div className="col-md-4 fl">Longitude</div>
                                            <div className="col-md-5 fl text-right font-weight-bold">{location.longitude}</div>
                                            <div className="clearfix"></div>

                                            <div className="col-md-4 fl">Latitude</div>
                                            <div className="col-md-5 fl text-right font-weight-bold">{location.latitude}</div>
                                            <div className="col-md-3 fl text-right">
                                                <input type="button" value="Edit" className="save-location-btn margin-top-mobile" style={{width: 'auto', marginRight: 0}} />
                                            </div>
                                            <div className="clearfix"></div>
                                        </div>
                                    </div>
                                </div>
                                ))}

                                

                    
                                <div style={{marginTop: '15px'}}>
                                    <div className="child-form-weather col-sm-11" style={{margin: 0, padding: '15px'}}>
                                    <div>
                                        <label> Unique Identification Number (UIN)</label>
                                    </div>
                                    <div className="fl">
                                        <label className='fl col-sm-6'>
                                            Get my UID
                                        </label>
                                        <label className='fl col-sm-6'>
                                           <label style={{width:'100%'}}><input  type="radio" name="radio"/> Email </label> 
                                            <label style={{width:'100%'}}><input  type="radio" name="radio"/> Mobile Number </label>                                        
                                        
                                        </label>
                                    </div>
                                    <div className='clearfix'></div>
                                    <div className="fl">
                                        <input style={{marginLeft:'12px'}} type="submit" value="Generate UIN and Send" className="another-location-btn fl" />
                                    </div>
                                    <div className="clearfix"></div>
                                    <div style={{marginTop:'15px'}}>
                                    
                                        <div className="row">
                                            <div className="col-md-5">
                                                <p>Basic Address Country Code</p>
                                            </div>
                                            <div className="col-md-3">
                                                <input type="text" name='country' value={this.state.country} className="name-email-phone text-center" onChange={this.handleChange}/>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-md-5">
                                                <p>Basic Information Date of Registery</p>
                                            </div>
                                            <div className="col-md-3">
                                                <input type="text" name='dateOfRegistration' value={this.state.dateOfRegistration} className="name-email-phone text-center" onChange={this.handleChange}/>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-md-5">
                                                <p>Sex</p>
                                            </div>
                                            <div className="col-md-3">
                                                <input type="text" name='sex' value={this.state.sex} className="name-email-phone text-center" onChange={this.handleChange}/>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-md-5">
                                                <p>ID</p>
                                            </div>
                                            <div className="col-md-3">
                                                <input type="text" name='id' value={this.state.id} className="name-email-phone text-center" onChange={this.handleChange}/>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                </div>
                                <div className="clearfix"></div>
                                <div className="col-sm-11" style={{backgroundColor:'rgb(182, 178, 178)', padding: '15px'}}>
                                    
                                    <p style={{marginBottom: '15px'}}>Unique Identification Number (UIN)</p>
                                    <div className="container-fluid" style={{backgroundColor: 'inherit'}}>
                                        <div className="row justify-content-sm-center">
                                            <div className="col-md-3">
                                                <input type="text" name='country' value={this.state.country} className="name-email-phone text-center" onChange={this.handleChange} />
                                            </div>
                                            <div className="col-md-3">
                                                <input type="text" name='dateOfRegistration' value={this.state.dateOfRegistration} className="name-email-phone text-center" onChange={this.handleChange} />
                                            </div>
                                            <div className="col-md-3">
                                                <input type="text" name='sex' value={this.state.sex} className="name-email-phone text-center" onChange={this.handleChange}/>
                                            </div>
                                            <div className="col-md-3">
                                                <input type="text" name='id' value={this.state.id} className="name-email-phone text-center" onChange={this.handleChange}/>
                                            </div>
                                            <div className="clearfix"></div>

                                            <div className="col-md-5">
                                                <input type="text" name='uin' value={this.state.uin} className="name-email-phone text-center" />
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div style={{borderTop:' 1px solid #868e96',marginTop:'20px',marginRight:'15px'}}>

                                </div>
                                
                                <div className="text-right" style={{borderTop: '1px solid #d2d2d2', paddingTop: '15px'}}>
                                    <input type="button" value="Exit" className="registration-btn" />
                                    <input type="button" value="Back" className="registration-btn" />
                                    <input type="button" value="Save" className="registration-btn" />
                                    <Link to='/registration-and-ownership'>
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
export default UIN;