const request = require('request');

module.exports = (req,res) => {
  request('https://ssd-api.jpl.nasa.gov/cad.api?des=433&date-min=1900-01-01&date-max=2100-01-01&dist-max=0.2',
  (error,body)=> {
    res.send(JSON.parse(body.body));
  });
};
