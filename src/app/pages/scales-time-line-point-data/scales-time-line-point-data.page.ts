import { Component, OnInit, ViewChild } from '@angular/core';
import * as Chart from 'chart.js';
import * as moment from 'moment';

import { ChartjsUtilsService } from 'src/app/services/chartjs-utils.service';

@Component({
	selector: 'app-advanced-data-labelling',
	templateUrl: './scales-time-line-point-data.page.html',
	styleUrls: ['./scales-time-line-point-data.page.scss'],
})
export class ScalesTimeLinePointDataPage implements OnInit {

	@ViewChild('chartCanvas') chartCanvas;

	chart: any;

	config = {
		type: 'line',
		data: {
			datasets: [
				{
					label: 'Dataset with string point data',
					backgroundColor: this.chartService.color(this.chartService.chartColors.red), // @TODO: .alpha(0.5).rgbString(),
					borderColor: this.chartService.chartColors.red,
					fill: false,
					data: [
						{
							x: this.newDateString(0),
							y: this.chartService.randomScalingFactor()
						}, {
							x: this.newDateString(2),
							y: this.chartService.randomScalingFactor()
						}, {
							x: this.newDateString(4),
							y: this.chartService.randomScalingFactor()
						}, {
							x: this.newDateString(5),
							y: this.chartService.randomScalingFactor()
						}],
				}, {
					label: 'Dataset with date object point data',
					backgroundColor: this.chartService.color(this.chartService.chartColors.blue), // @TODO: .alpha(0.5).rgbString(),
					borderColor: this.chartService.chartColors.blue,
					fill: false,
					data: [
						{
							x: this.newDate(0),
							y: this.chartService.randomScalingFactor()
						}, {
							x: this.newDate(2),
							y: this.chartService.randomScalingFactor()
						}, {
							x: this.newDate(4),
							y: this.chartService.randomScalingFactor()
						}, {
							x: this.newDate(5),
							y: this.chartService.randomScalingFactor()
						}]
				}
			]
		},
		options: {
			responsive: true,
			title: {
				display: true,
				text: 'Chart.js Time Point Data'
			},
			scales: {
				xAxes: [{
					type: 'time',
					display: true,
					scaleLabel: {
						display: true,
						labelString: 'Date'
					},
					ticks: {
						major: {
							fontStyle: 'bold',
							fontColor: '#FF0000'
						}
					}
				}],
				yAxes: [{
					display: true,
					scaleLabel: {
						display: true,
						labelString: 'value'
					}
				}]
			}
		}
	};

	constructor(private chartService: ChartjsUtilsService) {
		console.log('ChartPage::constructor |')
	}

	ngOnInit() {
		console.log('ChartPage::ngOnInit |')

		this.setupGraphs();
	}

	setupGraphs() {
		console.log('ChartPage::setupGraphs |')
		var color = Chart.helpers.color;

		this.chart = new Chart(this.chartCanvas.nativeElement, this.config);
	}

	newDate(days) {
		return moment().add(days, 'd').toDate();
	}

	newDateString(days) {
		return moment().add(days, 'd').format();
	}

	randomizeData() {
		this.config.data.datasets.forEach(dataset => {
			//dataset.data.forEach(dataObj => {
			//	dataObj.y = this.chartService.randomScalingFactor();
			//});
		});

		this.chart.update();
	};

	addData() {
		if (this.config.data.datasets.length > 0) {
			//this.config.data.datasets[0].data.push({
			//	x: this.newDateString(this.config.data.datasets[0].data.length + 2),
			//	y: this.chartService.randomScalingFactor()
			//});
			//this.config.data.datasets[1].data.push({
			//	x: this.newDate(this.config.data.datasets[1].data.length + 2),
			//	y: this.chartService.randomScalingFactor()
			//});

			this.chart.update();
		}
	};

	removeData() {
		this.config.data.datasets.forEach(function (dataset) {
			dataset.data.pop();
		});

		this.chart.update();
	};


}
