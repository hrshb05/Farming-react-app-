import React from 'react';
import {render} from 'react-dom';
import {Col, Button} from 'reactstrap';
import { CloudyIcon, cloudySlideIcon, partyCloudy, cloudyRain, cloudy, sunny, mostlySunny, 
        temprature, rainIcon, sunRadiationIcon, humidityIcon, windspeedIcon, cloud1Image, fiveimage, wind1 } from '../constant.jsx';

import { StickyTable, Row, Cell } from 'react-sticky-table';
import 'react-sticky-table/dist/react-sticky-table.css';

class DailyWeatherComponent extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const headerArray = ['Today',' ','Wednesday','Thursday','Friday', 'Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const createHeader = headerArray.map((list) => <Cell className="sticky-header-design">{list}</Cell>);
    const people = ['1','2','3', '4', '5', '6', '7', '8', '9', '10', '11'];
    this.state = { people };
    return (
      <div>
        <div className="new-weather-panel-wrapper">
          <div style={{width: '100%', height: '400px', backgroundColor: '#fff'}}>
            <StickyTable stickyColumnCount={2}>
              <Row>
                {createHeader}
              </Row>
              <Row className="green-bg">
                <Cell>
                  <div className="current-weather-wrap" style={{marginTop: '4px'}}>
                    <img src={ mostlySunny } className="img-fluid margin-auto current-weather-image" />
                    <div>
                      <p>Cloudy,</p>
                      <p>light winds</p>
                    </div>
                    <Button className="current-weather-detail">Details</Button>
                  </div>
                </Cell>
                <Cell>
                  <div className="new-weather-type">
                    <p>Cloudy</p>
                    <img src={CloudyIcon} className="img-fluid" />
                  </div>
                </Cell>
                {this.state.people.map((person, index) => ( 
                  <Cell className="new-weather-thumb" key={person.toString()}>
                    <div>
                      <img src={ mostlySunny } className="img-fluid margin-auto" />
                      <div>
                        <p>Cloudy,</p>
                        <p>light winds</p>
                      </div>
                    </div>
                  </Cell>
                ))}
              </Row>
              <div className="row-seprator"></div>

              <Row className="green-bg">
                <Cell>
                  <div className="current-weather-wrap" style={{marginTop: '4px'}}>
                    <p className="temprature-label" style={{paddingTop: '10px', paddingLeft: '10px'}}>MAX</p>
                    <p className="temprature-unit" style={{paddingRight: '10px'}}>33C</p>
                    
                    <p className="temprature-label" style={{paddingLeft: '10px'}}>MIN</p>
                    <p className="temprature-unit" style={{paddingRight: '10px'}}>25C</p>
                    <Button className="current-weather-detail">Details</Button>
                  </div>
                </Cell>
                <Cell>
                  <div className="new-weather-type">
                    <p>Temprature</p>
                    <img src={temprature} className="img-fluid" />
                  </div>
                </Cell>
                {this.state.people.map((person, index) => (
                  <Cell className="new-weather-thumb" key={person.toString()}>
                    <div>
                      <p className="temprature-label" style={{paddingTop: '10px', paddingLeft: '10px'}}>MAX</p>
                      <p className="temprature-unit" style={{paddingRight: '10px'}}>33C</p>
                      
                      <p className="temprature-label" style={{paddingLeft: '10px', marginTop: '10px'}}>MIN</p>
                      <p className="temprature-unit" style={{paddingRight: '10px'}}>25C</p>
                    </div>
                  </Cell>
                ))}
              </Row>
              <div className="row-seprator"></div>

              <Row className="green-bg">
                <Cell>
                  <div className="current-weather-wrap" style={{marginTop: '4px'}}>
                    <img src={cloud1Image} className="img-fluid margin-auto current-weather-image" />
                    <p>0.0</p>
                    <p className="temprature-label text-center">mm/h</p>
                    <Button className="current-weather-detail">Details</Button>
                  </div>
                </Cell>
                <Cell>
                  <div className="new-weather-type">
                    <p>Rain</p>
                    <img src={rainIcon} className="img-fluid" />
                  </div>  
                </Cell>
                {this.state.people.map((person, index) => ( 
                  <Cell className="new-weather-thumb" key={person.toString()}>
                    <div>
                      <img src={cloud1Image} className="img-fluid margin-auto" />
                      <p>0.0</p>
                      <p className="temprature-label text-center">mm/h</p>
                    </div>
                  </Cell>
                ))}
              </Row>
              <div className="row-seprator"></div>

              <Row className="green-bg">
                <Cell>
                  <div className="current-weather-wrap" style={{marginTop: '4px'}}>
                    <img src={fiveimage} className="img-fluid margin-auto current-weather-image" />
                    <p>Partly Cloudy</p>
                    <Button className="current-weather-detail">Details</Button>
                  </div>
                </Cell>
                <Cell>
                  <div className="new-weather-type">
                    <p>Sun Radition</p>
                    <img src={sunRadiationIcon} className="img-fluid" />
                  </div>
                </Cell>
                {this.state.people.map((person, index) => (    
                  <Cell className="new-weather-thumb" key={person.toString()}>      
                    <div>
                      <img src={fiveimage} className="img-fluid margin-auto" />
                      <p>Partly Cloudy</p>
                    </div>
                  </Cell>
                ))}
              </Row>
              <div className="row-seprator"></div>

              <Row className="green-bg">
                <Cell>
                  <div className="current-weather-wrap" style={{marginTop: '4px'}}>
                    <div style={{position: 'relative', top: '25px'}}>
                      <p className="humidity-label">85%</p>
                      <p className="temprature-label text-center">Moderate</p>
                    </div>
                    <Button className="current-weather-detail">Details</Button>
                  </div>           
                </Cell>
                <Cell>
                  <div className="new-weather-type">
                    <p>Humidity</p>
                    <img src={humidityIcon} className="img-fluid" />
                  </div>
                </Cell>
                {this.state.people.map((person, index) => (
                  <Cell className="new-weather-thumb" key={person.toString()}>
                    <div>
                      <div style={{position: 'relative', top: '30px'}}>
                        <p className="humidity-label">85%</p>
                        <p className="temprature-label text-center">Moderate</p>
                      </div>
                    </div>
                  </Cell>
                ))}
              </Row>
              <div className="row-seprator"></div>

              <Row className="green-bg">
                <Cell>
                  <div className="current-weather-wrap" style={{marginTop: '4px'}}>
                    <img src={wind1} className="current-weather-image" />
                    <p>15<small>ms</small></p>
                    <p>SW</p>
                    <Button className="current-weather-detail">Details</Button>
                  </div>
                </Cell>
                <Cell>
                  <div className="new-weather-type">
                    <p>Windspeed</p>
                    <img src={windspeedIcon} className="img-fluid" />
                  </div>
                </Cell>
                {this.state.people.map((person, index) => (
                  <Cell className="new-weather-thumb" key={person.toString()}>
                    <div>
                      <img src={wind1} />
                      <p>15<small>ms</small></p>
                      <p>SW</p>
                    </div>
                  </Cell>
                ))}
              </Row>
              <div className="row-seprator"></div>
            </StickyTable>
          </div>
        </div>
      </div>
    );
  }

}

export default DailyWeatherComponent;