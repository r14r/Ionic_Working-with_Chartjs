import { Component, OnInit, ViewChild } from '@angular/core';
import * as Chart from 'chart.js';
import { ChartjsUtilsService } from 'src/app/services/chartjs-utils.service';

@Component({
	selector: 'app-advanced-data-labelling',
	templateUrl: './charts-area-line-boundaries.page.html',
	styleUrls: ['./charts-area-line-boundaries.page.scss'],
})
export class ChartsAreaLineBoundariesPage implements OnInit {

	@ViewChild('chartCanvas') chartCanvas;
	chart: any;

	@ViewChild('chart0') chart0Canvas;
	@ViewChild('chart1') chart1Canvas;
	@ViewChild('chart2') chart2Canvas;
	@ViewChild('chart3') chart3Canvas;

	chartCanvases = [undefined, undefined, undefined, undefined];

	chartBondaries = [false, 'origin', 'start', 'end'];

	inputs = {
		min: -100,
		max: 100,
		count: 8,
		decimals: 2,
		continuity: 1
	}

	options = {
		maintainAspectRatio: false,
		spanGaps: false,
		elements: {
			line: {
				tension: 0.000001
			}
		},
		plugins: {
			filler: {
				propagate: false
			}
		},
		scales: {
			xAxes: [{
				ticks: {
					autoSkip: false,
					maxRotation: 0
				}
			}]
		}
	};

	config = {
		type: 'line',
		data: {
			labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
			datasets: [
				{
					label: 'Data 1',
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
					label: 'Data 2',
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
				text: 'Line Chart'
			}

		}
	};

	configMaster = {
		type: 'line',
		data: {
			labels: this.generateLabels(),
			datasets: [{
				backgroundColor: this.chartService.transparentize(this.chartService.chartColors.red),
				borderColor: this.chartService.chartColors.red,
				data: this.generateData(),
				label: 'Dataset',
				fill: 'start'
			}]
		},
		options: Chart.helpers.merge(this.options, {
			title: { text: 'fill: ' + 'start', display: true }
		})
	};

	setupGraphs() {
		console.log('ChartPage::setupGraphs | ')

		this.chart = new Chart(this.chartCanvas.nativeElement, this.configMaster);

		return;

		console.log('ChartPage::setupGraphs |')
		this.chartBondaries.forEach((boundary, index) => {
			console.log('ChartPage::setupGraphs | create chart for ', boundary, "=", index)

			this.chartService.srand(8);

			console.log('ChartPage::setupGraphs | create chart-' + index, ": ", this.chartCanvases[index])

			var chart = new Chart(this.chartCanvases[index], {
				type: 'line',
				data: {
					labels: this.generateLabels(),
					datasets: [{
						backgroundColor: this.chartService.transparentize(this.chartService.chartColors.red),
						borderColor: this.chartService.chartColors.red,
						data: this.generateData(),
						label: 'Dataset',
						fill: boundary
					}]
				},
				options: Chart.helpers.merge(this.options, {
					title: {
						text: 'fill: ' + boundary,
						display: true
					}
				})
			});

			console.log('ChartPage::setupGraphs | done ', chart)
		});
	}

	register_chart_plugin() {
		console.log('ChartPage::register_chart_plugin |')

		Chart.plugins.register({
			id: 'samples-filler-analyser',

			beforeInit: function (chart, options) {
				console.log('ChartPage::register_chart_plugin | beforeInit')

				this.element = document.getElementById(options.target);
			},

			afterUpdate: function (chart) {
				console.log('ChartPage::register_chart_plugin | afterUpdate')

				var datasets = chart.data.datasets;
				var element = this.element;
				var stats = [];
				var meta, i, ilen, dataset;

				if (!element) {
					return;
				}

				for (i = 0, ilen = datasets.length; i < ilen; ++i) {
					meta = chart.getDatasetMeta(i).$filler;
					if (meta) {
						dataset = datasets[i];
						stats.push({
							fill: dataset.fill,
							target: meta.fill,
							visible: meta.visible,
							index: i
						});
					}
				}

				this.element.innerHTML = '<table>' +
					'<tr>' +
					'<th>Dataset</th>' +
					'<th>Fill</th>' +
					'<th>Target (visibility)</th>' +
					'</tr>' +
					stats.map(function (stat) {
						var target = stat.target;
						var row =
							'<td><b>' + stat.index + '</b></td>' +
							'<td>' + JSON.stringify(stat.fill) + '</td>';

						if (target === false) {
							target = 'none';
						} else if (isFinite(target)) {
							target = 'dataset ' + target;
						} else {
							target = 'boundary "' + target + '"';
						}

						if (stat.visible) {
							row += '<td>' + target + '</td>';
						} else {
							row += '<td>(hidden)</td>';
						}

						return '<tr>' + row + '</tr>';
					}).join('') + '</table>';
			}
		});
	}

	toggleSmooth(btn) {
		console.log('ChartPage::toggleSmooth | ')

		var value = btn.classList.toggle('btn-on');
		//Chart.helpers.each(Chart.instances, function (chart) {
		//	chart.options.elements.line.tension = value ? 0.4 : 0.000001;
		//	chart.update();
		//});
	}

	randomizeData() {
		console.log('ChartPage::randomizeData | ')

		var seed = this.chartService.srand(10);
		//Chart.helpers.each(Chart.instances, function (chart) {
		//	this.chartService.srand(seed);

		//	chart.data.datasets.forEach(function (dataset) {
		//		dataset.data = this.generateData();
		//	});

		//	chart.update();
		//});
	}

	generateData(config = {}) {
		return this.chartService.numbers(Chart.helpers.merge(this.inputs, config || {}));
	}

	generateLabels(config = {}) {
		return this.chartService.months(Chart.helpers.merge({
			count: this.inputs.count,
			section: 3
		}, config || {}));
	}

	//
	//
	//
	constructor(public chartService: ChartjsUtilsService) {
		console.log('ChartPage::constructor |')
	}

	ngOnInit() {
		console.log('ChartPage::ngOnInit |')

		this.chartCanvases = [
			this.chart0Canvas.nativeElement, this.chart1Canvas.nativeElement, this.chart2Canvas.nativeElement, this.chart3Canvas.nativeElement
		];
		console.log('ChartPage::setupGraphs | chartCanvases = ', this.chartCanvases)

		this.setupGraphs();
		//this.register_chart_plugin();
	}
}
