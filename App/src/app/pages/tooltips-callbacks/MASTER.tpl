		var config = {
			type: 'line',
			data: {
				labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
				datasets: [{
					label: 'My First dataset',
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
					],
					fill: false,
				}, {
					label: 'My Second dataset',
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
					],
					fill: false,
				}]
			},
			options: {
				responsive: true,
				title: {
					display: true,
					text: 'Chart.js Line Chart - Custom Information in Tooltip'
				},
				tooltips: {
					mode: 'index',
					callbacks: {
						// Use the footer callback to display the sum of the items showing in the tooltip
						footer: function(tooltipItems, data) {
							var sum = 0;

							tooltipItems.forEach(function(tooltipItem) {
								sum += data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
							});
							return 'Sum: ' + sum;
						},
					},
					footerFontStyle: 'normal'
				},
				hover: {
					mode: 'index',
					intersect: true
				},
				scales: {
					xAxes: [{
						display: true,
						scaleLabel: {
							show: true,
							labelString: 'Month'
						}
					}],
					yAxes: [{
						display: true,
						scaleLabel: {
							show: true,
							labelString: 'Value'
						}
					}]
				}
			}
		};

		window.onload = function() {
			var ctx = document.getElementById('canvas').getContext('2d');
			window.myLine = new Chart(ctx, config);
		};
