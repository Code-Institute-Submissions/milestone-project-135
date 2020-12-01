/*jshint multistr: true */

function initMap() {
    var locations = [
    {
        info:
        '<strong>Manchester Thunder</strong>\
            <a href="https://www.manchesterthunder.co.uk" target="_blank">View team website</a>',
        lat: 53.483959,
        long: -2.244644,
    },
    {
        info:
        '<strong>Bath</strong>\
            <a href="https://www.teambath.com/sport/netball/" target="_blank">View team website</a>',
        lat: 51.380001,
        long: -2.360000,
    },
    {
        info:
        '<strong>London Pulse</strong><br>\
            <a href="https://londonpulsenetball.com/" target="_blank">View team website</a>',
        lat: 51.509865,
        long: -0.118092,
    },
    {
        info:
        '<strong>Saracens Mavericks</strong><br>\
            <a href="https://www.mavericksnetball.co.uk/" target="_blank">View team website</a>',
        lat: 51.7634,
        long: -0.22419,
    },
        {
        info:
        '<strong>Strathclyde Sirens</strong><br>\
            <a href="https://sirensnetball.com/" target="_blank">View team website</a>',
        lat: 55.860916,
        long: -4.251433,
    },
        {
        info:
        '<strong>Loughborough Lightning</strong><br>\
            <a href="https://www.lboro.ac.uk/sport/performance/lightning/netball/" target="_blank">View team website</a>',
        lat: 52.7721,
        long: -1.2097,
    },
        {
        info:
        '<strong>Wasps Netball</strong><br>\
            <a href="https://www.waspsnetball.co.uk/" target="_blank">View team website</a>',
        lat: 52.408054,
        long: -1.510556,
    },
        {
        info:
        '<strong>Surrey Storm</strong><br>\
            <a href="https://www.surreystormnetball.co.uk/" target="_blank">View team website</a>',
        lat: 51.215485,
        long: 0.631027,
    },
        {
        info:
        '<strong>Severn Stars</strong><br>\
            <a href="https://www.severnstars.co.uk/" target="_blank">View team website. Note Severn Stars also play in Gloucester.</a>',
        lat: 52.192001,
        long: -2.220000,
    },
        {
        info:
        '<strong>Celtic Dragons</strong><br>\
        <a href="http://www.celticdragonsnetball.com/" target="_blank">View team website.</a>',
        lat: 51.481583,
        long: -3.179090,
    }
];
    
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 5.5,
    center: new google.maps.LatLng(54.403465, -1.732618),
    mapTypeId: google.maps.MapTypeId.ROADMAP,
  });

  var infowindow = new google.maps.InfoWindow({});

  var marker, i;

  for (i = 0; i < locations.length; i++) {
    marker = new google.maps.Marker({
      position: new google.maps.LatLng(locations[i].lat, locations[i].long, i),
      map: map,
    });

    google.maps.event.addListener(
      marker,
      'click',
      (function (marker, i) {
        return function () {
          infowindow.setContent(locations[i].info);
          infowindow.open(map, marker);
        };
      })(marker, i)
    );
  }
}

