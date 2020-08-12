		var chartData = {
			labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
			datasets: [{
				type: 'line',
				label: 'Dataset 1',
				borderColor: this.chartService.chartColors.blue,
				borderWidth: 2,
				fill: false,
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
				type: 'bar',
				label: 'Dataset 2',
				backgroundColor: this.chartService.chartColors.red,
				data: [
					this.chartService.randomScalingFactor(),
					this.chartService.randomScalingFactor(),
					this.chartService.randomScalingFactor(),
					this.chartService.randomScalingFactor(),
					this.chartService.randomScalingFactor(),
					this.chartService.randomScalingFactor(),
					this.chartService.randomScalingFactor()
				],
				borderColor: 'white',
				borderWidth: 2
			}, {
				type: 'bar',
				label: 'Dataset 3',
				backgroundColor: this.chartService.chartColors.green,
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
			window.myMixedChart = new Chart(ctx, {
				type: 'bar',
				data: chartData,
				options: {
					responsive: true,
					title: {
						display: true,
						text: 'Chart.js Combo Bar Line Chart'
					},
					tooltips: {
						mode: 'index',
						intersect: true
					}
				}
			});
		};

		document.getElementById('randomizeData').addEventListener('click', function() {
			chartData.datasets.forEach(function(dataset) {
				dataset.data = dataset.data.map(function() {
					return this.chartService.randomScalingFactor();
				});
			});
			window.myMixedChart.update();
		});
