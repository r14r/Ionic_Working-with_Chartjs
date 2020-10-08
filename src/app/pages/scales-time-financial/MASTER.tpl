		function randomNumber(min, max) {
			return Math.random() * (max - min) + min;
		}

		function randomBar(date, lastClose) {
			var open = randomNumber(lastClose * 0.95, lastClose * 1.05);
			var close = randomNumber(open * 0.95, open * 1.05);
			return {
				t: date.valueOf(),
				y: close
			};
		}

		var dateFormat = 'MMMM DD YYYY';
		var date = moment('April 01 2017', dateFormat);
		var data = [randomBar(date, 30)];
		var labels = [date];
		while (data.length < 60) {
			date = date.clone().add(1, 'd');
			if (date.isoWeekday() <= 5) {
				data.push(randomBar(date, data[data.length - 1].y));
				labels.push(date);
			}
		}

		var ctx = document.getElementById('chart1').getContext('2d');
		ctx.canvas.width = 1000;
		ctx.canvas.height = 300;

		var color = Chart.helpers.color;
		var cfg = {
			type: 'bar',
			data: {
				labels: labels,
				datasets: [{
					label: 'CHRT - Chart.js Corporation',
					backgroundColor: this.chartService.color(this.chartService.chartColors.red).alpha(0.5).rgbString(),
					borderColor: this.chartService.chartColors.red,
					data: data,
					type: 'line',
					pointRadius: 0,
					fill: false,
					lineTension: 0,
					borderWidth: 2
				}]
			},
			options: {
				scales: {
					xAxes: [{
						type: 'time',
						distribution: 'series',
						ticks: {
							source: 'labels'
						}
					}],
					yAxes: [{
						scaleLabel: {
							display: true,
							labelString: 'Closing price ($)'
						}
					}]
				}
			}
		};
		var chart = new Chart(ctx, cfg);

		document.getElementById('update').addEventListener('click', function() {
			var type = document.getElementById('type').value;
			chart.config.data.datasets[0].type = type;
			chart.update();
		});

