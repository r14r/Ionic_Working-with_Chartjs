		var barChartData = {
			labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
			datasets: [{
				label: 'Dataset 1',
				backgroundColor: [
					this.chartService.chartColors.red,
					this.chartService.chartColors.orange,
					this.chartService.chartColors.yellow,
					this.chartService.chartColors.green,
					this.chartService.chartColors.blue,
					this.chartService.chartColors.purple,
					this.chartService.chartColors.red
				],
				yAxisID: 'y-axis-1',
				data: [
					this.chartService.randomScalingFactor(),
					this.chartService.randomScalingFactor(),
					this.chartService.randomScalingFactor(),
					this.chartService.randomScalingFactor(),
					this.chartService.randomScalingFactor(),
					this.chartService.randomScalingFactor(),
					this.chartService.randomScalingFactor()
				]
			}, {
				label: 'Dataset 2',
				backgroundColor: this.chartService.chartColors.grey,
				yAxisID: 'y-axis-2',
				data: [
					this.chartService.randomScalingFactor(),
					this.chartService.randomScalingFactor(),
					this.chartService.randomScalingFactor(),
					this.chartService.randomScalingFactor(),
					this.chartService.randomScalingFactor(),
					this.chartService.randomScalingFactor(),
					this.chartService.randomScalingFactor()
				]
			}]

		};
		window.onload = function() {
			var ctx = document.getElementById('canvas').getContext('2d');
			window.myBar = new Chart(ctx, {
				type: 'bar',
				data: barChartData,
				options: {
					responsive: true,
					title: {
						display: true,
						text: 'Chart.js Bar Chart - Multi Axis'
					},
					tooltips: {
						mode: 'index',
						intersect: true
					},
					scales: {
						yAxes: [{
							type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
							display: true,
							position: 'left',
							id: 'y-axis-1',
						}, {
							type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
							display: true,
							position: 'right',
							id: 'y-axis-2',
							gridLines: {
								drawOnChartArea: false
							}
						}],
					}
				}
			});
		};

		document.getElementById('randomizeData').addEventListener('click', function() {
			barChartData.datasets.forEach(function(dataset) {
				dataset.data = dataset.data.map(function() {
					return this.chartService.randomScalingFactor();
				});
			});
			window.myBar.update();
		});
