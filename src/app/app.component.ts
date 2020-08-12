import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
	selector: 'app-root',
	templateUrl: 'app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	public appPages = [
		{
			title: 'Main', icon: 'stats', data: [
				{ title: 'Chart Samples', url: '/chart', icon: 'stats' }
			]
		},
		{
			title: 'Scales', icon: 'stats', data: [
				{ title: 'Scales: Toggle Scale Type', url: '/scales-toggle-scale-type', icon: 'stats' }
				, { title: 'Scales: Timeline Point Data', url: '/scales-time-line-point-data', icon: 'pulse' }
			]
		},
		{
			title: 'Advanced', icon: 'stats', data: [
				{ title: 'Data Labelling', url: '/advanced-data-labelling', icon: 'stats' }
				, { title: 'Progress Bar', url: '/advanced-progress-bar', icon: 'help' }
			]
		},
		{
			title: 'Charts', icon: 'stats', data: [
				  { title: 'charts-area-line-boundaries', url: '/charts-area-line-boundaries', icon: 'help' }
				, { title: 'Area Line  Datasets', url: '/charts-area-line-datasets', icon: 'help' }
				, { title: 'charts-area-line-stacked', url: '/charts-area-line-stacked', icon: 'help' }
				, { title: 'charts-area-radar', url: '/charts-area-radar', icon: 'help' }
				, { title: 'charts-bar-horizontal', url: '/charts-bar-horizontal', icon: 'help' }
				, { title: 'charts-bar-multi-axis', url: '/charts-bar-multi-axis', icon: 'help' }
				, { title: 'charts-bar-stacked', url: '/charts-bar-stacked', icon: 'help' }
				, { title: 'charts-bar-stacked-group', url: '/charts-bar-stacked-group', icon: 'help' }
				, { title: 'charts-bar-vertical', url: '/charts-bar-vertical', icon: 'help' }
				, { title: 'charts-bubble', url: '/charts-bubble', icon: 'help' }
				, { title: 'charts-combo-bar-line', url: '/charts-combo-bar-line', icon: 'help' }
				, { title: 'charts-doughnut', url: '/charts-doughnut', icon: 'help' }
				, { title: 'charts-line-basic', url: '/charts-line-basic', icon: 'help' }
				, { title: 'charts-line-interpolation-modes', url: '/charts-line-interpolation-modes', icon: 'help' }
				, { title: 'charts-line-line-styles', url: '/charts-line-line-styles', icon: 'help' }
				, { title: 'charts-line-multi-axis', url: '/charts-line-multi-axis', icon: 'help' }
				, { title: 'charts-line-point-sizes', url: '/charts-line-point-sizes', icon: 'help' }
				, { title: 'charts-line-point-styles', url: '/charts-line-point-styles', icon: 'help' }
				, { title: 'charts-line-skip-points', url: '/charts-line-skip-points', icon: 'help' }
				, { title: 'charts-line-stepped', url: '/charts-line-stepped', icon: 'help' }
				, { title: 'charts-pie', url: '/charts-pie', icon: 'help' }
				, { title: 'charts-polar-area', url: '/charts-polar-area', icon: 'help' }
				, { title: 'charts-radar', url: '/charts-radar', icon: 'help' }
				, { title: 'charts-radar-skip-points', url: '/charts-radar-skip-points', icon: 'help' }
				, { title: 'charts-scatter-basic', url: '/charts-scatter-basic', icon: 'help' }
				, { title: 'charts-scatter-multi-axis', url: '/charts-scatter-multi-axis', icon: 'help' }
			]
		},
		{
			title: 'Legend', icon: 'stats', data: [
				  { title: 'legend-positioning', url: '/legend-positioning', icon: 'help' }
				, { title: 'legend-point-style', url: '/legend-point-style', icon: 'help' }
			]
		},
		{
			title: 'Scales', icon: 'stats', data: [
				{ title: 'scales-non-numeric-y', url: '/scales-non-numeric-y', icon: 'help' }
				, { title: 'scales-gridlines-display', url: '/scales-gridlines-display', icon: 'help' }
				, { title: 'scales-linear-min-max-suggested', url: '/scales-linear-min-max-suggested', icon: 'help' }
				, { title: 'scales-linear-step-size', url: '/scales-linear-step-size', icon: 'help' }
				, { title: 'scales-linear-min-max', url: '/scales-linear-min-max', icon: 'help' }
				, { title: 'scales-logarithmic-scatter', url: '/scales-logarithmic-scatter', icon: 'help' }
				, { title: 'scales-logarithmic-line', url: '/scales-logarithmic-line', icon: 'help' }
				, { title: 'scales-multiline-labels', url: '/scales-multiline-labels', icon: 'help' }
				, { title: 'scales-time-combo', url: '/scales-time-combo', icon: 'help' }
				, { title: 'scales-time-financial', url: '/scales-time-financial', icon: 'help' }
				, { title: 'scales-time-line', url: '/scales-time-line', icon: 'help' }
				, { title: 'scales-gridlines-style', url: '/scales-gridlines-style', icon: 'help' }
				, { title: 'scales-filtering-labels', url: '/scales-filtering-labels', icon: 'help' }
			]
		},
		{
			title: 'Scriptable', icon: 'stats', data: [
				{ title: 'scriptable-bubble', url: '/scriptable-bubble', icon: 'help' }
				, { title: 'scriptable-bar', url: '/scriptable-bar', icon: 'help' }
			]
		},
		{
			title: 'Tooltips', icon: 'stats', data: [
				{ title: 'tooltips-callbacks', url: '/tooltips-callbacks', icon: 'help' }
				, { title: 'tooltips-custom-points', url: '/tooltips-custom-points', icon: 'help' }
				, { title: 'tooltips-border', url: '/tooltips-border', icon: 'help' }
				, { title: 'tooltips-positioning', url: '/tooltips-positioning', icon: 'help' }
				, { title: 'tooltips-custom-line', url: '/tooltips-custom-line', icon: 'help' }
				, { title: 'tooltips-interactions', url: '/tooltips-interactions', icon: 'help' }
				, { title: 'tooltips-custom-pie', url: '/tooltips-custom-pie', icon: 'help' }
			]
		}
	];

	selectedMenu: any;

	constructor(
		private platform: Platform,
		private splashScreen: SplashScreen,
		private statusBar: StatusBar
	) {
		this.initializeApp();
	}

	initializeApp() {
		this.platform.ready().then(() => {
			this.statusBar.styleDefault();
			this.splashScreen.hide();
		});
	}

	checkPages() {
		this.appPages.forEach(page => {
			console.log(page.title, '|');
			page.data.forEach(item => {
				console.log(page.title, '|', item.title, '(', item.url, ')');
			})
		})
	}

	openPage(page, index) {
		console.log('AppComponent::openPage | page = ', page)

		if (this.selectedMenu) {
			this.selectedMenu = 0;
		} else {
			this.selectedMenu = index;
		}
	}
}
