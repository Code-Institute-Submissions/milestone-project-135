function initMap() {
  var broadway = {
    info:
      '<strong>Manchester Thunder</strong>\
    	<a href="https://www.manchesterthunder.co.uk/">Get Directions</a>',
    lat: 53.483959,
    long: -2.244644,
  }

  var belmont = {
    info:
      '<strong>Chipotle on Belmont</strong><br>\
    	1025 W Belmont Ave<br> Chicago, IL 60657<br>\
    	<a href="https://goo.gl/maps/PHfsWTvgKa92">Get Directions</a>',
    lat: 41.93967,
    long: -87.655167,
  }

  var sheridan = {
    info:
      '<strong>Chipotle on Sheridan</strong><br>\r\
    	6600 N Sheridan Rd<br> Chicago, IL 60626<br>\
    	<a href="https://goo.gl/maps/QGUrqZPsYp92">Get Directions</a>',
    lat: 42.002707,
    long: -87.661236,
  }

  var locations = [
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






/*function initMap() {
  var manchester = {
    info:
      '<strong>Manchester Thunder</strong>
    	<a href="https://www.manchesterthunder.co.uk/">View Manchester Thunder website</a>',
    lat: 53.483959,
    long: -2.244644,
  }

  var bath = {
    info:
      '<strong>Bath</strong>
    	<a href="https://www.teambath.com/sport/netball/">View Team Bath website</a>',
    lat: 51.380001,
    long: -2.360000,
  }

  var london = {
    info:
      '<strong>London Pulse</strong>
    	<a href="https://goo.gl/maps/QGUrqZPsYp92">View London Pulse website</a>',
    lat: 51.509865,
    long: -0.118092,
  }

    var hatfield = {
    info:
      '<strong>Saracens Mavericks</strong>
    	<a href="https://www.mavericksnetball.co.uk/">View Saracens Mavericks website</a>',
    lat: 51.7634,
    long: -0.22419,
  }

      var glasgow = {
    info:
      '<strong>Strathclyde Sirens</strong>
    	<a href="https://sirensnetball.com/">View Strathclyde Sirens website</a>',
    lat: 55.860916,
    long: -4.251433,
  }

      var loughborough = {
    info:
      '<strong>Loughborough Lightning</strong>
    	<a href="https://www.lboro.ac.uk/sport/performance/lightning/netball/">View Loughborough Lightning website</a>',
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
}*/


/*function initMap() {
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

