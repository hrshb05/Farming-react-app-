import React from 'react';
import {render} from 'react-dom';
import {Row, Col, Button} from 'reactstrap';
import { CloudyIcon, cloudySlideIcon, partyCloudy, cloudyRain, cloudy, sunny, mostlySunny } from '../constant.jsx';
import Slider from 'react-slick';
import scrollbar from 'react-scrollbar';
import {Bar} from 'react-chartjs-2';
import {Line} from 'react-chartjs-2';


class GraphComponent extends React.Component {

  constructor(props) {
    super(props);

    this.data = {
      linedata :{
  labels: ['1:00', '2:00', '3:00' , '4:00', '5:00', '6:00','7:00', '8:00', '9:00' , '10:00', '11:00', '12:00'],
  datasets: [
    {
      label: 'My First dataset',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [15,20,30,35,40,45,20,50,70,10,40,25]
    }
  ]
}
}
  this.state = {
      chartData:{
        labels: [ '1:00', '2:00', '3:00' , '4:00', '5:00', '6:00','7:00', '8:00', '9:00' , '10:00', '11:00', '12:00'],
        datasets:[{
                    label:'population',
                    data:[
                          15,
                          20,
                          30,
                          40,
                          30,
                          20,
                          15,
                          15,
                          20,
                          30,
                          40,
                          30,
                    ],
                    backgroundColor:[
                          '#ffaab5',
                          '#7bbbe9',
                          '#ffe09a',
                          '#8cd2d8',
                          '#c3abff',
                          '#ffc88e',
                          '#ffaab5',
                          '#7bbbe9',
                          '#ffe09a',
                          '#8cd2d8',
                          '#c3abff',
                          '#ffc88e',
                    ]
                  }
        ]
      }
    }
  }
  render() {
    const weeks = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const day = new Date();
    var ReactDOM = require('react-dom');
    var ScrollArea = require('react-scrollbar');
    var settings = {
      dots: false,
      infinite: true,
      slidesToShow: 6,
      slidesToScroll: 6,
      autoplay: false,
      autoplaySpeed: 3000,
      vertical: false,
      lazyLoad: true,
      init: function(){
        console.log('initiated');
      }
    }
    return (
      <div>
        <Row>
          <Col sm="12">
            <div className="weather-list-wrapper">
              <label className="today-date">{weeks[day.getDay()]}, {new Date().toLocaleString(this.locale, { month: "long" })} {new Date().getDate()}, {new Date().getFullYear()}</label>
              <Row>
                <Col xs="12" sm="4" md="3">
                  <label className="text-center full-width">Current, {new Date().getHours()}:{new Date().getMinutes()}</label>
                  <Row>
                    <Col xs="6" className="text-center">
                      <label className="weather-type-heading">Weather</label>
                      <label className="weather-type">Cloudy</label>
                      <Button className="deatils-small-btn">Details</Button>
                    </Col>
                    <Col xs="6">
                       <img src={ mostlySunny } />

                    </Col>
                  </Row>
                  <div className="cxlearfix"></div>
                </Col>
                <Col xs="12" sm="8" md="9">
                  <Col xs={{ size: 11 }} className="ml-auto mr-auto">
                   <Slider {...settings}>
                      <div className="text-center">
                        <p className="weather-time-slider">12:00</p>
                        <img src={ mostlySunny } className="img-fluid margin-auto" />
                        <div>
                          <p className="slider-status">Cloudy,</p>
                          <p className="slider-status">light winds</p>
                        </div>
                      </div>
                      <div className="text-center">
                        <p className="weather-time-slider">1:00</p>
                        <img src={ cloudy } className="img-fluid margin-auto" />
                        <div>
                          <p className="slider-status">Cloudy,</p>
                          <p className="slider-status">light winds</p>
                        </div>
                      </div>
                      <div className="text-center">
                        <p className="weather-time-slider">2:00</p>
                        <img src={ cloudyRain } className="img-fluid margin-auto" />
                        <div>
                          <p className="slider-status">Cloudy,</p>
                          <p className="slider-status">light winds</p>
                        </div>
                      </div>
                      <div className="text-center">
                        <p className="weather-time-slider">3:00</p>
                        <img src={ partyCloudy } className="img-fluid margin-auto" />
                        <div>
                          <p className="slider-status">Cloudy,</p>
                          <p className="slider-status">light winds</p>
                        </div>
                      </div>
                      <div className="text-center">
                        <p className="weather-time-slider">4:00</p>
                        <img src={ mostlySunny } className="img-fluid margin-auto" />
                        <div>
                          <p className="slider-status">Cloudy,</p>
                          <p className="slider-status">light winds</p>
                        </div>
                      </div>
                      <div className="text-center">
                        <p className="weather-time-slider">5:00</p>
                        <img src={ sunny } className="img-fluid margin-auto" />
                        <div>
                          <p className="slider-status">Cloudy,</p>
                          <p className="slider-status">light winds</p>
                        </div>
                      </div>
                      <div className="text-center">
                        <p className="weather-time-slider">6:00</p>
                        <img src={ partyCloudy } className="img-fluid margin-auto" />
                        <div>
                          <p className="slider-status">Cloudy,</p>
                          <p className="slider-status">light winds</p>
                        </div>
                      </div>
                    </Slider>
                  </Col>
                </Col>
              </Row>
            </div>
          </Col>
          <Col sm="12">
            <div className="weather-list-wrapper">
              <Row>
                <Col xs="12" sm="4" md="3">
                  <Row>
                    <Col xs="6" className="text-center">
                      <label className="weather-type-heading">Weather</label>
                      <label className="weather-type">Cloudy</label>
                      <Button className="deatils-small-btn">Details</Button>
                    </Col>
                    <Col xs="6">
                       <img src={ mostlySunny } />

                    </Col>
                  </Row>
                  <div className="cxlearfix"></div>
                </Col>
                <Col xs="12" sm="8" md="9">
                  <Col xs={{ size: 11 }} className="ml-auto mr-auto">
                    <Slider >
                      <div >
                        <Bar 
                        data={this.state.chartData}
                        width={100}
                        height={25}
                        options={{}} />
                      </div>
                    </Slider>
                  </Col>
                </Col>
                <div className="cxlearfix"></div>
              </Row>
            </div>

          </Col>
          <Col sm="12">
            <div className="weather-list-wrapper">
              <Row>
                <Col xs="12" sm="4" md="3">
                  <Row>
                    <Col xs="6" className="text-center">
                      <label className="weather-type-heading">Weather</label>
                      <label className="weather-type">Cloudy</label>
                      <Button className="deatils-small-btn">Details</Button>
                    </Col>
                    <Col xs="6">
                       <img src={ mostlySunny } />
                    </Col>
                  </Row>
                  <div className="cxlearfix"></div>
                </Col>
                <Col xs="12" sm="8" md="9">
                  <Col xs={{ size: 11 }} className="ml-auto mr-auto">
                  <Slider >
                      <div>
                        <Line data={this.data.linedata} 
                        width={100}
                        height={25}
                        />
                      </div>
                    </Slider>
                  </Col>
                </Col>
                <div className="cxlearfix"></div>
              </Row>
            </div>
          </Col>
           <Col sm="12">
            <div className="weather-list-wrapper">
              <Row>
                <Col xs="12" sm="4" md="3">
                  <Row>
                    <Col xs="6" className="text-center">
                      <label className="weather-type-heading">Weather</label>
                      <label className="weather-type">Cloudy</label>
                      <Button className="deatils-small-btn">Details</Button>
                    </Col>
                    <Col xs="6">
                       <img src={ mostlySunny } />
                    </Col>
                  </Row>
                  <div className="cxlearfix"></div>
                </Col>
                <Col xs="12" sm="8" md="9">
                  <Col xs={{ size: 11 }} className="ml-auto mr-auto">
                    <Slider >
                      <div >
                        <Bar 
                        data={this.state.chartData}
                        width={100}
                        height={25}
                        options={{}} />
                      </div>
                    </Slider>
                  </Col>
                </Col>
                <div className="cxlearfix"></div>
              </Row>
            </div>
          </Col>
          <Col sm="12">
            <div className="weather-list-wrapper">
              <Row>
                <Col xs="12" sm="4" md="3">
                  <Row>
                    <Col xs="6" className="text-center">
                      <label className="weather-type-heading">Weather</label>
                      <label className="weather-type">Cloudy</label>
                      <Button className="deatils-small-btn">Details</Button>
                    </Col>
                    <Col xs="6">
                       <img src={ mostlySunny } />
                    </Col>
                  </Row>
                  <div className="cxlearfix"></div>
                </Col>
                <Col xs="12" sm="8" md="9">
                  <Col xs={{ size: 11 }} className="ml-auto mr-auto">
                   <Slider >
                      <div>
                        <Line data={this.data.linedata} 
                        width={100}
                        height={25}
                        />

                      </div>
                    </Slider>
                  </Col>
                </Col>
                <div className="cxlearfix"></div>
              </Row>
            </div>
          </Col>
        </Row>
      </div>
    );
  }

}

export default GraphComponent;

