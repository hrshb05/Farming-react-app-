import React from 'react';
import {render} from 'react-dom';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col, Form, Input} from 'reactstrap';
import classnames from 'classnames';
import ViewFilterComponent from './viewFilterComponent.jsx';
import GraphComponent from './graphComponent.jsx';

class DashboardMainTabsComponent extends React.Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);

    this.state = {
      activeTab: '1'
    };

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
        <div className="row justify-content-sm-center dashboard-main-tabs-header">
          <div className="col-xs-12 col-md-11 dashboard-main-tabs-wrapper">
            <Nav tabs className="fl">
              <NavItem>
                <NavLink className={classnames({ active: this.state.activeTab === '1' })} onClick={() => { this.toggle('1'); }}>
                  Digits View
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className={classnames({ active: this.state.activeTab === '2' })} onClick={() => { this.toggle('2'); }}>
                  Graph View
                </NavLink>
              </NavItem>
            </Nav>
            <div className="fr right-dashboard-links">
              <a href="/basic-information">Setup</a>
              <a href="/basic-information">Edit configuration</a>
            </div>
          </div>
        </div>

        <div className="row justify-content-sm-center dashboard-location-header">
          <div className="col-xs-12 col-md-11">
            <Input type="select" style={{width: '250px'}} className="location-dropdown">
              <option>Select Location</option>
            </Input>
            <Button className="primary-location-button">Primary Location</Button>
            <div className="clearfix"></div>
          </div>
        </div>

        <div className="row justify-content-sm-center dashboard-main-tabs-content">
          <div className="col-xs-12 col-md-11">
            <TabContent activeTab={this.state.activeTab}>
              <TabPane tabId="1">
                <Row>
                  <Col sm="12">
                    
                    <ViewFilterComponent/>

                  </Col>
                </Row>
              </TabPane>
              <TabPane tabId="2">
                <Row>
                  <Col>
                    
                    <GraphComponent/>

                  </Col>
                </Row>
              </TabPane>
            </TabContent>
          </div>
        </div>
      </div>
    );
  }

}

export default DashboardMainTabsComponent;