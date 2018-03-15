import React , {Component} from 'react';
import {render} from 'react-dom';
import {Link} from 'react-router-dom';
import Countries  from 'react-select-country';
import Slider from 'react-slick'
import {slider1 ,slider2,banner,image1,image2,image3,image4,image5,image6,glyphi,locate,logo,arrow} from '../constant.jsx';
import { Col,Row,Collapse, Button, CardBody, Card ,UncontrolledCarousel} from 'reactstrap';


class Home extends React.Component {
constructor(props)
{
super(props);

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


    <div style={{ overflow:'hidden'}}className="container-fluid">
   <div className="row"  style={{backgroundColor:'rgb(232,232,232)'}}  >
      
         <div  className=" col-sm-6  ">
         </div>
         <div style={{display:'flex'}} className=" col-sm-6 ">

                <div style={{marginLeft:'0px'}} className="   ">
                </div>
                <div className=" col-sm-1 " style={{marginLeft:'5px'}}>
                <a href="#"><img style={{width:'20px'}} src={glyphi} /></a>
                </div>
                <div className=" col-sm-1 "    >
                <a href="#">Login</a>
                </div>
                <div className=" col-sm-2 " >
                <input type="submit" value="Register For Free" className="register-for-btn" />
                </div>
                <div clssName=" col-sm-1 ">
                <a href="#"><img style={{width:'20px',marginLeft:'0px'}} src={locate} /></a>
                </div>
        </div>
   </div>
   <div className="row">
      
         <div className="col-sm-6 nav justify-content-center">
            <a className="navbar-brand "><img src={logo}/></a>
         </div>
         <div className="col-sm-6 navbar navbar-expand-lg navbar-light bg-light ">
         <button className="navbar-toggler" type="button" style={{marginLeft:'300px'}} data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon "></span>
        </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav"style={{display:'flex',listStyle:'none'}} >
               <li >
                  <a  href="#">
                  Solutions
                  </a>
               </li>
               <li style={{marginLeft:'20px'}}>
                  <a  href="#">
                  Product
                  </a>
               </li>
               <li style={{marginLeft:'20px'}}>
                  <a  href="#">
                  Support
                  </a>
               </li>
               <li style={{marginLeft:'20px'}}>
                  <a href="#">
                  Contact
                  </a>
               </li>
            </ul>
         </div>
     </div>
   </div>
   <div className=" row ">
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
            <div className="carousel-item active">
            <img className="d-block w-100" src={banner} alt="First slide"/>
            </div>
            <div className="carousel-item">
            <img className="d-block w-100" src={banner} alt="Second slide"/>
            </div>
            <div className="carousel-item">
            <img className="d-block w-100" src={banner} alt="Third slide"/>
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
         <div className="row nav justify-content-center col-sm-12">
            <a className="navbar-brand ">CLAFIS Products</a>
         </div>
         <div className="row">
        <div className="col-sm-3" style={{marginBottom:'5px'}}>
            <a style={{width:'100%'}}className="navbar-brand bg-dark text-center">Products</a>
            <div style={{borderColor:'rgb(188, 191, 196)',border: '1px solid gray',height:'auto',padding:'5px'}}>
            <a onClick={this.toggle} style={{ marginBottom: '1rem',fontSize:'13px' }} href="#"><img style={{width:'7px',height:'7px',marginRight:'5px'}} src={arrow}/>Input/Output M2M Connectivity</a><br/>
            <a onClick={this.toggle} style={{ marginBottom: '1rem',fontSize:'13px' }} href="#"><img style={{width:'7px',height:'7px',marginRight:'5px'}} src={arrow}/>Gate link Module(ioCGW)</a><br/>
            <a onClick={this.toggle} style={{ marginBottom: '1rem',fontSize:'13px' }} href="#"><img style={{width:'7px',height:'7px',marginRight:'5px'}} src={arrow}/>IoT Cloud enabled</a><br/>
            <a onClick={this.toggle} style={{ marginBottom: '1rem',fontSize:'13px' }} href="#"><img style={{width:'7px',height:'7px',marginRight:'5px'}} src={arrow}/>Advanced Information Processing</a><br/>
            <a onClick={this.toggle} style={{ marginBottom: '1rem',fontSize:'13px' }} href="#"><img style={{width:'7px',height:'7px',marginRight:'5px'}} src={arrow}/>Visual Analytics Module</a><br/>
            <a onClick={this.toggle} style={{ marginBottom: '1rem',fontSize:'13px' }} href="#"><img style={{width:'7px',height:'7px',marginRight:'5px'}} src={arrow}/>Visual Analytics Module</a><br/>
            <a onClick={this.toggle} style={{ marginBottom: '1rem',fontSize:'13px' }} href="#"><img style={{width:'7px',height:'7px',marginRight:'5px'}} src={arrow} />Visual Analytics Module</a><br/>
            </div>
        </div>
      <div style={{border:'1px solid gray',marginBottom:'5px'}}className="col-sm-9">
        <Slider  {...settings}>
            <div className="text-center"><img style={{padding:'20px',height:'175px',width:'175px'}} src={banner}/></div>
            <div className="text-center"><img style={{padding:'20px',height:'175px',width:'175px'}} src={banner}/></div>
            <div className="text-center"><img style={{padding:'20px',height:'175px',width:'175px'}} src={banner}/></div>
            <div className="text-center"><img style={{padding:'20px',height:'175px',width:'175px'}} src={banner}/></div>
            <div className="text-center"><img style={{padding:'20px',height:'175px',width:'175px'}} src={banner}/></div>
            <div className="text-center"><img style={{padding:'20px',height:'175px',width:'175px'}} src={banner}/></div>
        </Slider>
      </div>
      </div>
      <div style={{backgroundColor:'#F2F3F4'}}className="row">
        <nav className="row justify-content-sm-center col-sm-12">
            <a className="navbar-brand ">CLAFIS Services and Support</a>
        </nav>
        <div className="row justify-content-center">
            <div style={{borderColor:'rgb(188, 191, 196)',borderStyle: 'solid' , borderWidth: '1px' ,height:'300px',margin:'20px',paddingLeft:'0px',padding:'0px'}} className="col-sm-3">
            <div>
                <img style={{width:'100%'}} src={image1}/>
            </div>
            <div>
                <p className="text-center">Crop Activities</p>
                <span>Crop Recordings,Planning ,GeoMapping etc.</span>
            </div>
        </div>
        <div style={{borderColor:'rgb(188, 191, 196)',borderStyle: 'solid' , borderWidth: '1px' ,height:'300px',margin:'20px',paddingLeft:'0px',padding:'0px'}} className="col-sm-3">
        <div>
            <img style={{width:'100%'}} src={image2}/>
        </div>
        <div>
            <p className="text-center">Mateorological Services</p>
            <span>Provider of weather info etc.</span>
        </div>
        </div>
        <div style={{borderColor:'rgb(188, 191, 196)',borderStyle: 'solid' , borderWidth: '1px' ,height:'300px',margin:'20px',paddingLeft:'0px',padding:'0px'}} className="col-sm-3">
        <div>
        <img style={{width:'100%'}} src={image3}/>
        </div>
        <div>
        <p className="text-center">Mateorological Services</p>
        <span>Provider of weather info etc.</span>
        </div>
        </div>
        </div>
        <div className="row justify-content-center" style={{marginTop:'20px'}} >
        <div style={{borderColor:'rgb(188, 191, 196)',borderStyle: 'solid' , borderWidth: '1px' ,height:'300px',margin:'20px',paddingLeft:'0px',padding:'0px'}} className="col-sm-3">
        <div>
            <img style={{width:'100%'}} src={image4}/>
        </div>
        <div>
            <p className="text-center">Mateorological Services</p>
            <span>Provider of weather info etc.</span>
        </div>
        </div>
        <div style={{borderColor:'rgb(188, 191, 196)',borderStyle: 'solid' , borderWidth: '1px' ,height:'300px',margin:'20px',paddingLeft:'0px',padding:'0px'}} className="col-sm-3">
        <div>
        <img style={{width:'100%'}} src={image5}/>
        </div>
        <div>
        <p className="text-center">Mateorological Services</p>
        <span>Provider of weather info etc.</span>
        </div>
        </div>
        <div style={{borderColor:'rgb(188, 191, 196)',borderStyle: 'solid' , borderWidth: '1px' ,height:'300px',margin:'20px',paddingLeft:'0px',padding:'0px'}} className="col-sm-3">
        <div>
        <img style={{width:'100%'}}  src={image6}/>
        </div>
        <div>
        <p className="text-center">Mateorological Services</p>
        <span>Provider of weather info etc.</span>
        </div>
        </div>
        </div>
</div>
</div>
);
}
}
export default Home;