		var barChartData = {
			labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
			datasets: [{
				label: 'Dataset 1',
				backgroundColor: this.chartService.chartColors.red,
				data: [
					this.chartService.randomScalingFactor(),
					this.chartService.randomScalingFactor(),
					this.chartService.randomScalingFactor(),
					this.chartService.randomScalingFactor(),
					this.chartService.randomScalingFactor(),
					this.chartService.randomScalingFactor(),
					this.chartService.randomScalingFactor()
				]
			}, {
				label: 'Dataset 2',
				backgroundColor: this.chartService.chartColors.blue,
				data: [
					this.chartService.randomScalingFactor(),
					this.chartService.randomScalingFactor(),
					this.chartService.randomScalingFactor(),
					this.chartService.randomScalingFactor(),
					this.chartService.randomScalingFactor(),
					this.chartService.randomScalingFactor(),
					this.chartService.randomScalingFactor()
				]
			}, {
				label: 'Dataset 3',
				backgroundColor: this.chartService.chartColors.green,
				data: [
					this.chartService.randomScalingFactor(),
					this.chartService.randomScalingFactor(),
					this.chartService.randomScalingFactor(),
					this.chartService.randomScalingFactor(),
					this.chartService.randomScalingFactor(),
					this.chartService.randomScalingFactor(),
					this.chartService.randomScalingFactor()
				]
			}]

		};
		window.onload = function() {
			var ctx = document.getElementById('canvas').getContext('2d');
			window.myBar = new Chart(ctx, {
				type: 'bar',
				data: barChartData,
				options: {
					title: {
						display: true,
						text: 'Chart.js Bar Chart - Stacked'
					},
					tooltips: {
						mode: 'index',
						intersect: false
					},
					responsive: true,
					scales: {
						xAxes: [{
							stacked: true,
						}],
						yAxes: [{
							stacked: true
						}]
					}
				}
			});
		};

		document.getElementById('randomizeData').addEventListener('click', function() {
			barChartData.datasets.forEach(function(dataset) {
				dataset.data = dataset.data.map(function() {
					return this.chartService.randomScalingFactor();
				});
			});
			window.myBar.update();
		});
