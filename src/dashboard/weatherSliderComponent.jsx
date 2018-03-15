import React from 'react';
import {render} from 'react-dom';
import {Row, Col, Button} from 'reactstrap';
import { CloudyIcon, cloudySlideIcon, partyCloudy, cloudyRain, cloudy, sunny, mostlySunny } from '../constant.jsx';
import Slider from 'react-slick';

class WeatherSliderComponent extends React.Component {

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
                      <img src={CloudyIcon} />
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
        </Row>
      </div>
    );
  }

}

export default WeatherSliderComponent;