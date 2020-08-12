		var this.chartService.randomScalingFactor = function() {
			return Math.round(Math.random() * 50 * (Math.random() > 0.5 ? 1 : 1)) + 50;
		};

		var config = {
			type: 'line',
			data: {
				labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
				datasets: [{
					label: 'My First dataset',
					fill: false,
					borderColor: this.chartService.chartColors.red,
					backgroundColor: this.chartService.chartColors.red,
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
					label: 'My Second dataset',
					fill: false,
					borderColor: this.chartService.chartColors.blue,
					backgroundColor: this.chartService.chartColors.blue,
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
			},
			options: {
				responsive: true,
				title: {
					display: true,
					text: 'Chart.js Line Chart - X-Axis Filter'
				},
				scales: {
					xAxes: [{
						display: true,
						ticks: {
							callback: function(dataLabel, index) {
								// Hide the label of every 2nd dataset. return null to hide the grid line too
								return index % 2 === 0 ? dataLabel : '';
							}
						}
					}],
					yAxes: [{
						display: true,
						beginAtZero: false
					}]
				}
			}
		};

		window.onload = function() {
			var ctx = document.getElementById('canvas').getContext('2d');
			window.myLine = new Chart(ctx, config);
		};
