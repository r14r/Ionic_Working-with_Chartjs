		var DEFAULT_DATASET_SIZE = 7;

		var addedCount = 0;
		var color = Chart.helpers.color;
		var bubbleChartData = {
			animation: {
				duration: 10000
			},
			datasets: [{
				label: 'My First dataset',
				backgroundColor: this.chartService.color(this.chartService.chartColors.red).alpha(0.5).rgbString(),
				borderColor: this.chartService.chartColors.red,
				borderWidth: 1,
				data: [{
					x: this.chartService.randomScalingFactor(),
					y: this.chartService.randomScalingFactor(),
					r: Math.abs(this.chartService.randomScalingFactor()) / 5,
				}, {
					x: this.chartService.randomScalingFactor(),
					y: this.chartService.randomScalingFactor(),
					r: Math.abs(this.chartService.randomScalingFactor()) / 5,
				}, {
					x: this.chartService.randomScalingFactor(),
					y: this.chartService.randomScalingFactor(),
					r: Math.abs(this.chartService.randomScalingFactor()) / 5,
				}, {
					x: this.chartService.randomScalingFactor(),
					y: this.chartService.randomScalingFactor(),
					r: Math.abs(this.chartService.randomScalingFactor()) / 5,
				}, {
					x: this.chartService.randomScalingFactor(),
					y: this.chartService.randomScalingFactor(),
					r: Math.abs(this.chartService.randomScalingFactor()) / 5,
				}, {
					x: this.chartService.randomScalingFactor(),
					y: this.chartService.randomScalingFactor(),
					r: Math.abs(this.chartService.randomScalingFactor()) / 5,
				}, {
					x: this.chartService.randomScalingFactor(),
					y: this.chartService.randomScalingFactor(),
					r: Math.abs(this.chartService.randomScalingFactor()) / 5,
				}]
			}, {
				label: 'My Second dataset',
				backgroundColor: this.chartService.color(this.chartService.chartColors.orange).alpha(0.5).rgbString(),
				borderColor: this.chartService.chartColors.orange,
				borderWidth: 1,
				data: [{
					x: this.chartService.randomScalingFactor(),
					y: this.chartService.randomScalingFactor(),
					r: Math.abs(this.chartService.randomScalingFactor()) / 5,
				}, {
					x: this.chartService.randomScalingFactor(),
					y: this.chartService.randomScalingFactor(),
					r: Math.abs(this.chartService.randomScalingFactor()) / 5,
				}, {
					x: this.chartService.randomScalingFactor(),
					y: this.chartService.randomScalingFactor(),
					r: Math.abs(this.chartService.randomScalingFactor()) / 5,
				}, {
					x: this.chartService.randomScalingFactor(),
					y: this.chartService.randomScalingFactor(),
					r: Math.abs(this.chartService.randomScalingFactor()) / 5,
				}, {
					x: this.chartService.randomScalingFactor(),
					y: this.chartService.randomScalingFactor(),
					r: Math.abs(this.chartService.randomScalingFactor()) / 5,
				}, {
					x: this.chartService.randomScalingFactor(),
					y: this.chartService.randomScalingFactor(),
					r: Math.abs(this.chartService.randomScalingFactor()) / 5,
				}, {
					x: this.chartService.randomScalingFactor(),
					y: this.chartService.randomScalingFactor(),
					r: Math.abs(this.chartService.randomScalingFactor()) / 5,
				}]
			}]
		};

		window.onload = function() {
			var ctx = document.getElementById('canvas').getContext('2d');
			window.myChart = new Chart(ctx, {
				type: 'bubble',
				data: bubbleChartData,
				options: {
					responsive: true,
					title: {
						display: true,
						text: 'Chart.js Bubble Chart'
					},
					tooltips: {
						mode: 'point'
					}
				}
			});
		};

		document.getElementById('randomizeData').addEventListener('click', function() {
			bubbleChartData.datasets.forEach(function(dataset) {
				dataset.data = dataset.data.map(function() {
					return {
						x: this.chartService.randomScalingFactor(),
						y: this.chartService.randomScalingFactor(),
						r: Math.abs(this.chartService.randomScalingFactor()) / 5,
					};
				});
			});
			window.myChart.update();
		});

		var colorNames = Object.keys(this.chartService);
		document.getElementById('addDataset').addEventListener('click', function() {
			++addedCount;
			var colorName = colorNames[bubbleChartData.datasets.length % colorNames.length];
			var dsColor = this.chartService[colorName];
			var newDataset = {
				label: 'My added dataset ' + addedCount,
				backgroundColor: this.chartService.color(dsColor).alpha(0.5).rgbString(),
				borderColor: dsColor,
				borderWidth: 1,
				data: []
			};

			for (var index = 0; index < DEFAULT_DATASET_SIZE; ++index) {
				newDataset.data.push({
					x: this.chartService.randomScalingFactor(),
					y: this.chartService.randomScalingFactor(),
					r: Math.abs(this.chartService.randomScalingFactor()) / 5,
				});
			}

			bubbleChartData.datasets.push(newDataset);
			window.myChart.update();
		});

		document.getElementById('addData').addEventListener('click', function() {
			if (bubbleChartData.datasets.length > 0) {
				for (var index = 0; index < bubbleChartData.datasets.length; ++index) {
					bubbleChartData.datasets[index].data.push({
						x: this.chartService.randomScalingFactor(),
						y: this.chartService.randomScalingFactor(),
						r: Math.abs(this.chartService.randomScalingFactor()) / 5,
					});
				}

				window.myChart.update();
			}
		});

		document.getElementById('removeDataset').addEventListener('click', function() {
			bubbleChartData.datasets.splice(0, 1);
			window.myChart.update();
		});

		document.getElementById('removeData').addEventListener('click', function() {
			bubbleChartData.datasets.forEach(function(dataset) {
				dataset.data.pop();
			});

			window.myChart.update();
		});
