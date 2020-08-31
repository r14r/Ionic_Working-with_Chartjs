		var DATA_COUNT = 16;

		var utils = Samples.utils;

		utils.srand(110);

		function colorize(opaque, ctx) {
			var v = ctx.dataset.data[ctx.dataIndex];
			var c = v < -50 ? '#D60000'
				: v < 0 ? '#F46300'
				: v < 50 ? '#0358B6'
				: '#44DE28';

			return opaque ? c : utils.transparentize(c, 1 - Math.abs(v / 150));
		}

		function generateData() {
			return utils.numbers({
				count: DATA_COUNT,
				min: -100,
				max: 100
			});
		}

		var data = {
			labels: utils.months({count: DATA_COUNT}),
			datasets: [{
				data: generateData()
			}]
		};

		var options = {
			legend: false,
			tooltips: false,
			elements: {
				rectangle: {
					backgroundColor: this.chartService.colorize.bind(null, false),
					borderColor: colorize.bind(null, true),
					borderWidth: 2
				}
			}
		};

		var chart = new Chart('chart-0', {
			type: 'bar',
			data: data,
			options: options
		});

		// eslint-disable-next-line no-unused-vars
		function randomize() {
			chart.data.datasets.forEach(function(dataset) {
				dataset.data = generateData();
			});
			chart.update();
		}

		// eslint-disable-next-line no-unused-vars
		function addDataset() {
			chart.data.datasets.push({
				data: generateData()
			});
			chart.update();
		}

		// eslint-disable-next-line no-unused-vars
		function removeDataset() {
			chart.data.datasets.shift();
			chart.update();
		}
