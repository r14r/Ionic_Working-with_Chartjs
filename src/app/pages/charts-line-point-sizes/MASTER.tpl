		var config = {
			type: 'line',
			data: {
				labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
				datasets: [{
					label: 'dataset - big points',
					data: [
						this.chartService.randomScalingFactor(),
						this.chartService.randomScalingFactor(),
						this.chartService.randomScalingFactor(),
						this.chartService.randomScalingFactor(),
						this.chartService.randomScalingFactor(),
						this.chartService.randomScalingFactor(),
						this.chartService.randomScalingFactor()
					],
					backgroundColor: this.chartService.chartColors.red,
					borderColor: this.chartService.chartColors.red,
					fill: false,
					borderDash: [5, 5],
					pointRadius: 15,
					pointHoverRadius: 10,
				}, {
					label: 'dataset - individual point sizes',
					data: [
						this.chartService.randomScalingFactor(),
						this.chartService.randomScalingFactor(),
						this.chartService.randomScalingFactor(),
						this.chartService.randomScalingFactor(),
						this.chartService.randomScalingFactor(),
						this.chartService.randomScalingFactor(),
						this.chartService.randomScalingFactor()
					],
					backgroundColor: this.chartService.chartColors.blue,
					borderColor: this.chartService.chartColors.blue,
					fill: false,
					borderDash: [5, 5],
					pointRadius: [2, 4, 6, 18, 0, 12, 20],
				}, {
					label: 'dataset - large pointHoverRadius',
					data: [
						this.chartService.randomScalingFactor(),
						this.chartService.randomScalingFactor(),
						this.chartService.randomScalingFactor(),
						this.chartService.randomScalingFactor(),
						this.chartService.randomScalingFactor(),
						this.chartService.randomScalingFactor(),
						this.chartService.randomScalingFactor()
					],
					backgroundColor: this.chartService.chartColors.green,
					borderColor: this.chartService.chartColors.green,
					fill: false,
					pointHoverRadius: 30,
				}, {
					label: 'dataset - large pointHitRadius',
					data: [
						this.chartService.randomScalingFactor(),
						this.chartService.randomScalingFactor(),
						this.chartService.randomScalingFactor(),
						this.chartService.randomScalingFactor(),
						this.chartService.randomScalingFactor(),
						this.chartService.randomScalingFactor(),
						this.chartService.randomScalingFactor()
					],
					backgroundColor: this.chartService.chartColors.yellow,
					borderColor: this.chartService.chartColors.yellow,
					fill: false,
					pointHitRadius: 20,
				}]
			},
			options: {
				responsive: true,
				legend: {
					position: 'bottom',
				},
				hover: {
					mode: 'index'
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
					text: 'Chart.js Line Chart - Different point sizes'
				}
			}
		};

		window.onload = function() {
			var ctx = document.getElementById('canvas').getContext('2d');
			window.myLine = new Chart(ctx, config);
		};
