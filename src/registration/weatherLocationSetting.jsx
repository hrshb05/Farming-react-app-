import React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router-dom';
import Countries from 'react-select-country';
import axios from 'axios';
import { Alert } from 'reactstrap';
import Notifications, { notify } from 'react-notify-toast';
import { BASE_URL } from '../constant.jsx';
import { withRouter } from "react-router-dom";
import OverlayLoader from 'react-loading-indicator-overlay/lib/OverlayLoader'


class WeatherLocationSetting extends React.Component {
    constructor(props) {
        super(props);
        this.state =
            {
                values: [],
                addressLine1: '',
                addressLine2: '',
                addressLine3: '',
                city: '',
                country: '',
                countryCode: '',
                latitude: '',
                locationName: '',
                locationType: '',
                longitude: '',
                primaryLocation: null,
                zipcode: '',
                arrayList: [],
            }
        this.onSelectCountry = this.onSelectCountry.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleWeather = this.handleWeather.bind(this);
        this.getLatLong = this.getLatLong.bind(this);
        this.getLatitudeLongitude = this.getLatitudeLongitude.bind(this);
        this.anotherLocationes = this.anotherLocationes.bind(this);

    }
    onSelectCountry(event) {

        this.state.selectedCountry = {
            id: event.target.value,
            name: event.target.options[event.target.selectedIndex].text
        }
        this.state.selectedCountry = this.refs.country.selected; // {value,name} 
    }
    handleInputChange(event) {
        const data = event.target;
        const value = data.value;
        const name = data.name;
        this.setState({
            [name]: value,
        });
    }
    getLatLong(event) {
        console.log('value entered', this.state.addressLine1);
        this.getLatitudeLongitude();
    }


    componentDidMount() {
        this.fetchData();
    }

    fetchData() {

    }

    componentWillUpdate(nextProps, nextState) {
        localStorage.setItem('arrayList', JSON.stringify(nextState.arrayList));
    }

    anotherLocation() {
        if (this.state.longitude != '' || this.state.latitude != '' || this.state.countryCode != '') {
            console.log("this.state first", this.state.arrayList);
            if (this.state.arrayList.length == 0) {
                var data = {
                    "longitude": this.state.longitude,
                    "latitude": this.state.latitude,
                    "countryCode": this.state.countryCode,
                    "addressLine1": this.state.addressLine1,
                    "addressLine2": this.state.addressLine2,
                    "addressLine3": this.state.addressLine3,
                    "city": this.state.city,
                    "country": this.state.country,
                    "locationName": this.state.locationName,
                    "locationType": this.state.locationType,
                    "primaryLocation": true,
                    "zipcode": this.state.zipcode,
                }
            } else {
                var data = {
                    "longitude": this.state.longitude,
                    "latitude": this.state.latitude,
                    "countryCode": this.state.countryCode,
                    "addressLine1": this.state.addressLine1,
                    "addressLine2": this.state.addressLine2,
                    "addressLine3": this.state.addressLine3,
                    "city": this.state.city,
                    "country": this.state.country,
                    "locationName": this.state.locationName,
                    "locationType": this.state.locationType,
                    "primaryLocation": false,
                    "zipcode": this.state.zipcode,
                }
            }

            this.state.arrayList.push(data);
            this.setState(prevState => ({ values: [...prevState.values, ''] }));
            this.anotherLocationes();
            console.log("this.state", this.state.arrayList);
        } else {
            notify.show('All Fields Required', 'error');
        }
    }
    anotherLocationes() {
        this.setState({
            addressLine1: '',
            addressLine2: '',
            addressLine3: '',
            city: '',
            country: '',
            countryCode: '',
            latitude: '',
            locationName: '',
            locationType: '',
            longitude: '',
            primaryLocation: null,
            zipcode: '',
        });

    }
    addLocation() {
        return this.state.arrayList.map((el, i) =>
            <div key={i} style={{ marginTop: '10px', padding: '15px' }}>
                <div type="text" value={el || ''} onChange={this.handleChange.bind(this, i)}>
                    <div>
                        <p className="font-weight-bold">
                            {i === 0 ?
                                '*PL - Primary Location'
                                :
                                i + ' SL - Secondary Location '
                            }
                        </p>
                        <p style={{ margin: '10px 0' }}>Yderbjerg vej 123</p>
                        <p style={{ marginBottom: '10px' }}>DK-3213 Varoise</p>
                    </div>
                    <div>
                        <div className="fl no-float-mobile">Country Code</div>
                        <input className="weather-address1 weather-mobile-input text-right" value={el.countryCode} onChange={this.handleInputChange} type="text" placeholder="" name="countryCode" />
                        <div className="clearfix"></div>
                    </div>
                    <div>
                        <div className="fl no-float-mobile">Longitude</div>
                        <input className="weather-address2 weather-mobile-input text-right" value={el.longitude} onChange={this.handleInputChange} type="text" placeholder="xxxxx" name="longitude" />
                        <div className="clearfix"></div>
                    </div>
                    <div>
                        <div className="fl no-float-mobile">Latitude</div>
                        <input className="weather-address3 weather-mobile-input text-right" value="126.432" type="text" placeholder="xxxxx" value={el.latitude} onChange={this.handleInputChange} name="latitude" style={{ marginBottom: 0 }} />
                        <input type="button" value="Edit" className="save-location-btn fr margin-top-mobile" style={{ width: 'auto' }} />
                        <div className="clearfix"></div>
                    </div>
                    <div className="clearfix"></div>
                </div>
            </div>
        )
    }
    handleChange(i, event) {
        let values = [...this.state.values];
        values[i] = event.target.value;
        this.setState({ values });
    }

    //rohit

    handleWeather(event) {
        let authData = JSON.parse(localStorage.getItem('auth'));
        let userData = JSON.parse(localStorage.getItem('userData'));        
        event.preventDefault();
        console.log('auth data', authData);

        axios.post(BASE_URL + 'auth-module-2/oauth/token?grant_type=refresh_token&refresh_token='+authData.refresh_token)
        .then((refreshAuth) => {
            if(refreshAuth.status === 200){
                localStorage.setItem('auth', JSON.stringify(refreshAuth.data));                
                // hit API
                if (this.state.addressLine1 != '' && this.state.addressLine2 != '' && this.state.addressLine3 != '' && this.state.city != '' && this.state.country != '' &&
            this.state.countryCode != '' && this.state.latitude != '' && this.state.locationName != '' && this.state.locationType != '' && this.state.longitude != '' && this.state.username != ''
            && this.state.zipcode != '') {
            this.setState({
                showLoader: true
            })
            axios.post(BASE_URL + 'core-services/admin/farm?username='+userData+'&access_token=' + refreshAuth.data.access_token, [this.state])
                .then((response) => {
                    if (response.status == 200) {
                        console.log("response", response)
                        this.props.history.push('/unique-identification-number');
                        this.setState({
                            showLoader: false
                        })
                    } else {
                        notify.show(response.data.message, 'error');
                    }
                })
                .catch((error) => {
                    this.setState({ showLoader: false });
                    notify.show('Invalid Details', 'error');
                });
        } else {
            notify.show('All Fields Required', 'error');
        }
                //hit api end
            }else{
                notify.show('Session expire, Please login again.', 'error');
                localStorage.clear();
                this.props.history.push('/');
            }
        })
    }


    getLatitudeLongitude() {
        const fullAddress = this.state.addressLine1 + this.state.addressLine2 + this.state.addressLine3;
        console.log(fullAddress);
        const geocoder = new google.maps.Geocoder();
        if (geocoder) {
            geocoder.geocode({
                'address': fullAddress
            }, function (results, status) {
                console.log('status', status);
                if (status == 'OK') {
                    if (results.length === 1) {
                        console.log('google result', results[0].geometry.location.lat());
                        const lat = results[0].geometry.location.lat();
                        const long = results[0].geometry.location.lng();

                        document.getElementsByName('latitude').value = lat;
                        document.getElementsByName('longitude').value = long;
                    }
                }
            });
        }

    }

    render() {

        return (
            <div className="container-fluid">
                {this.state.showLoader &&
                    <OverlayLoader
                        color={'red'}
                        loader="ScaleLoader"
                        text="Loading... Please wait!"
                        active={true}
                        backgroundColor={'black'}
                        opacity=".1"  >
                    </OverlayLoader>
                }
                <div className="row justify-content-sm-center">
                    <div className="col-xs-12 col-sm-8 sign-up-wrapper">
                        <div>
                            <p className="text" style={{ marginBottom: 0 }}>
                                Weather Location Settings
                            </p>
                        </div>
                        <div>
                            <p>
                                * Weather information to be used for planning activities
                            </p>
                            <p className="font-weight-bold">
                                * PL - Primary Location
                            </p>
                        </div>
                        <div style={{ marginTop: '15px', paddingTop: 0 }} className="formDesign">

                            <form onSubmit={this.handleWeather} className="form" style={{ padding: '20px', margin: 0 }}>

                                <div className=" child-form-weather" style={{ marginTop: '10px', padding: '15px' }}>
                                    {this.addLocation()}
                                </div>

                                <div className="col-sm-8 fl code-city" style={{ marginTop: '10px', padding: '15px' }}>
                                    <select value={this.state.locationType} className="name-email-phone" name="locationType" onChange={this.handleInputChange}>
                                        <option value="Farm" name='Farm'>Farm</option>
                                        <option value="Work" name='Work'>Work</option>
                                        <option value="Home" name='Home'>Home</option>
                                        <option value="Farm and Work" name='Farm and Work'>Farm and work</option>
                                        <option value="Farm and Home" name='Farm and Home'>Farm and home</option>
                                        <option value="Work and Home" name='Work and Home'>Work and home</option>
                                        <option value="Farm,work and Home" name='Farm,work and Home'>Farm,work and home</option>
                                    </select>
                                </div>
                                <div >
                                    <label className="input-title" >Name of Farm / Work /Home /Other<span className="astrick">*</span></label>
                                    <input className="name-email-phone" value={this.state.locationName} type="text" placeholder="Name of Entity" name="locationName" onChange={this.handleInputChange} />
                                </div>
                                <div>
                                    <div>
                                        <label className="input-title" >Address of Farm / Work /Home /Other<span className="astrick">*</span></label>
                                    </div>
                                    <div className="clearfix"></div>
                                    <div>
                                        <input className="name-email-phone" value={this.state.addressLine1} onKeyPress={this.getLatLong} style={{ maxWidth: '450px' }} type="text" placeholder="Address 1" name="addressLine1" onChange={this.handleInputChange} />
                                    </div>
                                    <div className="clearfix"></div>
                                    <div>
                                        <input className="name-email-phone" value={this.state.addressLine2} onKeyPress={this.getLatLong} style={{ maxWidth: '450px' }} type="text" placeholder="Address 2" name="addressLine2" onChange={this.handleInputChange} />
                                    </div>
                                    <div className="clearfix"></div>
                                    <div>
                                        <input className="name-email-phone" value={this.state.addressLine3} onKeyPress={this.getLatLong} style={{ maxWidth: '450px' }} type="text" placeholder="Address 3" name="addressLine3" onChange={this.handleInputChange} />
                                    </div>
                                    <div className="clearfix"></div>
                                </div>
                                <div className="col-sm-6 code-city " >
                                    <div className="col-sm-6 fl code-city">
                                        <label className="input-title" >Zip/Postal Code<span className="astrick">*</span></label>
                                        <input className="name-email-phone" value={this.state.zipcode} type="text" placeholder="Enter Zip/ Postal Code" name="zipcode" onChange={this.handleInputChange} />
                                        <div className="clearfix"></div>
                                    </div>

                                    <div className="col-sm-6 fl no-padding-mobile">
                                        <label className="input-title" >City<span className="astrick">*</span></label>
                                        <input className="name-email-phone" value={this.state.city} type="text" placeholder="Name of city" name="city" onChange={this.handleInputChange} />
                                        <div className="clearfix"></div>
                                    </div>
                                    <div className="clearfix"></div>
                                    <div className="col-sm-6 fl code-city">
                                        <label className="input-title" >Country<span className="astrick">*</span></label>
                                    </div>
                                    <div className="col-sm-6 fl code-city">
                                        <select className="name-email-phone" value={this.state.country} name="country" onChange={this.handleInputChange} >
                                            <option value="">  Please Select </option>
                                            <option value="Afghanistan"> Afghanistan </option>
                                            <option value="Åland Islands"> Åland Islands </option>
                                            <option value="Albania"> Albania </option>
                                            <option value="Algeria"> Algeria </option>
                                            <option value="American Samoa"> American Samoa </option>
                                            <option value="Andorra"> Andorra </option>
                                            <option value="Angola"> Angola </option>
                                            <option value="Anguilla"> Anguilla </option>
                                            <option value="Antarctica"> Antarctica </option>
                                            <option value="Antigua and Barbuda"> Antigua and Barbuda </option>
                                            <option value="Argentina"> Argentina </option>
                                            <option value="Armenia"> Armenia </option>
                                            <option value="Aruba"> Aruba </option>
                                            <option value="Australia"> Australia </option>
                                            <option value="Austria"> Austria </option>
                                            <option value="Azerbaijan"> Azerbaijan </option>
                                            <option value="Bahamas"> Bahamas </option>
                                            <option value="Bahrain"> Bahrain </option>
                                            <option value="Bangladesh"> Bangladesh </option>
                                            <option value="Barbados"> Barbados </option>
                                            <option value="Belarus"> Belarus </option>
                                            <option value="Belgium"> Belgium </option>
                                            <option value="Belize"> Belize </option>
                                            <option value="Benin"> Benin </option>
                                            <option value="Bermuda"> Bermuda </option>
                                            <option value="Bhutan"> Bhutan </option>
                                            <option value="Bolivia, Plurinational State of"> Bolivia, Plurinational State of </option>
                                            <option value="Bonaire, Sint Eustatius and Saba"> Bonaire, Sint Eustatius and Saba </option>
                                            <option value="Bosnia and Herzegovina"> Bosnia and Herzegovina </option>
                                            <option value="Botswana"> Botswana </option>
                                            <option value="Bouvet Island"> Bouvet Island </option>
                                            <option value="Brazil"> Brazil </option>
                                            <option value="British Indian Ocean Territory"> British Indian Ocean Territory </option>
                                            <option value="Brunei Darussalam"> Brunei Darussalam </option>
                                            <option value="Bulgaria"> Bulgaria </option>
                                            <option value="Burkina Faso"> Burkina Faso </option>
                                            <option value="Burundi"> Burundi </option>
                                            <option value="Cambodia"> Cambodia </option>
                                            <option value="Cameroon"> Cameroon </option>
                                            <option value="Canada"> Canada </option>
                                            <option value="Cape Verde"> Cape Verde </option>
                                            <option value="Cayman Islands"> Cayman Islands </option>
                                            <option value="Central African Republic"> Central African Republic </option>
                                            <option value="Chad"> Chad </option>
                                            <option value="Chile"> Chile </option>
                                            <option value="China"> China </option>
                                            <option value="Christmas Island"> Christmas Island </option>
                                            <option value="Cocos (Keeling) Islands"> Cocos (Keeling) Islands </option>
                                            <option value="Colombia"> Colombia </option>
                                            <option value="Comoros"> Comoros </option>
                                            <option value="Congo"> Congo </option>
                                            <option value="Congo, the Democratic Republic of the"> Congo, the Democratic Republic of the </option>
                                            <option value="Cook Islands"> Cook Islands </option>
                                            <option value="Costa Rica"> Costa Rica </option>
                                            <option value="Côte d'Ivoire"> Côte d'Ivoire </option>
                                            <option value="Croatia"> Croatia </option>
                                            <option value="Cuba"> Cuba </option>
                                            <option value="Curaçao"> Curaçao </option>
                                            <option value="Cyprus"> Cyprus </option>
                                            <option value="Czech Republic"> Czech Republic </option>
                                            <option value="Denmark"> Denmark </option>
                                            <option value="Djibouti"> Djibouti </option>
                                            <option value="Dominica"> Dominica </option>
                                            <option value="Dominican Republic"> Dominican Republic </option>
                                            <option value="Ecuador"> Ecuador </option>
                                            <option value="Egypt"> Egypt </option>
                                            <option value="El Salvador"> El Salvador </option>
                                            <option value="Equatorial Guinea"> Equatorial Guinea </option>
                                            <option value="Eritrea"> Eritrea </option>
                                            <option value="Estonia"> Estonia </option>
                                            <option value="Ethiopia"> Ethiopia </option>
                                            <option value="Falkland Islands (Malvinas)"> Falkland Islands (Malvinas) </option>
                                            <option value="Faroe Islands"> Faroe Islands </option>
                                            <option value="Fiji"> Fiji </option>
                                            <option value="Finland"> Finland </option>
                                            <option value="France"> France </option>
                                            <option value="French Guiana"> French Guiana </option>
                                            <option value="French Polynesia"> French Polynesia </option>
                                            <option value="French Southern Territories"> French Southern Territories </option>
                                            <option value="Gabon"> Gabon </option>
                                            <option value="Gambia"> Gambia </option>
                                            <option value="Georgia"> Georgia </option>
                                            <option value="Germany"> Germany </option>
                                            <option value="Ghana"> Ghana </option>
                                            <option value="Gibraltar"> Gibraltar </option>
                                            <option value="Greece"> Greece </option>
                                            <option value="Greenland"> Greenland </option>
                                            <option value="Grenada"> Grenada </option>
                                            <option value="Guadeloupe"> Guadeloupe </option>
                                            <option value="Guam"> Guam </option>
                                            <option value="Guatemala"> Guatemala </option>
                                            <option value="Guernsey"> Guernsey </option>
                                            <option value="Guinea"> Guinea </option>
                                            <option value="Guinea-Bissau"> Guinea-Bissau </option>
                                            <option value="Guyana"> Guyana </option>
                                            <option value="Haiti"> Haiti </option>
                                            <option value="Heard Island and McDonald Islands"> Heard Island and McDonald Islands </option>
                                            <option value="Holy See (Vatican City State)"> Holy See (Vatican City State) </option>
                                            <option value="Honduras"> Honduras </option>
                                            <option value="Hong Kong"> Hong Kong </option>
                                            <option value="Hungary"> Hungary </option>
                                            <option value="Iceland"> Iceland </option>
                                            <option value="Iceland"> Iceland </option>
                                            <option value="Indonesia"> Indonesia </option>
                                            <option value="Iran, Islamic Republic of"> Iran, Islamic Republic of </option>
                                            <option value="Iraq"> Iraq </option>
                                            <option value="Ireland"> Ireland </option>
                                            <option value="Isle of Man"> Isle of Man </option>
                                            <option value="Italy"> Italy </option>
                                            <option value="Jamaica"> Jamaica </option>
                                            <option value="Japan"> Japan </option>
                                            <option value="Jersey"> Jersey </option>
                                            <option value="Jordan"> Jordan </option>
                                            <option value="Kazakhstan"> Kazakhstan </option>
                                            <option value="Kenya"> Kenya </option>
                                            <option value="Kiribati"> Kiribati </option>
                                            <option value="Korea, Democratic People's Republic of"> Korea, Democratic People's Republic of </option>
                                            <option value="Korea, Republic of "> Korea, Republic of </option>
                                            <option value="Kuwait"> Kuwait </option>
                                            <option value="Kyrgyzstan"> Kyrgyzstan </option>
                                            <option value="Lao People's Democratic Republic"> Lao People's Democratic Republic </option>
                                            <option value="Latvia"> Latvia </option>
                                            <option value="Lebanon"> Lebanon </option>
                                            <option value="Lesotho"> Lesotho </option>
                                            <option value="Liberia"> Liberia </option>
                                            <option value="Libya"> Libya </option>
                                            <option value="Liechtenstein"> Liechtenstein </option>
                                            <option value="Lithuania"> Lithuania </option>
                                            <option value="Luxembourg"> Luxembourg </option>
                                            <option value="Macao"> Macao </option>
                                            <option value="Macedonia, the former Yugoslav Republic of"> Macedonia, the former Yugoslav Republic of </option>
                                            <option value="Madagascar"> Madagascar </option>
                                            <option value="Malawi"> Malawi </option>
                                            <option value="Malaysia"> Malaysia </option>
                                            <option value="Maldives"> Maldives </option>
                                            <option value="Mali"> Mali </option>
                                            <option value="Malta"> Malta </option>
                                            <option value="Marshall Islands"> Marshall Islands </option>
                                            <option value="Martinique"> Martinique </option>
                                            <option value="Mauritania"> Mauritania </option>
                                            <option value="Mauritius"> Mauritius </option>
                                            <option value="Mayotte"> Mayotte </option>
                                            <option value="Mexico"> Mexico </option>
                                            <option value="Micronesia, Federated States of"> Micronesia, Federated States of </option>
                                            <option value="Moldova, Republic of"> Moldova, Republic of </option>
                                            <option value="Monaco"> Monaco </option>
                                            <option value="Mongolia"> Mongolia </option>
                                            <option value="Montenegro"> Montenegro </option>
                                            <option value="Montserrat"> Montserrat </option>
                                            <option value="Morocco"> Morocco </option>
                                            <option value="Mozambique"> Mozambique </option>
                                            <option value="Myanmar"> Myanmar </option>
                                            <option value="Namibia"> Namibia </option>
                                            <option value="Nauru"> Nauru </option>
                                            <option value="Nepal"> Nepal </option>
                                            <option value="Netherlands"> Netherlands </option>
                                            <option value="New Caledonia"> New Caledonia </option>
                                            <option value="New Zealand"> New Zealand </option>
                                            <option value="Nicaragua"> Nicaragua </option>
                                            <option value="Niger"> Niger </option>
                                            <option value="Nigeria"> Nigeria </option>
                                            <option value="Niue"> Niue </option>
                                            <option value="Norfolk Island"> Norfolk Island </option>
                                            <option value="Northern Mariana Islands"> Northern Mariana Islands </option>
                                            <option value="Norway"> Norway </option>
                                            <option value="Oman"> Oman </option>
                                            <option value="Pakistan"> Pakistan </option>
                                            <option value="Palau"> Palau </option>
                                            <option value="Palestinian Territory, Occupied"> Palestinian Territory, Occupied </option>
                                            <option value="Panama"> Panama </option>
                                            <option value="Papua New Guinea"> Papua New Guinea </option>
                                            <option value="Paraguay"> Paraguay </option>
                                            <option value="Peru"> Peru </option>
                                            <option value="Philippines"> Philippines </option>
                                            <option value="Pitcairn"> Pitcairn </option>
                                            <option value="Poland"> Poland </option>
                                            <option value="Portugal"> Portugal </option>
                                            <option value="Puerto Rico"> Puerto Rico </option>
                                            <option value="Qatar"> Qatar </option>
                                            <option value="Réunion"> Réunion </option>
                                            <option value="Romania"> Romania </option>
                                            <option value="Russian Federation"> Russian Federation </option>
                                            <option value="Rwanda"> Rwanda </option>
                                            <option value="Saint Barthélemy"> Saint Barthélemy </option>
                                            <option value="Saint Helena, Ascension and Tristan da Cunha"> Saint Helena, Ascension and Tristan da Cunha </option>
                                            <option value="Saint Kitts and Nevis"> Saint Kitts and Nevis </option>
                                            <option value="Saint Lucia"> Saint Lucia </option>
                                            <option value="Saint Martin (French part)"> Saint Martin (French part) </option>
                                            <option value="Saint Pierre and Miquelon"> Saint Pierre and Miquelon </option>
                                            <option value="Saint Vincent and the Grenadines"> Saint Vincent and the Grenadines </option>
                                            <option value="Samoa"> Samoa </option>
                                            <option value="San Marino"> San Marino </option>
                                            <option value="Sao Tome and Principe"> Sao Tome and Principe </option>
                                            <option value="Saudi Arabia"> Saudi Arabia </option>
                                            <option value="Senegal"> Senegal </option>
                                            <option value="Serbia"> Serbia </option>
                                            <option value="Seychelles"> Seychelles </option>
                                            <option value="Sierra Leone"> Sierra Leone </option>
                                            <option value="Singapore"> Singapore </option>
                                            <option value="Sint Maarten (Dutch part)"> Sint Maarten (Dutch part) </option>
                                            <option value="Slovakia"> Slovakia </option>
                                            <option value="Slovenia"> Slovenia </option>
                                            <option value="Solomon Islands"> Solomon Islands </option>
                                            <option value=" Somalia"> Somalia </option>
                                            <option value="South Africa"> South Africa </option>
                                            <option value="South Georgia and the South Sandwich Islands"> South Georgia and the South Sandwich Islands </option>
                                            <option value="South Sudan"> South Sudan </option>
                                            <option value="Spain"> Spain </option>
                                            <option value="Sri Lanka"> Sri Lanka </option>
                                            <option value="Sudan"> Sudan </option>
                                            <option value="Suriname"> Suriname </option>
                                            <option value="Svalbard and Jan Mayen"> Svalbard and Jan Mayen </option>
                                            <option value="Swaziland"> Swaziland </option>
                                            <option value="Sweden"> Sweden </option>
                                            <option value="Switzerland"> Switzerland </option>
                                            <option value="Syrian Arab Republic"> Syrian Arab Republic </option>
                                            <option value="Taiwan, Province of China"> Taiwan, Province of China </option>
                                            <option value="Tajikistan"> Tajikistan </option>
                                            <option value="Tanzania, United Republic of"> Tanzania, United Republic of </option>
                                            <option value="Thailand"> Thailand </option>
                                            <option value="Timor-Leste"> Timor-Leste </option>
                                            <option value="Togo"> Togo </option>
                                            <option value="Tokelau"> Tokelau </option>
                                            <option value="Tonga"> Tonga </option>
                                            <option value="Trinidad and Tobago"> Trinidad and Tobago </option>
                                            <option value="Tunisia"> Tunisia </option>
                                            <option value="Turkey"> Turkey </option>
                                            <option value="Turkmenistan"> Turkmenistan </option>
                                            <option value="Turks and Caicos Islands"> Turks and Caicos Islands </option>
                                            <option value="Tuvalu "> Tuvalu </option>
                                            <option value="Uganda"> Uganda </option>
                                            <option value="Ukraine"> Ukraine </option>
                                            <option value="United Arab Emirates"> United Arab Emirates </option>
                                            <option value="United Kingdom"> United Kingdom </option>
                                            <option value="United States"> United States </option>
                                            <option value="United States Minor Outlying Islands"> United States Minor Outlying Islands </option>
                                            <option value="Uruguay"> Uruguay </option>
                                            <option value="Uzbekistan"> Uzbekistan </option>
                                            <option value="Vanuatu"> Vanuatu </option>
                                            <option value="Venezuela, Bolivarian Republic of"> Venezuela, Bolivarian Republic of </option>
                                            <option value="Viet Nam"> Viet Nam </option>
                                            <option value="Virgin Islands, British"> Virgin Islands, British </option>
                                            <option value="Virgin Islands, U.S."> Virgin Islands, U.S. </option>
                                            <option value="Wallis and Futuna"> Wallis and Futuna </option>
                                            <option value="Western Sahara"> Western Sahara </option>
                                            <option value="Yemen"> Yemen </option>
                                            <option value="Zambia"> Zambia </option>
                                            <option value="Zimbabwe"> Zimbabwe </option>
                                        </select>
                                    </div>

                                    <div className="clearfix"></div>
                                </div>
                                <div className="clearfix"></div>
                                <div className=" child-form-weather" style={{ margin: 0, padding: '15px' }}>
                                    <div className="fl">
                                        <p>
                                            Location Summary For Primary Location - PL
                                        </p>
                                    </div>
                                    <div className="clearfix"></div>
                                    <div className="fl">
                                        <p>
                                            {this.state.addressLine1}
                                        </p>
                                    </div>
                                    <div className="clearfix"></div>
                                    <div className="fl">
                                        <p>
                                            {this.state.countryCode}-{this.state.zipcode} {this.state.city}
                                        </p>
                                    </div>
                                    <div className="clearfix"></div>
                                    <div>
                                        <div>
                                            <div className="fl no-float-mobile">Country Code</div>
                                            <input className="weather-address1 weather-mobile-input text-right" value={this.state.countryCode} type="text" placeholder="" name="countryCode" onChange={this.handleInputChange} />
                                            <div className="clearfix"></div>
                                        </div>
                                        <div>

                                            <div className="fl no-float-mobile">Longitude</div>
                                            <input className="weather-address2 weather-mobile-input text-right" type="text" placeholder="xxxxx" name="longitude" value={this.state.longitude} onChange={this.handleInputChange} />
                                            <div className="clearfix"></div>
                                        </div>
                                        <div>

                                            <div className="fl no-float-mobile">Latitude</div>
                                            <input className="weather-address3 weather-mobile-input text-right" type="text" placeholder="xxxxx" name="latitude" value={this.state.latitude} style={{ marginBottom: 0 }} onChange={this.handleInputChange} />

                                            <input type="button" value="Save Location" className="save-location-btn fr" style={{ width: 'auto' }} />
                                            <div className="clearfix"></div>
                                        </div>
                                        <div className="clearfix"></div>
                                    </div>
                                </div>
                                <div>
                                    <input type="button" value="+ Add another Location" className="another-location-btn" onClick={this.anotherLocation.bind(this)} />
                                </div>
                                <div className="text-right" style={{ borderTop: '1px solid #d2d2d2', paddingTop: '15px' }}>
                                    <input type="button" value="Exit" className="registration-btn" />
                                    <input type="button" value="Back" className="registration-btn" />
                                    <input type="button" value="Save" className="registration-btn" />
                                    <input type="submit" value="Save & Continue" className="login-btn margin-top-mobile" />
                                </div>
                                <Notifications />
                            </form>
                        </div>
                    </div>
                    <div className="clearfix"></div>
                </div>
            </div>
        );
    }
}
export default withRouter(WeatherLocationSetting);