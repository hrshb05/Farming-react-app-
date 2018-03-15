import React from 'react';
import {render} from 'react-dom';
import {Col, Button} from 'reactstrap';
import { CloudyIcon, cloudySlideIcon, partyCloudy, cloudyRain, cloudy, sunny, mostlySunny, 
        temprature, rainIcon, sunRadiationIcon, humidityIcon, windspeedIcon } from '../constant.jsx';

import { StickyTable, Row, Cell } from 'react-sticky-table';
import 'react-sticky-table/dist/react-sticky-table.css';

{/*import { BarChart, Bar, Brush, CartesianGrid, ReferenceLine, ReferenceDot, XAxis, YAxis, Tooltip, Legend, ErrorBar, LabelList } from 'recharts';
import { scaleOrdinal, schemeCategory10 } from 'd3-scale';*/}

class WeatherGraphCompomnent extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const headerArray = ['current',' ','1','2','3', '4', '5', '6', '7', '8', '9', '10', '11'];
    const createHeader = headerArray.map((list) => <Cell className="sticky-header-design">{list}</Cell>);
    const people = ['1','2','3', '4', '5', '6', '7', '8', '9', '10', '11'];
    this.state = { people };
    return (
      <div>
        {/*<BarChart width={150} height={40} data={data}>
                 <Bar dataKey='uv' fill='#8884d8'/>
               </BarChart>*/}
      </div>
    );
  }

}

export default WeatherGraphCompomnent;