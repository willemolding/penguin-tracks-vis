var po = org.polymaps;

var map = po.map()
    .container(document.getElementById("map").appendChild(po.svg("svg")))
    .center({lat: -43.287965, lon: 147.575580})
    .zoom(11)
    .add(po.interact());


map.add(po.geoJson()
    .url("tracks.json"));

  /* Display compass control. */
  map.add(po.compass());


// var script = document.createElement("script");
// script.setAttribute("type", "text/javascript");
// script.setAttribute("src", "http://dev.virtualearth.net"
//     + "/REST/V1/Imagery/Metadata/AerialWithLabels"
//     + "?key=AmT-ZC3HPevQq5IBJ7v8qiDUxrojNaqbW1zBsKF0oMNEs53p7Nk5RlAuAmwSG7bg"
//     + "&jsonp=callback");
// document.body.appendChild(script);

// function callback(data) {

//   /* Display each resource as an image layer. */
//   var resourceSets = data.resourceSets;
//   for (var i = 0; i < resourceSets.length; i++) {
//     var resources = data.resourceSets[i].resources;
//     for (var j = 0; j < resources.length; j++) {
//       var resource = resources[j];
//       map.add(po.image()
//           .url(template(resource.imageUrl, resource.imageUrlSubdomains)))
//           .tileSize({x: resource.imageWidth, y: resource.imageHeight});
//     }
//   }


//   /* Display compass control. */
//   map.add(po.compass()
//       .pan("none"));

// }

// /** Returns a Bing URL template given a string and a list of subdomains. */
// function template(url, subdomains) {
//   var n = subdomains.length,
//       salt = ~~(Math.random() * n); // per-session salt

//   /** Returns the given coordinate formatted as a 'quadkey'. */
//   function quad(column, row, zoom) {
//     var key = "";
//     for (var i = 1; i <= zoom; i++) {
//       key += (((row >> zoom - i) & 1) << 1) | ((column >> zoom - i) & 1);
//     }
//     return key;
//   }

//   return function(c) {
//     var quadKey = quad(c.column, c.row, c.zoom),
//         server = Math.abs(salt + c.column + c.row + c.zoom) % n;
//     return url
//         .replace("{quadkey}", quadKey)
//         .replace("{subdomain}", subdomains[server]);
//   };
// }
