import React from 'react';
import {render} from 'react-dom';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col, Button } from 'reactstrap';
import classnames from 'classnames';
import NewWeatherComponet from './newWeatherComponet.jsx';
import WeatherGraphCompomnent from './weatherGraphComponent.jsx';
import DailyWeatherComponent from './dailyWeatherComponent.jsx';
import WeeklyWeatherComponent from './WeeklyWeatherComponent.jsx';

class ViewFilterComponent extends React.Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1',
    };
    this.locale = "en-us"

    //this.todayDate = new Date();
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  render() {
    return (
      <div>
        <div className="sub-tabs-wrapper">
          <Nav tabs className="fl">
            <NavItem>
              <NavLink
                className={classnames({ active: this.state.activeTab === '1' })} onClick={() => { this.toggle('1'); }}>
                1 hour view
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: this.state.activeTab === '2' })} onClick={() => { this.toggle('2'); }}>
                3 hour view
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: this.state.activeTab === '3' })} onClick={() => { this.toggle('3'); }}>
                6 hour view
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: this.state.activeTab === '4' })} onClick={() => { this.toggle('4'); }}>
                12 hour view
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: this.state.activeTab === '5' })} onClick={() => { this.toggle('5'); }}>
                Daily
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: this.state.activeTab === '6' })} onClick={() => { this.toggle('6'); }}>
                Weekley
              </NavLink>
            </NavItem>
          </Nav>
          <div className="fr">
            <Button className="download-button">Download Data</Button>
          </div>
          <div className="clearfix"></div>
        </div>

        <div className="weather-forecast-wrapper">
          <h4 className="col-xs-12 col-md-6 fl mt-1">Agro Weather forecast</h4>
          <div className="col-xs-12 col-md-6 fl text-right">
            <a href="#" className="btn btn-dark pull-right">Full Weather Details</a>
          </div>
          <div className="clearfix"></div>
        </div>

        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <NewWeatherComponet/>
            {/*<WeatherGraphCompomnent/>*/}
          </TabPane>
          <TabPane tabId="2">
            <Row>
              <Col>
                <h4>Tab 2</h4>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="3">
            <Row>
              <Col>
                <h4>Tab 3</h4>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="5">
            <Row>
              <Col>
                <DailyWeatherComponent/>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="6">
            <Row>
              <WeeklyWeatherComponent/>
            </Row>
          </TabPane>

        </TabContent>
      </div>
    );
  }

}

export default ViewFilterComponent;