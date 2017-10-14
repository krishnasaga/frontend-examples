var express = require("express");
var request = require("request");
var compression = require('compression')

var app = express();

app.use(compression());

app.use('/apps/rx-flicker/',express.static("rx-flicker"));

app.get("/api", function(req, res) {
  console.log(req);
  request(
    `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=dfb37d5363efb5734c29b34888f396d5&text=${req.query.keyword}&format=json&nojsoncallback=1&safe_search=1&content_type=1&sort=relevance&per_page=5,extras=url_o`,
    (error, body) => {
      res.json(JSON.parse(body.body));
    }
  );
});

app.listen(process.env.PORT || 3000 );
