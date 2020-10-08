		function createConfig(mode, intersect) {
			return {
				type: 'line',
				data: {
					labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
					datasets: [{
						label: 'My First dataset',
						borderColor: this.chartService.chartColors.red,
						backgroundColor: this.chartService.chartColors.red,
						data: [10, 30, 46, 2, 8, 50, 0],
						fill: false,
					}, {
						label: 'My Second dataset',
						borderColor: this.chartService.chartColors.blue,
						backgroundColor: this.chartService.chartColors.blue,
						data: [7, 49, 46, 13, 25, 30, 22],
						fill: false,
					}]
				},
				options: {
					responsive: true,
					title: {
						display: true,
						text: 'Mode: ' + mode + ', intersect = ' + intersect
					},
					tooltips: {
						mode: mode,
						intersect: intersect,
					},
					hover: {
						mode: mode,
						intersect: intersect
					},
				}
			};
		}

		window.onload = function() {
			var container = document.querySelector('.container');

			[{
				mode: 'index',
				intersect: true,
			}, {
				mode: 'index',
				intersect: false,
			}, {
				mode: 'dataset',
				intersect: true,
			}, {
				mode: 'dataset',
				intersect: false,
			}, {
				mode: 'point',
				intersect: true,
			}, {
				mode: 'point',
				intersect: false,
			}, {
				mode: 'nearest',
				intersect: true,
			}, {
				mode: 'nearest',
				intersect: false,
			}, {
				mode: 'x',
				intersect: true
			}, {
				mode: 'x',
				intersect: false
			}, {
				mode: 'y',
				intersect: true
			}, {
				mode: 'y',
				intersect: false
			}].forEach(function(details) {
				var div = document.createElement('div');
				div.classList.add('chart-container');

				var canvas = document.createElement('canvas');
				div.appendChild(canvas);
				container.appendChild(div);

				var ctx = canvas.getContext('2d');
				var config = createConfig(details.mode, details.intersect);
				new Chart(ctx, config);
			});
		};
