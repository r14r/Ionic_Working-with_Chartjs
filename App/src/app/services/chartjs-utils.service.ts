import { Injectable } from '@angular/core';
import * as Chart from 'chart.js';

@Injectable({
	providedIn: 'root'
})
export class ChartjsUtilsService {

	_seed: any;

	chartColors = {
		red: 'rgb(255, 99, 132)',
		orange: 'rgb(255, 159, 64)',
		yellow: 'rgb(255, 205, 86)',
		green: 'rgb(75, 192, 192)',
		blue: 'rgb(54, 162, 235)',
		purple: 'rgb(153, 102, 255)',
		grey: 'rgb(201, 203, 207)'
	};

	_month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
	_colors = ['#4dc9f6', '#f67019', '#f53794', '#537bc4', '#acc236', '#166a8f', '#00a950', '#58595b', '#8549ba'];

	_items = [{
		title: 'Bar charts',
		items: [{
			title: 'Vertical',
			path: 'charts/bar/vertical.html'
		}, {
			title: 'Horizontal',
			path: 'charts/bar/horizontal.html'
		}, {
			title: 'Multi axis',
			path: 'charts/bar/multi-axis.html'
		}, {
			title: 'Stacked',
			path: 'charts/bar/stacked.html'
		}, {
			title: 'Stacked groups',
			path: 'charts/bar/stacked-group.html'
		}]
	}, {
		title: 'Line charts',
		items: [{
			title: 'Basic',
			path: 'charts/line/basic.html'
		}, {
			title: 'Multi axis',
			path: 'charts/line/multi-axis.html'
		}, {
			title: 'Stepped',
			path: 'charts/line/stepped.html'
		}, {
			title: 'Interpolation',
			path: 'charts/line/interpolation-modes.html'
		}, {
			title: 'Line styles',
			path: 'charts/line/line-styles.html'
		}, {
			title: 'Point styles',
			path: 'charts/line/point-styles.html'
		}, {
			title: 'Point sizes',
			path: 'charts/line/point-sizes.html'
		}]
	}, {
		title: 'Area charts',
		items: [{
			title: 'Boundaries (line)',
			path: 'charts/area/line-boundaries.html'
		}, {
			title: 'Datasets (line)',
			path: 'charts/area/line-datasets.html'
		}, {
			title: 'Stacked (line)',
			path: 'charts/area/line-stacked.html'
		}, {
			title: 'Radar',
			path: 'charts/area/radar.html'
		}]
	}, {
		title: 'Other charts',
		items: [{
			title: 'Scatter',
			path: 'charts/scatter/basic.html'
		}, {
			title: 'Scatter - Multi axis',
			path: 'charts/scatter/multi-axis.html'
		}, {
			title: 'Doughnut',
			path: 'charts/doughnut.html'
		}, {
			title: 'Pie',
			path: 'charts/pie.html'
		}, {
			title: 'Polar area',
			path: 'charts/polar-area.html'
		}, {
			title: 'Radar',
			path: 'charts/radar.html'
		}, {
			title: 'Combo bar/line',
			path: 'charts/combo-bar-line.html'
		}]
	}, {
		title: 'Linear scale',
		items: [{
			title: 'Step size',
			path: 'scales/linear/step-size.html'
		}, {
			title: 'Min & max',
			path: 'scales/linear/min-max.html'
		}, {
			title: 'Min & max (suggested)',
			path: 'scales/linear/min-max-suggested.html'
		}]
	}, {
		title: 'Logarithmic scale',
		items: [{
			title: 'Line',
			path: 'scales/logarithmic/line.html'
		}, {
			title: 'Scatter',
			path: 'scales/logarithmic/scatter.html'
		}]
	}, {
		title: 'Time scale',
		items: [{
			title: 'Line',
			path: 'scales/time/line.html'
		}, {
			title: 'Line (point data)',
			path: 'scales/time/line-point-data.html'
		}, {
			title: 'Time Series',
			path: 'scales/time/financial.html'
		}, {
			title: 'Combo',
			path: 'scales/time/combo.html'
		}]
	}, {
		title: 'Scale options',
		items: [{
			title: 'Grid lines display',
			path: 'scales/gridlines-display.html'
		}, {
			title: 'Grid lines style',
			path: 'scales/gridlines-style.html'
		}, {
			title: 'Multiline labels',
			path: 'scales/multiline-labels.html'
		}, {
			title: 'Filtering Labels',
			path: 'scales/filtering-labels.html'
		}, {
			title: 'Non numeric Y Axis',
			path: 'scales/non-numeric-y.html'
		}, {
			title: 'Toggle Scale Type',
			path: 'scales/toggle-scale-type.html'
		}]
	}, {
		title: 'Legend',
		items: [{
			title: 'Positioning',
			path: 'legend/positioning.html'
		}, {
			title: 'Point style',
			path: 'legend/point-style.html'
		}]
	}, {
		title: 'Tooltip',
		items: [{
			title: 'Positioning',
			path: 'tooltips/positioning.html'
		}, {
			title: 'Interactions',
			path: 'tooltips/interactions.html'
		}, {
			title: 'Callbacks',
			path: 'tooltips/callbacks.html'
		}, {
			title: 'Border',
			path: 'tooltips/border.html'
		}, {
			title: 'HTML tooltips (line)',
			path: 'tooltips/custom-line.html'
		}, {
			title: 'HTML tooltips (pie)',
			path: 'tooltips/custom-pie.html'
		}, {
			title: 'HTML tooltips (points)',
			path: 'tooltips/custom-points.html'
		}]
	}, {
		title: 'Scriptable',
		items: [{
			title: 'Bubble Chart',
			path: 'scriptable/bubble.html'
		}]
	}, {
		title: 'Advanced',
		items: [{
			title: 'Progress bar',
			path: 'advanced/progress-bar.html'
		}, {
			title: 'Data labelling (plugin)',
			path: 'advanced/data-labelling.html'
		}]
	}];

	constructor() {
		this.srand(Date.now());
	}

	srand(seed) {
		this._seed = seed;
	}

	rand(min, max) {
		var seed = this._seed;
		min = min === undefined ? 0 : min;
		max = max === undefined ? 1 : max;
		this._seed = (seed * 9301 + 49297) % 233280;
		return min + (this._seed / 233280) * (max - min);
	}

	numbers(config) {
		var cfg = config || {};
		var min = cfg.min || 0;
		var max = cfg.max || 1;
		var from = cfg.from || [];
		var count = cfg.count || 8;
		var decimals = cfg.decimals || 8;
		var continuity = cfg.continuity || 1;
		var dfactor = Math.pow(10, decimals) || 0;
		var data = [];
		var i, value;

		for (i = 0; i < count; ++i) {
			value = (from[i] || 0) + this.rand(min, max);
			if (Math.random() <= continuity) {
				data.push(Math.round(dfactor * value) / dfactor);
			} else {
				data.push(null);
			}
		}

		return data;
	}

	labels(config) {
		var cfg = config || {};
		var min = cfg.min || 0;
		var max = cfg.max || 100;
		var count = cfg.count || 8;
		var step = (max - min) / count;
		var decimals = cfg.decimals || 8;
		var dfactor = Math.pow(10, decimals) || 0;
		var prefix = cfg.prefix || '';
		var values = [];
		var i;

		for (i = min; i < max; i += step) {
			values.push(prefix + Math.round(dfactor * i) / dfactor);
		}

		return values;
	}

	months(config) {
		var cfg = config || {};
		var count = cfg.count || 12;
		var section = cfg.section;
		var values = [];
		var i, value;

		for (i = 0; i < count; ++i) {
			value = this._month[Math.ceil(i) % 12];
			values.push(value.substring(0, section));
		}

		return values;
	}

	color(index) {
		return this._colors[index % this._colors.length];
	}

	transparentize(color, opacity = undefined) {
		var alpha = opacity === undefined ? 0.5 : 1 - opacity;

		return color;
		// return Color(color).alpha(alpha).rgbString();
	}

	randomScalingFactor() {
		// return Math.round(this.rand(-100, 100));

		return Math.ceil(Math.random() * 10.0) * Math.pow(10, Math.ceil(Math.random() * 5));
	}
}
