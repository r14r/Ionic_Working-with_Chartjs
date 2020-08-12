import { Component, OnInit, ViewChild } from '@angular/core';
import * as Chart from 'chart.js';
import { ChartjsUtilsService } from 'src/app/services/chartjs-utils.service';

@Component({
	selector: 'app-advanced-data-labelling',
	templateUrl: './scales-toggle-scale-type.page.html',
	styleUrls: ['./scales-toggle-scale-type.page.scss'],
})
export class ScalesToggleScaleTypePage implements OnInit {

	@ViewChild('chartCanvas') chartCanvas;

	chart: any;
	type = 'linear';

	constructor(private chartService: ChartjsUtilsService) {
		console.log('ChartPage::constructor |')
	}

	ngOnInit() {
		console.log('ChartPage::ngOnInit |')

		this.setupGraphs();
	}

	setupGraphs() {
		console.log('ChartPage::setupGraphs |')

		this.type = 'linear';
		var config = {
			type: 'line',
			data: {
				labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
				datasets: [{
					label: 'My First dataset',
					backgroundColor: this.chartService.chartColors.red,
					borderColor: this.chartService.chartColors.red,
					fill: false,
					data: [
						this.chartService.randomScalingFactor(),
						this.chartService.randomScalingFactor(),
						this.chartService.randomScalingFactor(),
						this.chartService.randomScalingFactor(),
						this.chartService.randomScalingFactor(),
						this.chartService.randomScalingFactor(),
						this.chartService.randomScalingFactor()
					],
				}, {
					label: 'My Second dataset',
					backgroundColor: this.chartService.chartColors.blue,
					borderColor: this.chartService.chartColors.blue,
					fill: false,
					data: [
						this.chartService.randomScalingFactor(),
						this.chartService.randomScalingFactor(),
						this.chartService.randomScalingFactor(),
						this.chartService.randomScalingFactor(),
						this.chartService.randomScalingFactor(),
						this.chartService.randomScalingFactor(),
						this.chartService.randomScalingFactor()
					],
				}]
			},
			options: {
				responsive: true,
				title: {
					display: true,
					text: 'Chart.js Line Chart - ' + this.type
				},
				scales: {
					xAxes: [{
						display: true,
					}],
					yAxes: [{
						display: true,
						type: this.type
					}]
				}
			}
		};

		this.chart = new Chart(this.chartCanvas.nativeElement, config);

	}

	toggleScale() {
		this.type = this.type === 'linear' ? 'logarithmic' : 'linear';
		this.chart.options.title.text = 'Chart.js Line Chart - ' + this.type;
		this.chart.options.scales.yAxes[0] = {
			display: true,
			type: this.type
		};

		this.chart.update();
	};
}
