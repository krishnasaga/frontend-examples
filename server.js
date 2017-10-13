var express = require("express");
var request = require("request");


var app = express();

app.use(express.static("docs"));

app.get("/api", function(req, res) {
  console.log(req);
  request(
    `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=dfb37d5363efb5734c29b34888f396d5&text=${req.query.keyword}&format=json&nojsoncallback=1&per_page=5`,
    (error, body) => {
      res.json(JSON.parse(body.body));
    }
  );
});

app.listen(process.env.PORT);
