import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/debounceTime";
import "rxjs/add/operator/mergeMap";
import "rxjs/add/observable/of";
import "rxjs/add/observable/dom/ajax";
import "rxjs/add/operator/catch";
import "rxjs/add/observable/from";
import "rxjs/add/observable/fromEvent";

const input = document.getElementById("search");
const outputElement = document.getElementById("output");
const imageElement = document.getElementById("main-image");
const backgroundImge = document.getElementById('background-image');

const imageLoads$ = Observable.fromEvent(input, "keyup")
  .debounceTime(10)
  .mergeMap(event =>
    Observable.ajax({
      url: `/api?keyword=${event.target.value}`,
      responseType: "json"
    }).catch(err => (err.xhr ? Observable.of(err) : Observable.of(".___.")))
  );


  imageLoads$.subscribe(data => {
    let photos = data.response.photos;
    let output = {};
    if (photos && photos.photo && photos.photo.length > 0) {
      output = photos.photo[0];
    }
    imageElement.style.backgroundImage = 
    `url('http://farm${output.farm}.static.flickr.com/${output.server}/${output.id}_${output.secret}.jpg')`;
    document.getElementById('title').innerText = output.title || 'Type what\'s on your mind';
  });

  imageLoads$.subscribe(data => {
    let photos = data.response.photos;
    let output = {};
    if (photos && photos.photo && photos.photo.length > 0) {
      output = photos.photo[0];
    }
    backgroundImge.style.backgroundImage = 
    `url('http://farm${output.farm}.static.flickr.com/${output.server}/${output.id}_${output.secret}.jpg')`;
  });

