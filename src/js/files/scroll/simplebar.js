// Підключення плагіна з node_modules
import SimpleBar from 'simplebar';
// Підключення стилів з node_modules
import 'simplebar/dist/simplebar.css';

// Додаємо до блоку атрибут data-simplebar

// Також можна ініціалізувати наступним кодом, застосовуючи налаштування
/*
if (document.querySelectorAll('[data-simplebar]').length) {
	document.querySelectorAll('[data-simplebar]').forEach(scrollBlock => {
		new SimpleBar(scrollBlock, {
			autoHide: false
		});
	});
}
*/
let windowWidth = window.innerWidth;
let formFilter = document.querySelector('.popup-filter__form');
let customSelect = document.querySelector('.custom-select-filter__content');

if (windowWidth < 768 && formFilter) {
	formFilter.removeAttribute('data-simplebar')
} else {
	new SimpleBar(formFilter, {
		autoHide: false
	});
}
//===============================================================================================
new SimpleBar(customSelect, {
	autoHide: false
});