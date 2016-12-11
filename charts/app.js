$(function() {
	var userData = [
		{
			"username": "user1",
			"country": "Canada",
			"age": "15",
			"ethnicity": "African",
			"gender": "male"
		},
		{
			"username": "user2",
			"country": "Russia",
			"age": "19",
			"ethnicity": "Russian",
			"gender": "female"
		},
		{
			"username": "user3",
			"country": "Germany",
			"age": "17",
			"ethnicity": "German",
			"gender": "undisclosed"
		},
		{
			"username": "user4",
			"country": "United States",
			"age": "12",
			"ethnicity": "Pakistani",
			"gender": "undisclosed"
		},
		{
			"username": "user9",
			"country": "United States",
			"age": "12",
			"ethnicity": "Pakistani",
			"gender": "undisclosed"
		},
		{
			"username": "user5",
			"country": "Pakistan",
			"age": "18",
			"ethnicity": "Pakistani",
			"gender": "female"
		},
		{
			"username": "user6",
			"country": "United Kingdom",
			"age": "22",
			"ethnicity": "African",
			"gender": "male"
		},
		{
			"username": "user8",
			"country": "United Kingdom",
			"age": "22",
			"ethnicity": "African",
			"gender": "male"
		},
		{
			"username": "user7",
			"country": "United Kingdom",
			"age": "22",
			"ethnicity": "African",
			"gender": "male"
		}		
	];

	var summary = usersSummary(userData);

	var countries = $.map(summary.country, function(value, index) {
		return [[index, value]];
	});
	var gender = $.map(summary.gender, function(value, index) {
		return [[index, value]];
	});
	var ethnicity = $.map(summary.ethnicity, function(value, index) {
		return [[index, value]];
	});
	var age = $.map(summary.age, function(value, index) {
		return [[index, value]];
	});
	
	

	// Load Charts and the corechart package.
	google.charts.load('current', {'packages':['corechart', 'geochart']});

	google.charts.setOnLoadCallback(drawWorldMap);
	google.charts.setOnLoadCallback(drawPieChart1);
	google.charts.setOnLoadCallback(drawPieChart2);
	google.charts.setOnLoadCallback(drawPieChart3);
	google.charts.setOnLoadCallback(drawPieChart4);

	function drawWorldMap() {
		var data = new google.visualization.DataTable();
		data.addColumn('string', 'Country');
		data.addColumn('number', 'Represented');
		data.addRows(countries);

		var options = {
			backgroundColor: '#ecf0f1',
			keepAspectRatio: true,
			magnifyingGlass: {
				enable: true, 
				zoomFactor: 7.5
			}
		};

		var worldMap = new google.visualization.GeoChart(document.getElementById('world_map'));
		worldMap.draw(data, options);
	}

	function drawPieChart1() {
		var data = new google.visualization.DataTable();
		data.addColumn('string', 'Country');
		data.addColumn('number', 'Countries Represented');
		data.addRows(countries);

		var options = {
			is3D: true,
			title:'Countries Represented',
			titleTextStyle: {
				fontSize: 20
			},
			titlePosition: 'out',
			legend: {position: 'bottom', alignment: 'center', textStyle: {color: '#2c3e50', fontSize: 12}}
		};

		var chart = new google.visualization.PieChart(document.getElementById('piechart1'));
		chart.draw(data, options);
	}

	function drawPieChart2() {

		var data = new google.visualization.DataTable();
		data.addColumn('string', 'Gender');
		data.addColumn('number', 'Gender Association');
		data.addRows(gender);

		var options = {
			is3D: true,
			title:'Gender Association',
			titleTextStyle: {
				fontSize: 20
			},
			legend: {position: 'bottom', alignment: 'center', textStyle: {color: '#2c3e50', fontSize: 12}}
		};

		var chart = new google.visualization.PieChart(document.getElementById('piechart2'));
		chart.draw(data, options);
	}

	function drawPieChart3() {
		var data = new google.visualization.DataTable();
		data.addColumn('string', 'Age');
		data.addColumn('number', 'Age Represented');
		data.addRows(age);

		var options = {
			is3D: true,
			title:'Ages Represented',
			titleTextStyle: {
				fontSize: 20
			},
			legend: {position: 'bottom', alignment: 'center', textStyle: {color: '#2c3e50', fontSize: 12}}
		};

		var chart = new google.visualization.PieChart(document.getElementById('piechart3'));
		chart.draw(data, options);
	}

	function drawPieChart4() {

		var data = new google.visualization.DataTable();
		data.addColumn('string', 'Ethnicity');
		data.addColumn('number', 'Ethnicities Represented');
		data.addRows(ethnicity);

		var options = {
			is3D: true,
			title:'Ethnicities Represented',
			titleTextStyle: {
				fontSize: 20
			},
			legend: {position: 'bottom', alignment: 'center', textStyle: {color: '#2c3e50', fontSize: 12}}
		};

		var chart = new google.visualization.PieChart(document.getElementById('piechart4'));
		chart.draw(data, options);
	}

	$(window).resize(function(){
		drawWorldMap();
		drawPieChart1();
		drawPieChart2();
		drawPieChart3();
		drawPieChart4();
	});
});



function usersSummary(data) {
	var resultCount = {};
	for(var i = 0; i < data.length; i++){
		for(var item in data[i]){
			if(!resultCount[item]){
				resultCount[item] = {};
			}

			if(!resultCount[item][data[i][item]]){
				resultCount[item][data[i][item]] = 0;
			}

			resultCount[item][data[i][item]]++;
		}
	}
	return resultCount;
}
