function initMap() {
  var manchester = {
    info:
      '<strong>Manchester Thunder</strong>\
    	<a href="https://www.manchesterthunder.co.uk" target="_blank">View team website</a>',
    lat: 53.483959,
    long: -2.244644,
  }

  var bath = {
    info:
      '<strong>Bath</strong>\
    	<a href="https://www.teambath.com/sport/netball/" target="_blank">View team website</a>',
    lat: 51.380001,
    long: -2.360000,
  }

  var london = {
    info:
      '<strong>London Pulse</strong><br>\
    	<a href="https://londonpulsenetball.com/" target="_blank">View team website</a>',
    lat: 51.509865,
    long: -0.118092,
  }

var hatfield = {
    info:
      '<strong>Saracens Mavericks</strong><br>\
    	<a href="https://www.mavericksnetball.co.uk/" target="_blank">View team website</a>',
    lat: 51.7634,
    long: -0.22419,
  }

  var locations = [
    [manchester.info, manchester.lat, manchester.long, 0],
    [bath.info, bath.lat, bath.long, 1],
    [london.info, london.lat, london.long, 2],
    [hatfield.info, hatfield.lat, hatfield.long, 3],
  ]

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 6,
    center: new google.maps.LatLng(52.950001, -1.150000),
    mapTypeId: google.maps.MapTypeId.ROADMAP,
  })

  var infowindow = new google.maps.InfoWindow({})

  var marker, i

  for (i = 0; i < locations.length; i++) {
    marker = new google.maps.Marker({
      position: new google.maps.LatLng(locations[i][1], locations[i][2], locations[i][3]),
      map: map,
    })

    google.maps.event.addListener(
      marker,
      'click',
      (function (marker, i) {
        return function () {
          infowindow.setContent(locations[i][0])
          infowindow.open(map, marker)
        }
      })(marker, i)
    )
  }
}



/*function initMap() {
  var manchester = {
    info:
      '<strong>Manchester Thunder</strong>\
    	<a href="https://www.manchesterthunder.co.uk/">View team website</a>',
    lat: 53.483959,
    long: -2.244644,
  }

var bath = {
    info:
      '<strong>Bath</strong>\
    	<a href="https://www.teambath.com/sport/netball/">View team website</a>',
    lat: 51.380001,
    long: -2.360000,
  }

var london = {
    info:
      '<strong>London Pulse</strong>\
    	<a href="https://londonpulsenetball.com/">View team website</a>',
    lat: 51.509865,
    long: -0.118092,
  }

    var hatfield = {
    info:
      '<strong>Saracens Mavericks</strong>\
    	<a href="https://www.mavericksnetball.co.uk/">View team website</a>',
    lat: 51.7634,
    long: -0.22419,
  }

    var glasgow = {
    info:
      '<strong>Strathclyde Sirens</strong>\
    	<a href="https://sirensnetball.com/">View team website</a>',
    lat: 55.860916,
    long: -4.251433,
  }

 var loughborough = {
    info:
      '<strong>Loughborough Lightning</strong>\
    	<a href="https://www.lboro.ac.uk/sport/performance/lightning/netball/">View team website</a>',
    lat: 52.7709,
    long: -1.2097,
  }

  var locations = [
    [manchester.info, manchester.lat, manchester.long, 0],
    [bath.info, bath.lat, bath.long, 1],
    [london.info, london.lat, london.long, 2],
    [hatfield.info, hatfield.lat, hatfield.long, 3],
    [glasgow.info, glasgow.lat, glasgow.long, 4],
    [loughborough.info, loughborough.lat, loughborough.long, 5],
  ]

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 13,
    center: new google.maps.LatLng(	53.801277, -1.548567),
    mapTypeId: google.maps.MapTypeId.ROADMAP,
  })

var infowindow = new google.maps.InfoWindow({})

  var marker, i

  for (i = 0; i < locations.length; i++) {
    marker = new google.maps.Marker({
      position: new google.maps.LatLng(locations[i][1], locations[i][2], locations[i][3], locations[i][4], locations[i][5])
      map: map,
    })

    google.maps.event.addListener(
      marker,
      'click',
      (function (marker, i) {
        return function () {
          infowindow.setContent(locations[i][0])
          infowindow.open(map, marker)
        }
      })(marker, i)
    )
  }
}


 /* var locations = [
    [broadway.info, broadway.lat, broadway.long, 0],
    [belmont.info, belmont.lat, belmont.long, 1],
    [sheridan.info, sheridan.lat, sheridan.long, 2],
  ]

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 13,
    center: new google.maps.LatLng(41.976816, -87.659916),
    mapTypeId: google.maps.MapTypeId.ROADMAP,
  })

  var infowindow = new google.maps.InfoWindow({})

  var marker, i

  for (i = 0; i < locations.length; i++) {
    marker = new google.maps.Marker({
      position: new google.maps.LatLng(locations[i][1], locations[i][2]),
      map: map,
    })

    google.maps.event.addListener(
      marker,
      'click',
      (function (marker, i) {
        return function () {
          infowindow.setContent(locations[i][0])
          infowindow.open(map, marker)
        }
      })(marker, i)
    )
  }
}


function initMap() {
        // The location of Manchester
        var manchester = { lat: 53.483959, lng: -2.244644 };
        // The map, centered at Manchester
        var map = new google.maps.Map(document.getElementById("map"), {
          zoom: 4,
          center: manchester,
        });
        // The marker, positioned at Manchester
        var marker = new google.maps.Marker({
          position: manchester,
          map: map,
          title: "Manchester"
        });
      } */

