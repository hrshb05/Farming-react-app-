import React from 'react';
import {render} from 'react-dom';
import DashboardComponentHeader from './dashboardComponentHeader.jsx';
import DashboardMainTabsComponent from './dashboardMainTabsComponent.jsx';

class DashboardComponent extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <DashboardComponentHeader />
        <DashboardMainTabsComponent />
      </div>
    );
  }
}

export default DashboardComponent;