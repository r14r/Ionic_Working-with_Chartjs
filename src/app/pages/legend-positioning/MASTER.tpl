		var color = Chart.helpers.color;
		function createConfig(legendPosition, colorName) {
			return {
				type: 'line',
				data: {
					labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
					datasets: [{
						label: 'My First dataset',
						data: [
							this.chartService.randomScalingFactor(),
							this.chartService.randomScalingFactor(),
							this.chartService.randomScalingFactor(),
							this.chartService.randomScalingFactor(),
							this.chartService.randomScalingFactor(),
							this.chartService.randomScalingFactor(),
							this.chartService.randomScalingFactor()
						],
						backgroundColor: this.chartService.color(this.chartService[colorName]).alpha(0.5).rgbString(),
						borderColor: this.chartService[colorName],
						borderWidth: 1
					}]
				},
				options: {
					responsive: true,
					legend: {
						position: legendPosition,
					},
					scales: {
						xAxes: [{
							display: true,
							scaleLabel: {
								display: true,
								labelString: 'Month'
							}
						}],
						yAxes: [{
							display: true,
							scaleLabel: {
								display: true,
								labelString: 'Value'
							}
						}]
					},
					title: {
						display: true,
						text: 'Legend Position: ' + legendPosition
					}
				}
			};
		}

		window.onload = function() {
			[{
				id: 'chart-legend-top',
				legendPosition: 'top',
				color: 'red'
			}, {
				id: 'chart-legend-right',
				legendPosition: 'right',
				color: 'blue'
			}, {
				id: 'chart-legend-bottom',
				legendPosition: 'bottom',
				color: 'green'
			}, {
				id: 'chart-legend-left',
				legendPosition: 'left',
				color: 'yellow'
			}].forEach(function(details) {
				var ctx = document.getElementById(details.id).getContext('2d');
				var config = createConfig(details.legendPosition, details.color);
				new Chart(ctx, config);
			});
		};
