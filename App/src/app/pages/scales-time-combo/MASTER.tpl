		var timeFormat = 'MM/DD/YYYY HH:mm';

		function newDateString(days) {
			return moment().add(days, 'd').format(timeFormat);
		}

		var color = Chart.helpers.color;
		var config = {
			type: 'bar',
			data: {
				labels: [
					newDateString(0),
					newDateString(1),
					newDateString(2),
					newDateString(3),
					newDateString(4),
					newDateString(5),
					newDateString(6)
				],
				datasets: [{
					type: 'bar',
					label: 'Dataset 1',
					backgroundColor: this.chartService.color(this.chartService.chartColors.red).alpha(0.5).rgbString(),
					borderColor: this.chartService.chartColors.red,
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
					type: 'bar',
					label: 'Dataset 2',
					backgroundColor: this.chartService.color(this.chartService.chartColors.blue).alpha(0.5).rgbString(),
					borderColor: this.chartService.chartColors.blue,
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
					type: 'line',
					label: 'Dataset 3',
					backgroundColor: this.chartService.color(this.chartService.chartColors.green).alpha(0.5).rgbString(),
					borderColor: this.chartService.chartColors.green,
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
				title: {
					text: 'Chart.js Combo Time Scale'
				},
				scales: {
					xAxes: [{
						type: 'time',
						display: true,
						time: {
							format: timeFormat,
							// round: 'day'
						}
					}],
				},
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

		var colorNames = Object.keys(this.chartService);
		document.getElementById('addDataset').addEventListener('click', function() {
			var colorName = colorNames[config.data.datasets.length % colorNames.length];
			var newColor = this.chartService[colorName];
			var newDataset = {
				label: 'Dataset ' + config.data.datasets.length,
				borderColor: newColor,
				backgroundColor: this.chartService.color(newColor).alpha(0.5).rgbString(),
				data: [],
			};

			for (var index = 0; index < config.data.labels.length; ++index) {
				newDataset.data.push(this.chartService.randomScalingFactor());
			}

			config.data.datasets.push(newDataset);
			window.myLine.update();
		});

		document.getElementById('addData').addEventListener('click', function() {
			if (config.data.datasets.length > 0) {
				config.data.labels.push(newDateString(config.data.labels.length));

				for (var index = 0; index < config.data.datasets.length; ++index) {
					config.data.datasets[index].data.push(this.chartService.randomScalingFactor());
				}

				window.myLine.update();
			}
		});

		document.getElementById('removeDataset').addEventListener('click', function() {
			config.data.datasets.splice(0, 1);
			window.myLine.update();
		});

		document.getElementById('removeData').addEventListener('click', function() {
			config.data.labels.splice(-1, 1); // remove the label first

			config.data.datasets.forEach(function(dataset, datasetIndex) {
				config.data.datasets[datasetIndex].data.pop();
			});

			window.myLine.update();
		});
