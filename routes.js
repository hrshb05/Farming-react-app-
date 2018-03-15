
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import DashboardComponent from './src/dashboard/dashboardComponent.jsx';
import LoginComponent from './src/login/loginComponent.jsx';
import BasicAccountRegistartion from './src/registration/basicAccountRegistration.jsx';
import WeatherLocationSetting from './src/registration/weatherLocationSetting.jsx';
import AddSecondaryLocation from './src/registration/addSecondaryLocation.jsx';
import AddAnotherSecondaryLocation from './src/registration/addAnotherSecondaryLocation.jsx';
import RegistrationAndOwnership from './src/registration/registrationAndOwnership.jsx';
import UIN from './src/registration/uin.jsx';
import Forecast from './src/registration/forecast.jsx';
import WeatherDataVariables from './src/registration/weatherDataVariables.jsx';
import SetUpWeatherRources from './src/weatherlocation/setUpWeatherResources.jsx';
import GraphComponent from './src/Graph/graphComponent.jsx';

import Home from './src/home/home.jsx'; 
export default () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path='/' component={LoginComponent}/>
				<Route exact path='/dashboard' component={DashboardComponent}/>
				<Route exact path="/basic-information" component={BasicAccountRegistartion}/>
				<Route exact path="/primary-location-setting" component={WeatherLocationSetting}/>
				<Route exact path="/secondary-location-setting" component={AddSecondaryLocation}/>
				<Route exact path="/third-location-setting" component={AddAnotherSecondaryLocation}/>
				<Route exact path="/registration-and-ownership" component={RegistrationAndOwnership}/>
				<Route exact path="/unique-identification-number" component={UIN}/>
				<Route exact path="/forecast" component={Forecast}/>
				<Route exact path="/data-variable" component={WeatherDataVariables}/>
				<Route exact path="/weather-resources" component={SetUpWeatherRources}/>
				<Route exact path="/graph" component={GraphComponent}/>

				<Route exact path="/home" component={Home}/>	
			</Switch>
		</BrowserRouter>
	)
}
