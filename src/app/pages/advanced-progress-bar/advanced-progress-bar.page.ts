import { Component, OnInit, ViewChild } from '@angular/core';
import * as Chart from 'chart.js';

import { ChartjsUtilsService } from 'src/app/services/chartjs-utils.service';

@Component({
	selector: 'app-advanced-data-labelling',
	templateUrl: './advanced-progress-bar.page.html',
	styleUrls: ['./advanced-progress-bar.page.scss'],
})
export class AdvancedProgressBarPage implements OnInit {

	@ViewChild('chartCanvas') chartCanvas;
	@ViewChild('animationProgress') animationProgress;

	chart: any;
	progress: any;

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
				text: 'Line Chart - Animation Progress Bar'
			},
			animation: {
				duration: 2000,
				onProgress: function (animation) {
					console.log('AdvancedProgressBarPage::onProgress |')
					this.progress.value = animation.currentStep / animation.numSteps;
				},
				onComplete: function () {
					window.setTimeout(function () {
						console.log('AdvancedProgressBarPage::onComplete |')
						this.progress.value = 0;
					}, 2000);
				}
			}
		}
	};

	constructor(public chartService: ChartjsUtilsService) {
		console.log('AdvancedProgressBarPage::constructor |')
	}

	ngOnInit() {
		console.log('AdvancedProgressBarPage::ngOnInit |')

		this.setupGraphs();
	}

	setupGraphs() {
		console.log('AdvancedProgressBarPage::setupGraphs |')

		this.chart = new Chart(this.chartCanvas.nativeElement, this.config);
	}

	randomizeData() {
		this.config.data.datasets.forEach(function (dataset) {
			dataset.data = dataset.data.map(function () {
				return this.chartService.randomScalingFactor();
			});
		});

		this.chart.update();
	}
}
