		function createConfig() {
			return {
				type: 'line',
				data: {
					labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
					datasets: [{
						label: 'Dataset',
						borderColor: this.chartService.chartColors.red,
						backgroundColor: this.chartService.chartColors.red,
						data: [10, 30, 46, 2, 8, 50, 0],
						fill: false,
					}]
				},
				options: {
					responsive: true,
					title: {
						display: true,
						text: 'Sample tooltip with border'
					},
					tooltips: {
						position: 'nearest',
						mode: 'index',
						intersect: false,
						yPadding: 10,
						xPadding: 10,
						caretSize: 8,
						backgroundColor: 'rgba(72, 241, 12, 1)',
						titleFontColor: this.chartService.chartColors.black,
						bodyFontColor: this.chartService.chartColors.black,
						borderColor: 'rgba(0,0,0,1)',
						borderWidth: 4
					},
				}
			};
		}

		window.onload = function() {
			var container = document.querySelector('.container');
			var div = document.createElement('div');
			div.classList.add('chart-container');

			var canvas = document.createElement('canvas');
			div.appendChild(canvas);
			container.appendChild(div);

			var ctx = canvas.getContext('2d');
			var config = createConfig();
			new Chart(ctx, config);
		};
