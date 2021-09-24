const request = require("request");

const forecast = (lat, lng, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=91e2d276a557cb181823697419cbe7e5&query=${lng},${lat}&units=f`;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather service.", undefined);
    } else if (body.error) {
      callback(body.error.info, undefined);
    } else {
      callback(undefined, {
        // location: `${body.location.name}, ${body.location.region}, ${body.location.country}`,
        answer: `${body.current.weather_descriptions[0]}. it is currently ${body.current.temperature} out, it fells like ${body.current.feelslike} `,
      });
    }
  });
};

module.exports = forecast;
