import React from 'react';
import {render} from 'react-dom';
import {Row, Col, Button} from 'reactstrap';
import { CloudyIcon, cloudySlideIcon, partyCloudy, cloudyRain, cloudy, sunny, mostlySunny, temprature } from '../constant.jsx';
import Slider from 'react-slick';

class TempratureSliderComponent extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const weeks = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const day = new Date();
    var settings = {
      dots: false,
      infinite: true,
      slidesToShow: 6,
      slidesToScroll: 6,
      autoplay: false,
      autoplaySpeed: 5000,
      vertical: false,
      responsive: [
        {
          breakpoint: 850,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 605,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        }
      ]
    }
    return (
      <div>
        <Row>
          <Col sm="12">
            <div className="weather-list-wrapper">
              <Row>
                <Col xs="12" sm="4" md="3">
                  <Row>
                    <Col xs="6" className="text-center">
                      <label className="weather-type-heading">Temprature</label>
                      <label className="weather-type">28C</label>
                      <Button className="deatils-small-btn">Details</Button>
                    </Col>
                    <Col xs="6">
                      <img src={temprature} className="img-fluid" style={{'height': 84}} />
                    </Col>
                  </Row>
                  <div className="cxlearfix"></div>
                </Col>
                <Col xs="12" sm="8" md="9">
                  <Col xs={{ size: 11 }} className="ml-auto mr-auto">
                    <Slider {...settings}>
                      <div className="text-center">
                        <div className="mr-auto ml-auto">
                          <p className="temprature-label">MAX</p>
                          <p className="teamprature-unit">33C</p>
                          <br/>
                          <p className="temprature-label">MIN</p>
                          <p className="teamprature-unit">26C</p>
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="mr-auto ml-auto">
                          <p className="temprature-label">MAX</p>
                          <p className="teamprature-unit">33C</p>
                          <br/>
                          <p className="temprature-label">MIN</p>
                          <p className="teamprature-unit">26C</p>
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="mr-auto ml-auto">
                          <p className="temprature-label">MAX</p>
                          <p className="teamprature-unit">33C</p>
                          <br/>
                          <p className="temprature-label">MIN</p>
                          <p className="teamprature-unit">26C</p>
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="mr-auto ml-auto">
                          <p className="temprature-label">MAX</p>
                          <p className="teamprature-unit">33C</p>
                          <br/>
                          <p className="temprature-label">MIN</p>
                          <p className="teamprature-unit">26C</p>
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="mr-auto ml-auto">
                          <p className="temprature-label">MAX</p>
                          <p className="teamprature-unit">33C</p>
                          <br/>
                          <p className="temprature-label">MIN</p>
                          <p className="teamprature-unit">26C</p>
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="mr-auto ml-auto">
                          <p className="temprature-label">MAX</p>
                          <p className="teamprature-unit">33C</p>
                          <br/>
                          <p className="temprature-label">MIN</p>
                          <p className="teamprature-unit">26C</p>
                        </div>
                      </div>
                    </Slider>
                  </Col>
                </Col>
              </Row>
            </div>

          </Col>
        </Row>
      </div>
    );
  }

}

export default TempratureSliderComponent;