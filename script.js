var map, heatmap, year, type, data;

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 7,
    center: {lat: 40.839824, lng: -111.931848}
  });

  year = 2008
  type = "Ozone";

  heatmap = new google.maps.visualization.HeatmapLayer({
    data: getPoints(),
    map: map,
    radius: 10
  });
}

function updateData(newYear) {
    // if (newYear == 2005)
    // {
    //     alert("Data for 2005 does not exist.");
    // }
    year = newYear;
    heatmap.set('data', getPoints());
}

// Heatmap data: 500 Points
function getPoints() {
    data = generateData();

    var result = [];
    for (var i = data.length - 1; i >= 0; i--) {
        if (data[i]["Year"] == year && data[i]["Type"] == type)
        {
            result.push({location: new google.maps.LatLng(data[i]["Lat"], data[i]["Long"]), weight: data[i]["Count"] * 1000});
        }
    };

    return result;
}