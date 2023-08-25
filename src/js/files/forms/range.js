// Підключення з node_modules
import * as noUiSlider from 'nouislider';

// Підключення стилів з scss/base/forms/range.scss 
// у файлі scss/forms/forms.scss

// Підключення стилів з node_modules
import 'nouislider/dist/nouislider.css';

export function rangeInit() {
	const priceSlider = document.querySelector('.price-form-filter__range');
	let input0 = document.querySelector('.input-number-0');
	let input1 = document.querySelector('.input-number-1');
	let inputs = [input0, input1];

	if (priceSlider) {
		let textFrom = priceSlider.getAttribute('data-from');
		let textTo = priceSlider.getAttribute('data-to');
		noUiSlider.create(priceSlider, {
			start: [500000, 3000000],
			connect: true,
			range: {
				'min': [500000],
				'max': [3000000]
			}
		});

		priceSlider.noUiSlider.on('update', function (values, handle) {
			inputs[handle].value = Math.round(values[handle]);
		});

		const priceStart = document.getElementById('price-start');
		const priceEnd = document.getElementById('price-end');
		priceStart.addEventListener('change', setPriceValues);
		priceEnd.addEventListener('change', setPriceValues);

		function setPriceValues() {
			let priceStartValue;
			let priceEndValue;
			if (priceStart.value != '') {
				priceStartValue = priceStart.value;
			}
			if (priceEnd.value != '') {
				priceEndValue = priceEnd.value;
			}
			priceSlider.noUiSlider.set([priceStartValue, priceEndValue]);
		}

	}
}
rangeInit();