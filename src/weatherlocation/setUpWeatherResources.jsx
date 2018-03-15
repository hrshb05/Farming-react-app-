import React from 'react';
import {render} from 'react-dom';
import {Link} from 'react-router-dom';
import Countries  from 'react-select-country';
import GoogleMap from 'google-maps-for-react';
import {exampleMarkers,exampleContainerStyle,exampleMapStyle,border,width} from 'google-maps-for-react';

class SetUpWeatherRources extends React.Component{
    constructor(props)
    {
        super(props);
    }

    render(){
        return(
            <div style={{overflowX:'hidden'}} className="container-fluid">
                <div className="row justify-content-sm-center">
                <div className=" col-xs-12 col-sm-8 sign-up-wrapper">
                        <div>
                            <p  className="weather-text">
                                Weather Data Variables & Setup
                            </p>
                        </div>
                        <div style={{marginTop:'50px'}} className="formDesign">
                            <form className="form" >
                            <div className="row col-sm-4">
                            <Countries  className="name-email-phone" ref="country" name="country" empty=" Primary Location - PL " onChange={(e)=>this.onSelectCountry(e)} /> 
                            <div className="clearfix"></div>  
                            </div>
                            <div className="row col-sm-4" style={{width:'100%',margin:'0px 0px'}}>
                                <p className="fl " >Primary Location: <div className="clearfix"></div></p>
                                
                                <p className="fl " style={{marginLeft:'20px',fontSize:'12px'}} >
                                        <p className="fl">Brondby</p>
                                        <div className="clearfix"></div>
                                        <p className="fl">DK-2650,Denmark</p>
                                        <div className="clearfix"></div>
                                        <p className="fl">(w753sfvsh.7.mn)</p>
                                        <div className="clearfix"></div>
                                        <div className="clearfix"></div>
                                </p>
                                <div className="clearfix"></div>
                            </div>
                            <div className="col-xs-12 row" style={{margin:'0px 0px',width: '300px', height: '300px',position: 'relative', overflow:' hidden'}}>
                                <div className="">
                                <label>Nearest Data Sorces:</label>
                                <div  className="col-sm-6" style={{ }}>
                                <GoogleMap 
                                    containerStyle={exampleContainerStyle}
                                    
                                >
                                    
                                </GoogleMap>
                                    </div>
                                   </div> 
                            </div>
                            <div style={{width:'100%'}} className="row" style={{margin:'0px 0px'}}>
                                <div style={{width:'100%',margin:'0px 0px'}} className="row">
                                <p className="">Select preffered Data Sources(s) points: </p>
                                </div>
                                <div style={{width:'100%',margin:'0px 0px'}} className="row">
                                <span>Found Nearest Data Resources</span>
                                </div>
                                <div style={{width:'100%',margin:'0px 0px'}} className="row">
                                <table  style={{border:'1px solid black',marginBottom:'0px'}}>
                                  
                                    <tr style={{border:'1px solid black'}}>
                                        <th >Station</th>
                                        <th style={{borderRight:'1px solid black'}}>Temp.</th>
                                        <th >Humidity</th>
                                        <th >Wind</th>
                                        <th >Weather</th>
                                    </tr>
                                    
                                   
                                    <tr style={{borderRight:'1px solid black'}}>
                                        <td ><input type="checkbox"/>1</td>
                                        <td style={{borderRight:'1px solid black'}}>Mark</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                        <td>@mdo</td>
                                    </tr>
                                    <tr>
                                        <td ><input type="checkbox"/>2</td>
                                        <td style={{borderRight:'1px solid black'}}>Jacob</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                        <td>@mdo</td>
                                    </tr>
                                    <tr>
                                        <td ><input type="checkbox"/>3</td>
                                        <td style={{borderRight:'1px solid black'}}>Larry</td>
                                        <td>the Bird</td>
                                        <td>@twitter</td>
                                        <td>@mdo</td>
                                    </tr>
                                    <tr>
                                        <td ><input type="checkbox"/>3</td>
                                        <td style={{borderRight:'1px solid black'}}>Larry</td>
                                        <td>the Bird</td>
                                        <td>@twitter</td>
                                        <td>@mdo</td>
                                    </tr>
                                    <tr>
                                        <td ><input type="checkbox"/>4</td>
                                        <td style={{borderRight:'1px solid black'}}>Larry</td>
                                        <td>the Bird</td>
                                        <td>@twitter</td>
                                        <td>@mdo</td>
                                    </tr>
                                    
                                </table>
                                </div>
                            </div>
                            <div style={{marginTop:'10px',marginLeft:'0px',marginRight:'0px'}} className="row">
                            <input type="submit" value="Save above data point configuration" className="gps-btn" style={{fontSize: '12px', padding: '4px 14px'}} />
                            </div>
                            <div style={{marginTop:'10px',width:'100%',marginLeft:'0px',marginRight:'0px'}} className="row">
                                <p>Overview of Data Providers</p>
                            </div>
                            <div style={{marginTop:'10px',width:'100%',marginLeft:'0px',marginRight:'0px'}} className="row">
                                <div className="col-sm-4 fl">
                                <p>Provider Data Points (DK)</p>
                                <div>
                                <input type='checkbox'/>PL(Vanlose)
                                </div>
                                <div>
                                <input type='checkbox'/>SL1(Harlose)
                                </div>
                                <div className="clearfix"></div>
                                </div>
                                
                                <div className="col-sm-5 fl ex3"style={{overflow:'auto' ,padding:'0px 0px', width: '94%'}}>
                                <table  style={{border:'1px solid black',marginBottom:'0px' , width: '100%',borderCollapse: 'collapse'}}>
                                  
                                    <tr  style={{border:'1px solid black'}}>
                                        <th style={{border:'1px solid black'}}>Temp.</th>
                                        <th style={{border:'1px solid black'}}>Humidity</th>
                                        <th style={{border:'1px solid black'}}>Wind</th>
                                        <th style={{border:'1px solid black'}}>Weather</th>
                                        <th style={{border:'1px solid black'}}>Weather</th>
                                        <th style={{border:'1px solid black'}}>Weather</th>
                                    </tr>
                                    <tr>
                                        <td style={{border:'1px solid black'}}><input type="checkbox"/>2</td>
                                        <td style={{border:'1px solid black'}}>Jacob</td>
                                        <td style={{border:'1px solid black'}}>Thornton</td>
                                        <td style={{border:'1px solid black'}}>@fat</td>
                                        <td style={{border:'1px solid black'}}>@fat</td>
                                        <td style={{border:'1px solid black'}}>@fat</td>
                                        <td style={{border:'1px solid black'}}>@fat</td>
                                        
                                    </tr>
                                    <tr>
                                        <td style={{border:'1px solid black'}} ><input type="checkbox"/>3</td>
                                        <td style={{border:'1px solid black'}}>Larry</td>
                                        <td style={{border:'1px solid black'}}>the Bird</td>
                                        <td style={{border:'1px solid black'}}>@twitter</td>
                                        <td style={{border:'1px solid black'}}>@fat</td>
                                        <td style={{border:'1px solid black'}}>@fat</td>
                                        <td style={{border:'1px solid black'}}>@fat</td>
                                       
                                    </tr>
                                  
                                </table>
                                <div className="clearfix"></div>
                                </div>
                                
                            </div>

                            <div style={{marginTop:'10px',width:'100%',marginLeft:'0px',marginRight:'0px'}} className="row">
                                <div className="col-sm-4 fl">
                                <p>Provider Data Points (DK)</p>
                                <div>
                                <input type='checkbox'/>NULL
                                </div>
                                <div>
                                <input type='checkbox'/>NULL
                                </div>
                                <div>
                                <input type='checkbox'/>NULL
                                </div>
                                <div>
                                <input type='checkbox'/>NULL
                                </div>
                                <div className="clearfix"></div>
                                </div>
                                
                                
                                <div className="col-sm-5 fl ex3"style={{overflow:'auto' ,padding:'0px 0px', width: '94%'}}>
                                <table style={{border:'1px solid black',marginBottom:'0px' , width: '100%',borderCollapse: 'collapse'}} >
                                    <thead>
                                    <tr style={{border:'1px solid black'}}>
                                        <th style={{border:'1px solid black'}}>Temp.</th>
                                        <th style={{border:'1px solid black'}}>Humidity</th>
                                        <th style={{border:'1px solid black'}}>Wind</th>
                                        <th style={{border:'1px solid black'}}>Weather</th>
                                        <th style={{border:'1px solid black'}}>Weather</th>
                                        <th style={{border:'1px solid black'}}>Weather</th>
                                    </tr>
                                    </thead>
                                    
                                    <tr>
                                        <td style={{border:'1px solid black'}} ><input type="checkbox"/>2</td>
                                        <td style={{border:'1px solid black'}}>Jacob</td>
                                        <td style={{border:'1px solid black'}}>Thornton</td>
                                        <td style={{border:'1px solid black'}}>@fat</td>
                                        <td style={{border:'1px solid black'}}>@fat</td>
                                        <td style={{border:'1px solid black'}}>@fat</td>
                                        <td style={{border:'1px solid black'}}>@fat</td>
                                        
                                    </tr>
                                    <tr>
                                        <td style={{border:'1px solid black'}}><input type="checkbox"/>3</td>
                                        <td style={{border:'1px solid black'}}>Larry</td>
                                        <td style={{border:'1px solid black'}}>the Bird</td>
                                        <td style={{border:'1px solid black'}}>@twitter</td>
                                        <td style={{border:'1px solid black'}}>@fat</td>
                                        <td style={{border:'1px solid black'}}>@fat</td>
                                        <td style={{border:'1px solid black'}}>@fat</td>
                                       
                                    </tr>
                                    <tr>
                                        <td style={{border:'1px solid black'}}><input type="checkbox"/>3</td>
                                        <td style={{border:'1px solid black'}}>Larry</td>
                                        <td style={{border:'1px solid black'}}>the Bird</td>
                                        <td style={{border:'1px solid black'}}>@twitter</td>
                                        <td style={{border:'1px solid black'}}>@fat</td>
                                        <td style={{border:'1px solid black'}}>@fat</td>
                                        <td style={{border:'1px solid black'}}>@fat</td>
                                       
                                    </tr>
                                    
                                </table>
                                <div className="clearfix"></div>
                                </div>
                                
                            </div>

                            <div style={{marginTop:'10px',width:'100%',marginLeft:'0px',marginRight:'0px'}} className="row">
                                <div className="col-sm-4 fl">
                                <p>Provider Data Points (DK)</p>
                                <div>
                                <input type='checkbox'/>PL(Vanlose)
                                </div>
                                <div className="clearfix"></div>
                                </div>
                                
                                <div className="col-sm-5 fl ex3"style={{overflowX:'auto' ,padding:'0px 0px', width: '94%'}} >
                                
                                <table  style={{border:'1px solid black',marginBottom:'0px', width: '100%',borderCollapse: 'collapse'}} >
                                    
                                    <tr style={{border:'1px solid black'}}>
                                        <th style={{border:'1px solid black'}}>Temp.</th>
                                        <th style={{border:'1px solid black'}}>Humidity</th>
                                        <th style={{border:'1px solid black'}}>Wind</th>
                                        <th style={{border:'1px solid black'}}>Weather</th>
                                        <th style={{border:'1px solid black'}}>Weather</th>
                                        <th style={{border:'1px solid black'}}>Weather</th>
                                    </tr>
                                    
                                    
                                    <tr>
                                        <td style={{border:'1px solid black'}} ><input type="checkbox"/>2</td>
                                        <td style={{border:'1px solid black'}}>Jacob</td>
                                        <td style={{border:'1px solid black'}}>Thornton</td>
                                        <td style={{border:'1px solid black'}}>@fat</td>
                                        <td style={{border:'1px solid black'}}>@fat</td>
                                        <td style={{border:'1px solid black'}}>@fat</td>
                                        <td style={{border:'1px solid black'}}>@fat</td>
                                        
                                    </tr>
                                    <tr>
                                        <td style={{border:'1px solid black'}}><input type="checkbox"/>3</td>
                                        <td style={{border:'1px solid black'}}>Larry</td>
                                        <td style={{border:'1px solid black'}}>the Bird</td>
                                        <td style={{border:'1px solid black'}}>@twitter</td>
                                        <td style={{border:'1px solid black'}}>@fat</td>
                                        <td style={{border:'1px solid black'}}>@fat</td>
                                        <td style={{border:'1px solid black'}}>@fat</td>
                                       
                                    </tr>
                                    
                                </table>
                                <div className="clearfix"></div>
                                </div>
                                
                                </div>
                                <div className="row">
                            <div className="text-right  " style={{borderTop: '1px solid #d2d2d2', paddingTop: '15px', marginTop: '15px',width:'100%',marginLeft:'0px',marginRight:'20px'}}>
                                    <input type="button" value="Back" className="registration-btn" />
                                    <input type="button" value="Save" className="registration-btn" />
                                    <Link to='/dashboard'>
                                        <input type="button" value="Save & Continue" className="login-btn margin-top-mobile" />
                                    </Link>
                                </div>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default SetUpWeatherRources;