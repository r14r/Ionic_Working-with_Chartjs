	var color = Chart.helpers.color;
	var scatterChartData = {
		datasets: [{
			label: 'My First dataset',
			xAxisID: 'x-axis-1',
			yAxisID: 'y-axis-1',
			borderColor: this.chartService.chartColors.red,
			backgroundColor: this.chartService.color(this.chartService.chartColors.red).alpha(0.2).rgbString(),
			data: [{
				x: this.chartService.randomScalingFactor(),
				y: this.chartService.randomScalingFactor(),
			}, {
				x: this.chartService.randomScalingFactor(),
				y: this.chartService.randomScalingFactor(),
			}, {
				x: this.chartService.randomScalingFactor(),
				y: this.chartService.randomScalingFactor(),
			}, {
				x: this.chartService.randomScalingFactor(),
				y: this.chartService.randomScalingFactor(),
			}, {
				x: this.chartService.randomScalingFactor(),
				y: this.chartService.randomScalingFactor(),
			}, {
				x: this.chartService.randomScalingFactor(),
				y: this.chartService.randomScalingFactor(),
			}, {
				x: this.chartService.randomScalingFactor(),
				y: this.chartService.randomScalingFactor(),
			}]
		}, {
			label: 'My Second dataset',
			xAxisID: 'x-axis-1',
			yAxisID: 'y-axis-2',
			borderColor: this.chartService.chartColors.blue,
			backgroundColor: this.chartService.color(this.chartService.chartColors.blue).alpha(0.2).rgbString(),
			data: [{
				x: this.chartService.randomScalingFactor(),
				y: this.chartService.randomScalingFactor(),
			}, {
				x: this.chartService.randomScalingFactor(),
				y: this.chartService.randomScalingFactor(),
			}, {
				x: this.chartService.randomScalingFactor(),
				y: this.chartService.randomScalingFactor(),
			}, {
				x: this.chartService.randomScalingFactor(),
				y: this.chartService.randomScalingFactor(),
			}, {
				x: this.chartService.randomScalingFactor(),
				y: this.chartService.randomScalingFactor(),
			}, {
				x: this.chartService.randomScalingFactor(),
				y: this.chartService.randomScalingFactor(),
			}, {
				x: this.chartService.randomScalingFactor(),
				y: this.chartService.randomScalingFactor(),
			}]
		}]
	};

	window.onload = function() {
		var ctx = document.getElementById('canvas').getContext('2d');
		window.myScatter = Chart.Scatter(ctx, {
			data: scatterChartData,
			options: {
				responsive: true,
				hoverMode: 'nearest',
				intersect: true,
				title: {
					display: true,
					text: 'Chart.js Scatter Chart - Multi Axis'
				},
				scales: {
					xAxes: [{
						position: 'bottom',
						gridLines: {
							zeroLineColor: 'rgba(0,0,0,1)'
						}
					}],
					yAxes: [{
						type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
						display: true,
						position: 'left',
						id: 'y-axis-1',
					}, {
						type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
						display: true,
						position: 'right',
						reverse: true,
						id: 'y-axis-2',

						// grid line settings
						gridLines: {
							drawOnChartArea: false, // only want the grid lines for one axis to show up
						},
					}],
				}
			}
		});
	};

	document.getElementById('randomizeData').addEventListener('click', function() {
		scatterChartData.datasets.forEach(function(dataset) {
			dataset.data = dataset.data.map(function() {
				return {
					x: this.chartService.randomScalingFactor(),
					y: this.chartService.randomScalingFactor()
				};
			});
		});
		window.myScatter.update();
	});
