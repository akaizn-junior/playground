import React from 'react';
// data
import * as service from './service';
//style
import './weatherCard.scss';

export default class WeatherCard extends React.Component {
  constructor(props) {
    super(props);
    //create a state
    this.state = {
      hasError: false,
      data: {
        currently: { summary: '' },
        timezone: ''
      }
    };
  }

  componentDidMount() {
    service.getWeather(this, this.props.latitude, this.props.longitude);
  }

  reloadState() {
    service.getWeather(this, this.props.latitude, this.props.longitude);
  }

  render() {
    return (
      <div className="card">
        <div className="title">
          <span className="brand">Weatheroo</span>
          <p>Current weather:</p>
        </div>
        <div className="content">
          <p className="city">
            { this.state.data.timezone.split('/')[1] }
          </p>
          <p className="time">
            { this.state.data.day }
            <span> { this.state.data.time }</span>
          </p>
          <p className="summary">
            { this.state.data.currently.summary }
          </p>
          <p className="temperature">
            { Math.floor(this.state.data.currently.temperature) }
            <span>F</span>
          </p>
          <p className="humidity">
            <span>Humidity</span>
            { `${Math.floor(this.state.data.currently.humidity * 100)}%` }
          </p>
          <p className="wind">
            <span>Wind</span>
            { Math.floor(this.state.data.currently.windGust) }
            <span>mph</span>
          </p>
          <p className="visibility">
            <span>Visibility</span>
            { Math.floor(this.state.data.currently.visibility) }
            <span>mph</span>
          </p>
        </div>
        <div className="footer">
          <p className="reload-btn" onClick={() => this.reloadState()}>&nbsp;</p>
        </div>
      </div>
    );
  }
}
