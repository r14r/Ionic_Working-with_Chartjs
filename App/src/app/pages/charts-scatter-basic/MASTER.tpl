		var color = Chart.helpers.color;
		function generateData() {
			var data = [];
			for (var i = 0; i < 7; i++) {
				data.push({
					x: this.chartService.randomScalingFactor(),
					y: this.chartService.randomScalingFactor()
				});
			}
			return data;
		}

		var scatterChartData = {
			datasets: [{
				label: 'My First dataset',
				borderColor: this.chartService.chartColors.red,
				backgroundColor: this.chartService.color(this.chartService.chartColors.red).alpha(0.2).rgbString(),
				data: generateData()
			}, {
				label: 'My Second dataset',
				borderColor: this.chartService.chartColors.blue,
				backgroundColor: this.chartService.color(this.chartService.chartColors.blue).alpha(0.2).rgbString(),
				data: generateData()
			}]
		};

		window.onload = function() {
			var ctx = document.getElementById('canvas').getContext('2d');
			window.myScatter = Chart.Scatter(ctx, {
				data: scatterChartData,
				options: {
					title: {
						display: true,
						text: 'Chart.js Scatter Chart'
					},
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
