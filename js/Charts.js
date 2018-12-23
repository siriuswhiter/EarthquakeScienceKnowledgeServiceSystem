function chartPie(htmlId, data, isNewWindowShow) {
	$("#map1").hide();
	$("#map").hide();
	// PIE CHART
	var chart = new AmCharts.AmPieChart();
	chart.dataProvider = data;
	chart.titleField = "title";
	chart.labelText = "[[percents]]% ([[value]])";
	chart.valueField = "value";
	chart.urlField = 'url';
	if (!empty(isNewWindowShow) && isNewWindowShow) {
		chart.urlTarget = '_blank';
	}
	chart.outlineColor = "#FFFFFF";
	chart.outlineAlpha = 0.8;
	chart.pullOutOnlyOne = true;
	chart.outlineThickness = 2;
	chart.sequencedAnimation = true;
	chart.startDuration = 0;
	// chart.startEffect = "elastic";
	chart.innerRadius = "30%";
	chart.labelRadius = 15;
	// this makes the chart 3D
	chart.depth3D = 15;
	chart.angle = 30;
	chart.fontSize = 12;

	// LEGEND
	legend = new AmCharts.AmLegend();
	legend.align = "center";
	legend.markerType = "circle";
	chart.addLegend(legend);

	// WRITE
	chart.write(htmlId);
}

function chartColumn(htmlId, data, isNewWindowShow) {
	$("#map1").hide();
	$("#map").hide();
	// SERIAL CHART
	var chart = new AmCharts.AmSerialChart();
	// chart.startDuration = 1;
	chart.dataProvider = data;
	chart.categoryField = "title";
	chart.categoryText = "[[percents]]% ([[value]])";
	if(htmlId == 'completeperson_TuBiao_div'){
		chart.rotate = false;
	}else{
		chart.rotate = true;
	}
	chart.depth3D = 20;
	chart.angle = 30;
	chart.fontSize = 12;

	var valueAxis = new AmCharts.ValueAxis();
	valueAxis.integersOnly = true;
	chart.addValueAxis(valueAxis);

	// GRAPH
	var graph = new AmCharts.AmGraph();
	graph.valueField = "value";
	graph.type = "column";
	graph.labelText = "[[value]]";
	// graph.labelPosition = "bottom";
	// graph.balloonText = "[[category]]:[[value]]";
	graph.lineAlpha = 0;
	graph.fillColors = "#bf1c25";
	graph.fillAlphas = 1;
	graph.urlField = 'url';
	if (!empty(isNewWindowShow) && isNewWindowShow) {
		graph.urlTarget = '_blank';
	}
	chart.addGraph(graph);
	// WRITE
	chart.write(htmlId);
	
}

function chartLineByYear(htmlId, data, isNewWindowShow) {
	$("#map1").hide();
	$("#map").hide();
	chart = new AmCharts.AmSerialChart();
	chart.pathToImages = "../amcharts/images/";
	chart.marginTop = 0;
	chart.marginRight = 0;
	chart.dataProvider = data;
	chart.categoryField = "year";
	chart.dataDateFormat = "YYYY";
	chart.balloon.cornerRadius = 6;

	// AXES
	// category
	var categoryAxis = chart.categoryAxis;
	categoryAxis.parseDates = true; // as our data is date-based, we set
									// parseDates to true
	categoryAxis.minPeriod = "YYYY"; // our data is yearly, so we set
										// minPeriod to YYYY
	categoryAxis.dashLength = 1;
	categoryAxis.minorGridEnabled = true;
	categoryAxis.axisColor = "#DADADA";

	// value
	var valueAxis = new AmCharts.ValueAxis();
	valueAxis.axisAlpha = 0;
	valueAxis.dashLength = 1;
	valueAxis.inside = true;
	chart.addValueAxis(valueAxis);

	// GRAPH
	graph = new AmCharts.AmGraph();
	//graph.lineColor = "#b6d278";
	graph.negativeLineColor = "#487dac"; // this line makes the graph to
											// change color when it drops below
											// 0
	graph.bullet = "round";
	graph.bulletSize = 8;
	graph.bulletBorderColor = "#FFFFFF";

	graph.bulletBorderThickness = 2;
	graph.bulletBorderAlpha = 1;
	graph.connect = false; // this makes the graph not to connect data points
							// if data is missing
	graph.lineThickness = 2;
	graph.valueField = "value";
	graph.balloonText = "[[category]]:<b>[[value]]</b>";
	graph.urlField = 'url';
	if (!empty(isNewWindowShow) && isNewWindowShow) {
		graph.urlTarget = '_blank';
	}
	chart.addGraph(graph);

	// CURSOR
	var chartCursor = new AmCharts.ChartCursor();
	chartCursor.cursorAlpha = 0;
	chartCursor.cursorPosition = "mouse";
	chartCursor.categoryBalloonDateFormat = "YYYY";
	chartCursor.graphBulletSize = 2;
	chart.addChartCursor(chartCursor);

	// WRITE
	chart.write(htmlId);
}

function chartLineXY(htmlId, data) {
	$("#map1").hide();
	$("#map").hide();
	var chart = new AmCharts.AmSerialChart();
	chart.pathToImages = ContextPath + '/amcharts/amcharts/images/';
	chart.dataProvider = data.chartData;
	chart.categoryField = "year";
	chart.balloon.color = "#000000";

	var categoryAxis = chart.categoryAxis;
	categoryAxis.fillAlpha = 1;
	categoryAxis.fillColor = "#FAFAFA";
	categoryAxis.gridAlpha = 0;
	categoryAxis.axisAlpha = 0;
	categoryAxis.gridPosition = "start";

	// Y轴
	var valueAxis = new AmCharts.ValueAxis();
	valueAxis.title = " 数 量 ";
	valueAxis.dashLength = 5;
	valueAxis.axisAlpha = 0;
	valueAxis.minimum = 0;
	valueAxis.maximum = data.count;
	valueAxis.integersOnly = true;
	valueAxis.gridCount = 10;
	chart.addValueAxis(valueAxis);

	var value = data.keywords
	$(value).each(function(i) {
				var graph = new AmCharts.AmGraph();
				graph.title = value[i];
				graph.valueField = value[i];
				graph.lineAlpha = 1;
				graph.bullet = "round";
				chart.addGraph(graph);
			})

	var legend = new AmCharts.AmLegend();
	legend.markerType = "circle";
	chart.addLegend(legend);

	var chartScrollbar = new AmCharts.ChartScrollbar();
	chart.addChartScrollbar(chartScrollbar);

	var chartCursor = new AmCharts.ChartCursor();
	chart.addChartCursor(chartCursor);

	chart.write(htmlId);
}