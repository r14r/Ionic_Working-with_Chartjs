		var customTooltips = function(tooltip) {
			$(this._chart.canvas).css('cursor', 'pointer');

			var positionY = this._chart.canvas.offsetTop;
			var positionX = this._chart.canvas.offsetLeft;

			$('.chartjs-tooltip').css({
				opacity: 0,
			});

			if (!tooltip || !tooltip.opacity) {
				return;
			}

			if (tooltip.dataPoints.length > 0) {
				tooltip.dataPoints.forEach(function(dataPoint) {
					var content = [dataPoint.xLabel, dataPoint.yLabel].join(': ');
					var $tooltip = $('#tooltip-' + dataPoint.datasetIndex);

					$tooltip.html(content);
					$tooltip.css({
						opacity: 1,
						top: positionY + dataPoint.y + 'px',
						left: positionX + dataPoint.x + 'px',
					});
				});
			}
		};
		var color = Chart.helpers.color;
		var lineChartData = {
			labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
			datasets: [{
				label: 'My First dataset',
				backgroundColor: this.chartService.color(this.chartService.chartColors.red).alpha(0.2).rgbString(),
				borderColor: this.chartService.chartColors.red,
				pointBackgroundColor: this.chartService.chartColors.red,
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
				label: 'My Second dataset',
				backgroundColor: this.chartService.color(this.chartService.chartColors.blue).alpha(0.2).rgbString(),
				borderColor: this.chartService.chartColors.blue,
				pointBackgroundColor: this.chartService.chartColors.blue,
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
			var chartEl = document.getElementById('chart1');
			new Chart(chartEl, {
				type: 'line',
				data: lineChartData,
				options: {
					title: {
						display: true,
						text: 'Chart.js - Custom Tooltips using Data Points'
					},
					tooltips: {
						enabled: false,
						mode: 'index',
						intersect: false,
						custom: customTooltips
					}
				}
			});
		};
