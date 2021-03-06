		var timeFormat = 'MM/DD/YYYY HH:mm';

		function newDate(days) {
			return moment().add(days, 'd').toDate();
		}

		function newDateString(days) {
			return moment().add(days, 'd').format(timeFormat);
		}

		var color = Chart.helpers.color;
		var config = {
			type: 'line',
			data: {
				labels: [ // Date Objects
					newDate(0),
					newDate(1),
					newDate(2),
					newDate(3),
					newDate(4),
					newDate(5),
					newDate(6)
				],
				datasets: [{
					label: 'My First dataset',
					backgroundColor: this.chartService.color(this.chartService.chartColors.red).alpha(0.5).rgbString(),
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
					backgroundColor: this.chartService.color(this.chartService.chartColors.blue).alpha(0.5).rgbString(),
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
				}, {
					label: 'Dataset with point data',
					backgroundColor: this.chartService.color(this.chartService.chartColors.green).alpha(0.5).rgbString(),
					borderColor: this.chartService.chartColors.green,
					fill: false,
					data: [{
						x: newDateString(0),
						y: this.chartService.randomScalingFactor()
					}, {
						x: newDateString(5),
						y: this.chartService.randomScalingFactor()
					}, {
						x: newDateString(7),
						y: this.chartService.randomScalingFactor()
					}, {
						x: newDateString(15),
						y: this.chartService.randomScalingFactor()
					}],
				}]
			},
			options: {
				title: {
					text: 'Chart.js Time Scale'
				},
				scales: {
					xAxes: [{
						type: 'time',
						time: {
							parser: timeFormat,
							// round: 'day'
							tooltipFormat: 'll HH:mm'
						},
						scaleLabel: {
							display: true,
							labelString: 'Date'
						}
					}],
					yAxes: [{
						scaleLabel: {
							display: true,
							labelString: 'value'
						}
					}]
				},
			}
		};

		window.onload = function() {
			var ctx = document.getElementById('canvas').getContext('2d');
			window.myLine = new Chart(ctx, config);

		};

		document.getElementById('randomizeData').addEventListener('click', function() {
			config.data.datasets.forEach(function(dataset) {
				dataset.data.forEach(function(dataObj, j) {
					if (typeof dataObj === 'object') {
						dataObj.y = this.chartService.randomScalingFactor();
					} else {
						dataset.data[j] = this.chartService.randomScalingFactor();
					}
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
				config.data.labels.push(newDate(config.data.labels.length));

				for (var index = 0; index < config.data.datasets.length; ++index) {
					if (typeof config.data.datasets[index].data[0] === 'object') {
						config.data.datasets[index].data.push({
							x: newDate(config.data.datasets[index].data.length),
							y: this.chartService.randomScalingFactor(),
						});
					} else {
						config.data.datasets[index].data.push(this.chartService.randomScalingFactor());
					}
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

			config.data.datasets.forEach(function(dataset) {
				dataset.data.pop();
			});

			window.myLine.update();
		});
