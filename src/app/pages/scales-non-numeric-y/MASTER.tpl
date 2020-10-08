		var config = {
			type: 'line',
			data: {
				xLabels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
				yLabels: ['', 'Request Added', 'Request Viewed', 'Request Accepted', 'Request Solved', 'Solving Confirmed'],
				datasets: [{
					label: 'My First dataset',
					data: ['', 'Request Added', 'Request Added', 'Request Added', 'Request Viewed', 'Request Viewed', 'Request Viewed'],
					fill: false,
					borderColor: this.chartService.chartColors.red,
					backgroundColor: this.chartService.chartColors.red
				}]
			},
			options: {
				responsive: true,
				title: {
					display: true,
					text: 'Chart with Non Numeric Y Axis'
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
						type: 'category',
						position: 'left',
						display: true,
						scaleLabel: {
							display: true,
							labelString: 'Request State'
						},
						ticks: {
							reverse: true
						}
					}]
				}
			}
		};

		window.onload = function() {
			var ctx = document.getElementById('canvas').getContext('2d');
			window.myLine = new Chart(ctx, config);
		};
