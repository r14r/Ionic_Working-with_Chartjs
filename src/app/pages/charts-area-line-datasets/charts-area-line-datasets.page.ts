import { Component, OnInit, ViewChild } from '@angular/core';
import * as Chart from 'chart.js';
import { ChartjsUtilsService } from 'src/app/services/chartjs-utils.service';

@Component({
	selector: 'app-advanced-data-labelling',
	templateUrl: './charts-area-line-datasets.page.html',
	styleUrls: ['./charts-area-line-datasets.page.scss'],
})
export class ChartsAreaLineDatasetsPage implements OnInit {

	toggle_propagate: any;
	toggle_smooth: any;

	@ViewChild('chartCanvas') chartCanvas;
	chart: any;

	inputs = { min: 20, max: 80, count: 8, decimals: 2, continuity: 1 };

	data = {
		labels: this.generateLabels(),
		datasets: [
			{
				backgroundColor: this.chartService.transparentize(this.chartService.chartColors.red),
				borderColor: this.chartService.chartColors.red,
				data: this.generateData(),
				hidden: true,
				label: 'D0'
			}, {
				backgroundColor: this.chartService.transparentize(this.chartService.chartColors.orange),
				borderColor: this.chartService.chartColors.orange,
				data: this.generateData(),
				label: 'D1',
				fill: '-1'
			}, {
				backgroundColor: this.chartService.transparentize(this.chartService.chartColors.yellow),
				borderColor: this.chartService.chartColors.yellow,
				data: this.generateData(),
				hidden: true,
				label: 'D2',
				fill: 1
			}, {
				backgroundColor: this.chartService.transparentize(this.chartService.chartColors.green),
				borderColor: this.chartService.chartColors.green,
				data: this.generateData(),
				label: 'D3',
				fill: '-1'
			}, {
				backgroundColor: this.chartService.transparentize(this.chartService.chartColors.blue),
				borderColor: this.chartService.chartColors.blue,
				data: this.generateData(),
				label: 'D4',
				fill: '-1'
			}, {
				backgroundColor: this.chartService.transparentize(this.chartService.chartColors.grey),
				borderColor: this.chartService.chartColors.grey,
				data: this.generateData(),
				label: 'D5',
				fill: '+2'
			}, {
				backgroundColor: this.chartService.transparentize(this.chartService.chartColors.purple),
				borderColor: this.chartService.chartColors.purple,
				data: this.generateData(),
				label: 'D6',
				fill: false
			}, {
				backgroundColor: this.chartService.transparentize(this.chartService.chartColors.red),
				borderColor: this.chartService.chartColors.red,
				data: this.generateData(),
				label: 'D7',
				fill: 8
			}, {
				backgroundColor: this.chartService.transparentize(this.chartService.chartColors.orange),
				borderColor: this.chartService.chartColors.orange,
				data: this.generateData(),
				hidden: true,
				label: 'D8',
				fill: 'end'
			}]
	};

	config = {
		type: 'line',
		data: this.data,
		options: {
			spanGaps: false,
			elements: { line: { tension: 0.000001 } },
			scales: { yAxes: [{ stacked: true }] },
			plugins: {
				filler: { propagate: false }, 'samples-filler-analyser': { target: 'chart-analyser' }
			},
			title: {
				display: true,
				text: 'Charts: Area Line Datasets'
			},
		}
	};

	constructor(public chartService: ChartjsUtilsService) {
		console.log('ChartsAreaLineDatasetsPage::constructor |')
	}

	ngOnInit() {
		console.log('ChartsAreaLineDatasetsPage::ngOnInit |')

		console.log('ChartsAreaLineDatasetsPage::ngOnInit | inputs  = ', this.inputs);
		console.log('ChartsAreaLineDatasetsPage::ngOnInit | data    = ', this.data);
		console.log('ChartsAreaLineDatasetsPage::ngOnInit | config  = ', this.config);

		this.setupGraphs();
	}

	setupGraphs() {
		console.log('ChartsAreaLineDatasetsPage::setupGraphs |')

		this.chart = new Chart(this.chartCanvas.nativeElement, this.config);
	}

	generateData(): any {
		console.log('ChartsAreaLineDatasetsPage::generateData | ');

		return this.chartService.numbers(this.inputs);
	}

	generateLabels() {
		console.log('ChartsAreaLineDatasetsPage::generateLabels | inputs = ', this.inputs);

		return this.chartService.months({ count: this.inputs.count });
	}

	randomizeDataX() {
		this.config.data.datasets.forEach(function (dataset) {
			dataset.data = dataset.data.map(function () {
				return this.chartService.randomScalingFactor();
			});
		});

		this.chart.update();
	}	

	randomizeData() {
		console.log('ChartsAreaLineDatasetsPage::randomizeData |')

		this.chart.data.datasets.forEach(dataset => {
			dataset.data = this.generateData();
		});

		this.chart.update();
	}

	toggle_propagate_changed() {
		console.log('ChartsAreaLineDatasetsPage::toggle_propagate_changed |')

		this.chart.options.plugins.filler.propagate = this.toggle_propagate;
		this.chart.update();
	}

	toggle_smooth_changed() {
		console.log('ChartsAreaLineDatasetsPage::toggle_smooth_changed | ')

		this.chart.options.elements.line.tension = this.toggle_smooth ? 0.4 : 0.000001;
		this.chart.update();
	}
}
