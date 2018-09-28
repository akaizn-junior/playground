import axios from 'axios';
// local
import config from '../../../config';

export function getWeather(component, lat, long) {
  axios.post(`${config.proxyBaseUrl}/api/darksky/forecast`, {
    lat,
    long
  })
    .then(result => {
      // console.log(result.data);
      const data = result.data;
      //grab the current time and day
      const time = new Date(1000 * result.data.currently.time);
      data.time = time.toLocaleTimeString();
      data.day = time.toDateString();
      //update the state data
      component.setState({ data });
      return result;
    })
    .catch(error => {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log('Error');
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.log('Bad request');
        console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Something bad happened: ', error.message);
      }
      console.log(error.config);
    });
}
