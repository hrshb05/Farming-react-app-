import React from 'react';
import {render} from 'react-dom';
import { Link } from 'react-router-dom';
import { Row, Container, Col, Button } from 'reactstrap';
import { cloudiness, temprature, rainIcon, humidityIcon, sunRadiationIcon, windspeedIcon } from '../constant.jsx';

class WeeklyWeatherComponent extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const days = ['1','2','3', '4', '5', '6', '7'];
    const list = ['1', '2'];
    this.state = {days};

    return (
      <Col>
          <Row className="weather-forecast-wrapper">
            <Col sm="2">
              <p className="font-weight-bold">Week 3</p>
            </Col>
            <Col sm="8">
              <p className="font-weight-bold text-center">Monday 11th June, 2017 - Sunday 17th June, 2017</p>
            </Col>
            <Col className="clearfix"></Col>
          </Row>

          <Col>
            <Row className="white-bg-row">
              <Col sm="3">
                <p className="text-center" style={{lineHeight: '48px'}}>Parameter</p>
              </Col>
              <Col className="text-center" style={{lineHeight: '48px'}}>Range</Col>
              <Col className="text-center">
                <p>Week's</p>
                <p>Summary</p>
              </Col>
              <Col className="text-center">
                <p>Monday</p>
                <p>11/6</p>
              </Col>
              <Col className="text-center">
                <p>Tuesday</p>
                <p>12/6</p>
              </Col>
              <Col className="text-center">
                <p>Wednesday</p>
                <p>13/6</p>
              </Col>
              <Col className="text-center">
                <p>Thursday</p>
                <p>14/6</p>
              </Col>
              <Col className="text-center">
                <p>Friday</p>
                <p>15/6</p>
              </Col>
              <Col className="text-center">
                <p>Saturday</p>
                <p>16/6</p>
              </Col>
              <Col className="text-center">
                <p>Sunday</p>
                <p>17/6</p>
              </Col>
            </Row>

            <Row className="white-bg-row" style={{height: '130px'}}>
              <Col sm="3">
                <div className="container-fluid">
                  <Row style={{height: '116px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <Col md="5">
                      <img src={cloudiness} style={{maxWidth: '100%'}} />
                    </Col>
                    <Col md="7">
                      <p style={{fontSize: '25px'}}>Cloudiness</p>
                    </Col>
                  </Row>
                </div>
              </Col>
              <Col style={{paddingTop: '24px', paddingBottom: '24px', fontSize: '18px'}}>
                <p className="text-center" style={{marginBottom: '15px'}}>Max</p>
                <p className="text-center">Min</p>
              </Col>
              <Col style={{paddingTop: '24px', paddingBottom: '24px', fontSize: '18px'}}>
                <p className="text-center font-weight-bold" style={{marginBottom: '15px'}}>95%</p>
                <p className="text-center font-weight-bold">10%</p>
              </Col>
              {this.state.days.map((days, index) => (
                <Col style={{paddingTop: '24px', paddingBottom: '24px', fontSize: '18px'}}>
                  <p className="text-center" style={{marginBottom: '15px'}}>48%</p>
                  <p className="text-center">10%</p>
                </Col>
              ))}
            </Row>

            <Row className="white-bg-row" style={{height: '130px'}}>
              <Col sm="3">
                <div className="container-fluid">
                  <Row style={{height: '116px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <Col md="5" className="text-center">
                      <img src={temprature} style={{maxWidth: '100%'}} />
                    </Col>
                    <Col md="7">
                      <p style={{fontSize: '25px'}}>Temprature</p>
                    </Col>
                  </Row>
                </div>
              </Col>
              <Col style={{paddingTop: '24px', paddingBottom: '24px', fontSize: '18px'}}>
                <p className="text-center" style={{marginBottom: '15px'}}>Max</p>
                <p className="text-center">Min</p>
              </Col>
              <Col style={{paddingTop: '24px', paddingBottom: '24px', fontSize: '18px'}}>
                <p className="text-center font-weight-bold" style={{marginBottom: '15px'}}>32C</p>
                <p className="text-center font-weight-bold">12C</p>
              </Col>
              {this.state.days.map((days, index) => (
                <Col style={{paddingTop: '24px', paddingBottom: '24px', fontSize: '18px'}}>
                  <p className="text-center" style={{marginBottom: '15px'}}>30C</p>
                  <p className="text-center">14C</p>
                </Col>
              ))}
            </Row>

            <Row className="white-bg-row" style={{height: '130px'}}>
              <Col sm="3">
                <div className="container-fluid">
                  <Row style={{height: '116px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <Col md="5" className="text-center">
                      <img src={rainIcon} style={{maxWidth: '100%'}} />
                    </Col>
                    <Col md="7">
                      <p style={{fontSize: '25px'}}>Rain</p>
                    </Col>
                  </Row>
                </div>
              </Col>
              <Col style={{paddingTop: '24px', paddingBottom: '24px', fontSize: '18px'}}>
                <p className="text-center" style={{marginBottom: '15px'}}>Max</p>
                <p className="text-center">Total</p>
              </Col>
              <Col style={{paddingTop: '24px', paddingBottom: '24px', fontSize: '18px'}}>
                <p className="text-center font-weight-bold" style={{lineHeight: '0.5', marginTop: '8px'}}>1.0</p>
                <p className="text-center" style={{marginBottom: '15px', fontSize: '10px'}}>mm/h</p>
                <p className="text-center font-weight-bold" style={{lineHeight: '0.5'}}>12C</p>
                <p className="text-center" style={{fontSize: '10px'}}>mm/h</p>
              </Col>
              {this.state.days.map((days, index) => (
                <Col style={{paddingTop: '24px', paddingBottom: '24px', fontSize: '18px'}}>
                  <p className="text-center" style={{lineHeight: '0.5', marginTop: '8px'}}>1.0</p>
                  <p className="text-center" style={{marginBottom: '15px', fontSize: '10px'}}>mm/h</p>
                  <p className="text-center" style={{lineHeight: '0.5'}}>12C</p>
                  <p className="text-center" style={{fontSize: '10px'}}>mm/h</p>
                </Col>
              ))}
            </Row>

            <Row className="white-bg-row" style={{height: '130px'}}>
              <Col sm="3">
                <div className="container-fluid">
                  <Row style={{height: '116px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <Col md="5" className="text-center">
                      <img src={sunRadiationIcon} style={{maxWidth: '100%'}} />
                    </Col>
                    <Col md="7">
                      <p style={{fontSize: '25px'}}>Sun Radiation</p>
                    </Col>
                  </Row>
                </div>
              </Col>
              <Col style={{fontSize: '18px'}}>
                <p className="text-center" style={{lineHeight: '116px'}}>Total</p>
              </Col>
              <Col style={{fontSize: '18px'}}>
                <p className="text-center font-weight-bold" style={{lineHeight: '116px'}}>48.5h</p>
              </Col>
              {this.state.days.map((days, index) => (
                <Col style={{fontSize: '18px'}}>
                  <p className="text-center" style={{lineHeight: '116px'}}>8.5h</p>
                </Col>
              ))}
            </Row>

            <Row className="white-bg-row" style={{height: '130px'}}>
              <Col sm="3">
                <div className="container-fluid">
                  <Row style={{height: '116px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <Col md="5" className="text-center">
                      <img src={humidityIcon} style={{maxWidth: '100%'}} />
                    </Col>
                    <Col md="7">
                      <p style={{fontSize: '25px'}}>Humidity</p>
                    </Col>
                  </Row>
                </div>
              </Col>
              <Col style={{paddingTop: '24px', paddingBottom: '24px', fontSize: '18px'}}>
                <p className="text-center" style={{marginBottom: '15px'}}>Max</p>
                <p className="text-center">Min</p>
              </Col>
              <Col style={{paddingTop: '24px', paddingBottom: '24px', fontSize: '18px'}}>
                <p className="text-center font-weight-bold" style={{marginBottom: '15px'}}>95%</p>
                <p className="text-center font-weight-bold">45%</p>
              </Col>
              {this.state.days.map((days, index) => (
                <Col style={{paddingTop: '24px', paddingBottom: '24px', fontSize: '18px'}}>
                  <p className="text-center" style={{marginBottom: '15px'}}>88%</p>
                  <p className="text-center">68%</p>
                </Col>
              ))}
            </Row>

            <Row className="white-bg-row" style={{height: '130px'}}>
              <Col sm="3">
                <div className="container-fluid">
                  <Row style={{height: '116px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <Col md="5" className="text-center">
                      <img src={windspeedIcon} style={{maxWidth: '100%'}} />
                    </Col>
                    <Col md="7">
                      <p style={{fontSize: '25px'}}>Wind Speed</p>
                    </Col>
                  </Row>
                </div>
              </Col>
              <Col style={{fontSize: '18px'}}>
                <p className="text-center" style={{lineHeight: '116px'}}>Avg</p>
              </Col>
              <Col style={{paddingTop: '24px', paddingBottom: '24px', fontSize: '18px'}}>
                <p className="text-center font-weight-bold" style={{marginBottom: '15px'}}>5.6m/s</p>
                <p className="text-center font-weight-bold">SW</p>
              </Col>
              {this.state.days.map((days, index) => (
                <Col style={{paddingTop: '24px', paddingBottom: '24px', fontSize: '18px'}}>
                  <p className="text-center" style={{marginBottom: '15px'}}>5.0m/s</p>
                  <p className="text-center">NW</p>
                </Col>
              ))}
            </Row>

          </Col>
      </Col>
    );
  }

}

export default WeeklyWeatherComponent;