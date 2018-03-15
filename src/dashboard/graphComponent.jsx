import React , {Component} from 'react';
import {render} from 'react-dom';
import {Link} from 'react-router-dom';
import Slider from 'react-slick'
import { CloudyIcon, cloudySlideIcon, partyCloudy, cloudyRain, cloudy, sunny, mostlySunny } from '../constant.jsx';
import { Col,Row,Collapse, Button, CardBody, Card ,UncontrolledCarousel} from 'reactstrap';
import scrollbar from 'react-scrollbar';
import {Bar} from 'react-chartjs-2';
import {Line} from 'react-chartjs-2';

class GraphComponent extends React.Component {
    constructor(props){
    super(props);
        this.state = {
          chartData:{
            labels: [ '11:00', '2:00', '3:00' , '4:00', '5:00', '6:00','7:00', '8:00', '9:00' , '10:00', '11:00', '12:00'],
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
    }

render(){
var settings = {
dots: false,
infinite: true,
speed: 200,
slidesToShow: 4,
slidesToScroll: 1,
vertical: false,
autoPlay:true
};

return(
<div className="container-fluid">
<div className="row" style={{border:'2px solid #e3e3e3'}}>
   <div className="col-sm-2" style={{marginTop:'70px'}}>
      <Row>
         <Col xs="5" className="text-center">
         <label className="weather-type-heading">Weather</label>
         <label className="weather-type">Cloudy</label>
         <Button className="deatils-small-btn">Details</Button>
         </Col>
         <Col xs="7">
         <img src={ mostlySunny } />
         </Col>
      </Row>
   </div>
   <div style={{marginBottom:'5px'}}className="col-sm-10">
      <div className=" row ">
         <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
               <div className="carousel-item active">
                  <Col >
                  <div >
                     <Bar 
                        data={this.state.chartData}
                        width={900}
                        height={250}
                        options={{}} />
                  </div>
                  </Col>
               </div>
               <div className="carousel-item">
                  <Col className="ml-auto mr-auto">
                  <div >
                     <Bar 
                        data={this.state.chartData}
                        width={900}
                        height={250}
                        options={{}} />
                  </div>
                  </Col>
               </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
            </a>
         </div>
      </div>
   </div>
</div>
<div className="cxlearfix"></div>
<div className="row" style={{border:'2px solid #e3e3e3',marginTop:'30px'}}>
   <div className="col-sm-2" style={{marginTop:'70px'}}>
      <Row>
         <Col xs="5" className="text-center">
         <label className="weather-type-heading">Weather</label>
         <label className="weather-type">Cloudy</label>
         <Button className="deatils-small-btn">Details</Button>
         </Col>
         <Col xs="7">
         <img src={ mostlySunny } />
         </Col>
      </Row>
   </div>
   <div style={{marginBottom:'5px'}}className="col-sm-10">
      <div className=" row ">
         <div id="carouselExampleControls1" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
               <div className="carousel-item active">
                  <Col >
                  <div >
                     <Line data={this.data.linedata} 
                    width={900}
                    height={250}
                    />
                  </div>
                  </Col>
               </div>
               <div className="carousel-item">
                  <Col className="ml-auto mr-auto">
                  <div >
                     <Line data={this.data.linedata} 
                    width={900}
                    height={250}
                    />
                  </div>
                  </Col>
               </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleControls1" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleControls1" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
            </a>
         </div>
      </div>
   </div>
</div>
<div className="cxlearfix"></div>


</div>
);
}
}

export default GraphComponent;
