import React from 'react';
import {render} from 'react-dom';

class DashboardComponentHeader extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="row justify-content-sm-center dashboard-header">
          <div className="col-xs-12 col-md-11 no-padding">
            <div className="col-xs-12 col-md-6 fl">
              <h4 className="user-name-dashboard">jorgen Hansen's Agro Weather</h4>
            </div>
            <div className="col-xs-12 col-md-6 fl">
              <p className="text-right"><small>Data provided by yr.no and OpenWeather</small></p>
            </div>
            <div className="clearfix"></div>
            <h3 className="mt-4 text-center">Daily- hourly forecasts (Tuesday, 12-06-2017)</h3>
            <div className="col-xs-6 col-md-6 fl">
              <h4><a href="#">Home</a></h4>
            </div>
            <div className="col-xs-6 col-md-6 fl">
              <h4 className="text-right"><a href="#">My AgroWeather</a></h4>
            </div>
            <div className="clearfix"></div>
          </div>
          <div className="clearfix"></div>
        </div>
      </div>
    );
  }

}

export default DashboardComponentHeader;