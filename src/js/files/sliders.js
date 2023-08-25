/*
Документація по роботі у шаблоні: 
Документація слайдера: https://swiperjs.com/
Сніппет(HTML): swiper
*/

// Підключаємо слайдер Swiper з node_modules
// При необхідності підключаємо додаткові модулі слайдера, вказуючи їх у {} через кому
// Приклад: { Navigation, Autoplay }
import Swiper from 'swiper';
import { Navigation, Pagination, EffectFade } from 'swiper/modules';
/*
Основні модулі слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Детальніше дивись https://swiperjs.com/
*/

// Стилі Swiper
// Базові стилі
import "../../scss/base/swiper.scss";
// Повний набір стилів з scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Повний набір стилів з node_modules
// import 'swiper/css';

// Ініціалізація слайдерів
function initSliders() {
	// Список слайдерів
	// Перевіряємо, чи є слайдер на сторінці
	if (document.querySelector('.card__slider')) { // Вказуємо склас потрібного слайдера
		// Створюємо слайдер
		new Swiper('.card__slider', { // Вказуємо склас потрібного слайдера
			// Підключаємо модулі слайдера
			// для конкретного випадку
			modules: [Pagination, EffectFade, Navigation],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 0,
			speed: 800,
			watchOverflow: true,
			//autoHeight: true,
			//simulateTouch: false,
			//loop: true,
			//preloadImages: false,
			//lazy: true,


			// Ефекти
			effect: 'fade',
			/*
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		},
		*/

			// Пагінація

			pagination: {
				el: '.swiper-pagination',
				clickable: false,
			},


			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Брейкпоінти
			breakpoints: {
				375: {
				},
				768: {
					touchRatio: 0,
					// Кнопки "вліво/вправо"
					navigation: {
						prevEl: '.card-button_prev',
						nextEl: '.card-button_next',
					},
				}
			},

			// Події
			on: {

			}
		});
	}


	if (document.querySelector('.cards-main__slider')) { // Вказуємо склас потрібного слайдера
		let arrsPrev = document.querySelectorAll('.cards-main-button_prev');
		let arrsNext = document.querySelectorAll('.cards-main-button_next');
		let cardMainSlider = document.querySelectorAll('.cards-main__slider');

		for (let index = 0; index < cardMainSlider.length; index++) {
			const slider = cardMainSlider[index];

			new Swiper(slider, { // Вказуємо склас потрібного слайдера
				// Підключаємо модулі слайдера
				// для конкретного випадку
				modules: [Pagination, Navigation],
				observer: true,
				observeParents: true,
				spaceBetween: 0,
				speed: 800,
				watchOverflow: true,
				//autoHeight: true,
				//simulateTouch: false,
				//loop: true,
				//preloadImages: false,
				//lazy: true,


				// Ефекти
				// effect: 'fade',
				/*
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

				// Пагінація

				pagination: {
					el: '.swiper-pagination',
					clickable: true,
				},

				// Кнопки "вліво/вправо"
				navigation: {
					prevEl: arrsPrev[index],
					nextEl: arrsNext[index],
				},


				// Скроллбар
				/*
				scrollbar: {
					el: '.swiper-scrollbar',
					draggable: true,
				},
				*/

				// Брейкпоінти
				breakpoints: {
					320: {
						slidesPerView: 1,
						spaceBetween: 10,
					},
					640: {
						slidesPerView: 2,
						spaceBetween: 30,
					},
					992: {
						slidesPerView: 3,
						spaceBetween: 30,
					}
				},

				// Події
				on: {

				}
			});
		}
		// Створюємо слайдер
	}
}
// Скролл на базі слайдера (за класом swiper scroll для оболонки слайдера)
function initSlidersScroll() {
	let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
	if (sliderScrollItems.length > 0) {
		for (let index = 0; index < sliderScrollItems.length; index++) {
			const sliderScrollItem = sliderScrollItems[index];
			const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
			const sliderScroll = new Swiper(sliderScrollItem, {
				observer: true,
				observeParents: true,
				direction: 'vertical',
				slidesPerView: 'auto',
				freeMode: {
					enabled: true,
				},
				scrollbar: {
					el: sliderScrollBar,
					draggable: true,
					snapOnRelease: false
				},
				mousewheel: {
					releaseOnEdges: true,
				},
			});
			sliderScroll.scrollbar.updateSize();
		}
	}
}

window.addEventListener("load", function (e) {
	// Запуск ініціалізації слайдерів
	initSliders();
	// Запуск ініціалізації скролла на базі слайдера (за класом swiper_scroll)
	//initSlidersScroll();
});