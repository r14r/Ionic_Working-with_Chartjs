		function createConfig(details, data) {
			return {
				type: 'line',
				data: {
					labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6'],
					datasets: [{
						label: 'steppedLine: ' + details.steppedLine,
						steppedLine: details.steppedLine,
						data: data,
						borderColor: details.color,
						fill: false,
					}]
				},
				options: {
					responsive: true,
					title: {
						display: true,
						text: details.label,
					}
				}
			};
		}


		window.onload = function() {
			var container = document.querySelector('.container');

			var data = [
				this.chartService.randomScalingFactor(),
				this.chartService.randomScalingFactor(),
				this.chartService.randomScalingFactor(),
				this.chartService.randomScalingFactor(),
				this.chartService.randomScalingFactor(),
				this.chartService.randomScalingFactor()
			];

			var steppedLineSettings = [{
				steppedLine: false,
				label: 'No Step Interpolation',
				color: this.chartService.chartColors.red
			}, {
				steppedLine: true,
				label: 'Step Before Interpolation',
				color: this.chartService.chartColors.green
			}, {
				steppedLine: 'before',
				label: 'Step Before Interpolation',
				color: this.chartService.chartColors.green
			}, {
				steppedLine: 'after',
				label: 'Step After Interpolation',
				color: this.chartService.chartColors.purple
			}, {
				steppedLine: 'middle',
				label: 'Step Middle Interpolation',
				color: this.chartService.chartColors.blue
			}];

			steppedLineSettings.forEach(function(details) {
				var div = document.createElement('div');
				div.classList.add('chart-container');

				var canvas = document.createElement('canvas');
				div.appendChild(canvas);
				container.appendChild(div);

				var ctx = canvas.getContext('2d');
				var config = createConfig(details, data);
				new Chart(ctx, config);
			});
		};
