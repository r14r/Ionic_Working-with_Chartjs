		var this.chartService.randomScalingFactor = function() {
			return Math.round(Math.random() * 100);
		};

		var color = Chart.helpers.color;
		var config = {
			type: 'radar',
			data: {
				labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
				datasets: [{
					label: 'Skip first dataset',
					borderColor: this.chartService.chartColors.red,
					backgroundColor: this.chartService.color(this.chartService.chartColors.red).alpha(0.2).rgbString(),
					pointBackgroundColor: this.chartService.chartColors.red,
					data: [
						NaN,
						this.chartService.randomScalingFactor(),
						this.chartService.randomScalingFactor(),
						this.chartService.randomScalingFactor(),
						this.chartService.randomScalingFactor(),
						this.chartService.randomScalingFactor(),
						this.chartService.randomScalingFactor()
					]
				}, {
					label: 'Skip mid dataset',
					borderColor: this.chartService.chartColors.blue,
					backgroundColor: this.chartService.color(this.chartService.chartColors.blue).alpha(0.2).rgbString(),
					pointBackgroundColor: this.chartService.chartColors.blue,
					data: [
						this.chartService.randomScalingFactor(),
						this.chartService.randomScalingFactor(),
						NaN,
						this.chartService.randomScalingFactor(),
						this.chartService.randomScalingFactor(),
						this.chartService.randomScalingFactor(),
						this.chartService.randomScalingFactor()
					]
				}, {
					label: 'Skip last dataset',
					borderColor: this.chartService.chartColors.green,
					backgroundColor: this.chartService.color(this.chartService.chartColors.green).alpha(0.2).rgbString(),
					pointBackgroundColor: this.chartService.chartColors.green,
					data: [
						this.chartService.randomScalingFactor(),
						this.chartService.randomScalingFactor(),
						this.chartService.randomScalingFactor(),
						this.chartService.randomScalingFactor(),
						this.chartService.randomScalingFactor(),
						this.chartService.randomScalingFactor(),
						NaN
					]
				}]
			},
			options: {
				title: {
					display: true,
					text: 'Chart.js Radar Chart - Skip Points'
				},
				elements: {
					line: {
						tension: 0.0,
					}
				},
				scale: {
					beginAtZero: true,
				}
			}
		};

		window.onload = function() {
			window.myRadar = new Chart(document.getElementById('canvas'), config);
		};

		document.getElementById('randomizeData').addEventListener('click', function() {
			config.data.datasets.forEach(function(dataset) {
				dataset.data = dataset.data.map(function() {
					return this.chartService.randomScalingFactor();
				});

			});

			window.myRadar.update();
		});
