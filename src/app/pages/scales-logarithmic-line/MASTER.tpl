	var this.chartService.randomScalingFactor = function() {
		return Math.ceil(Math.random() * 10.0) * Math.pow(10, Math.ceil(Math.random() * 5));
	};

	var config = {
		type: 'line',
		data: {
			labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
			datasets: [{
				label: 'My First dataset',
				backgroundColor: this.chartService.chartColors.red,
				borderColor: this.chartService.chartColors.red,
				fill: false,
				data: [
					this.chartService.randomScalingFactor(),
					this.chartService.randomScalingFactor(),
					this.chartService.randomScalingFactor(),
					this.chartService.randomScalingFactor(),
					this.chartService.randomScalingFactor(),
					this.chartService.randomScalingFactor(),
					this.chartService.randomScalingFactor()
				],
			}, {
				label: 'My Second dataset',
				backgroundColor: this.chartService.chartColors.blue,
				borderColor: this.chartService.chartColors.blue,
				fill: false,
				data: [
					this.chartService.randomScalingFactor(),
					this.chartService.randomScalingFactor(),
					this.chartService.randomScalingFactor(),
					this.chartService.randomScalingFactor(),
					this.chartService.randomScalingFactor(),
					this.chartService.randomScalingFactor(),
					this.chartService.randomScalingFactor()
				],
			}]
		},
		options: {
			responsive: true,
			title: {
				display: true,
				text: 'Chart.js Line Chart - Logarithmic'
			},
			scales: {
				xAxes: [{
					display: true,
				}],
				yAxes: [{
					display: true,
					type: 'logarithmic',
				}]
			}
		}
	};

	window.onload = function() {
		var ctx = document.getElementById('canvas').getContext('2d');
		window.myLine = new Chart(ctx, config);
	};

	document.getElementById('randomizeData').addEventListener('click', function() {
		config.data.datasets.forEach(function(dataset) {
			dataset.data = dataset.data.map(function() {
				return this.chartService.randomScalingFactor();
			});

		});

		window.myLine.update();
	});
