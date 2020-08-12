		function createConfig(pointStyle) {
			return {
				type: 'line',
				data: {
					labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
					datasets: [{
						label: 'My First dataset',
						backgroundColor: this.chartService.chartColors.red,
						borderColor: this.chartService.chartColors.red,
						data: [10, 23, 5, 99, 67, 43, 0],
						fill: false,
						pointRadius: 10,
						pointHoverRadius: 15,
						showLine: false // no line shown
					}]
				},
				options: {
					responsive: true,
					title: {
						display: true,
						text: 'Point Style: ' + pointStyle
					},
					legend: {
						display: false
					},
					elements: {
						point: {
							pointStyle: pointStyle
						}
					}
				}
			};
		}

		window.onload = function() {
			var container = document.querySelector('.container');
			[
				'circle',
				'triangle',
				'rect',
				'rectRounded',
				'rectRot',
				'cross',
				'crossRot',
				'star',
				'line',
				'dash'
			].forEach(function(pointStyle) {
				var div = document.createElement('div');
				div.classList.add('chart-container');

				var canvas = document.createElement('canvas');
				div.appendChild(canvas);
				container.appendChild(div);

				var ctx = canvas.getContext('2d');
				var config = createConfig(pointStyle);
				new Chart(ctx, config);
			});
		};
