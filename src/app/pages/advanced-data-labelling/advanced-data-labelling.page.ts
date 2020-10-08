import { Component, OnInit, ViewChild } from '@angular/core';
import * as Chart from 'chart.js';
import { ChartjsUtilsService } from 'src/app/services/chartjs-utils.service';

@Component({
	selector: 'app-advanced-data-labelling',
	templateUrl: './advanced-data-labelling.page.html',
	styleUrls: ['./advanced-data-labelling.page.scss'],
})
export class AdvancedDataLabellingPage implements OnInit {

	@ViewChild('chartCanvas') chartCanvas;
	chart: any;

	constructor(public chartService: ChartjsUtilsService) {
		console.log('AdvancedProgressBarPage::constructor |')
	}

	ngOnInit() {
		console.log('AdvancedDataLabellingPage::ngOnInit |')

		this.setupGraphs();
		this.register_chart_plugin()
	}

	setupGraphs() {
		console.log('AdvancedDataLabellingPage::setupGraphs |')

		var barChartData = {
			labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
			datasets: [{
				type: 'bar',
				label: 'Dataset 1',
				backgroundColor: this.chartService.color(this.chartService.chartColors.red), // @TODO: .alpha(0.2).rgbString(),
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
				type: 'line',
				label: 'Dataset 2',
				backgroundColor: this.chartService.color(this.chartService.chartColors.blue), // @TODO: .alpha(0.2).rgbString(),
				borderColor: this.chartService.chartColors.blue,
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
				type: 'bar',
				label: 'Dataset 3',
				backgroundColor: this.chartService.color(this.chartService.chartColors.green), // @TODO: .alpha(0.2).rgbString(),
				borderColor: this.chartService.chartColors.green,
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

		this.chart = new Chart(this.chartCanvas.nativeElement, {
			type: 'bar',
			data: barChartData,
			options: {
				responsive: true,
			}
		});
	};

	register_chart_plugin() {
		Chart.plugins.register({
			afterDatasetsDraw: function (chart) {
				var ctx = chart.ctx;

				chart.data.datasets.forEach(function (dataset, i) {
					var meta = chart.getDatasetMeta(i);
					if (!meta.hidden) {
						meta.data.forEach(function (element, index) {
							// Draw the text in black, with the specified font
							ctx.fillStyle = 'rgb(0, 0, 0)';

							var fontSize = 16;
							var fontStyle = 'normal';
							var fontFamily = 'Helvetica Neue';
							ctx.font = Chart.helpers.fontString(fontSize, fontStyle, fontFamily);

							// Just naively convert to string for now
							var dataString = dataset.data[index].toString();

							// Make sure alignment settings are correct
							ctx.textAlign = 'center';
							ctx.textBaseline = 'middle';

							var padding = 5;
							// @TODO: var position = element.tooltipPosition();
							// ctx.fillText(dataString, position.x, position.y - (fontSize / 2) - padding);
						});
					}
				});
			}
		});
	}
}