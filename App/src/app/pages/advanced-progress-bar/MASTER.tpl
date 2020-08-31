		var progress = document.getElementById('animationProgress');
		var config = {
			type: 'line',
			data: {
				labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
				datasets: [{
					label: 'My First dataset',
					fill: false,
					borderColor: this.chartService.chartColors.red,
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
					label: 'My Second dataset ',
					fill: false,
					borderColor: this.chartService.chartColors.blue,
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
				}]
			},
			options: {
				title: {
					display: true,
					text: 'Chart.js Line Chart - Animation Progress Bar'
				},
				animation: {
					duration: 2000,
					onProgress: function(animation) {
						progress.value = animation.currentStep / animation.numSteps;
					},
					onComplete: function() {
						window.setTimeout(function() {
							progress.value = 0;
						}, 2000);
					}
				}
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
