		var config = {
			type: 'line',
			data: {
				labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
				datasets: [{
					label: 'My First dataset',
					backgroundColor: this.chartService.chartColors.red,
					borderColor: this.chartService.chartColors.red,
					data: [10, 30, 50, 20, 25, 44, -10],
					fill: false,
				}, {
					label: 'My Second dataset',
					fill: false,
					backgroundColor: this.chartService.chartColors.blue,
					borderColor: this.chartService.chartColors.blue,
					data: [100, 33, 22, 19, 11, 49, 30],
				}]
			},
			options: {
				responsive: true,
				title: {
					display: true,
					text: 'Min and Max Settings'
				},
				scales: {
					yAxes: [{
						ticks: {
							min: 10,
							max: 50
						}
					}]
				}
			}
		};

		window.onload = function() {
			var ctx = document.getElementById('canvas').getContext('2d');
			window.myLine = new Chart(ctx, config);
		};
