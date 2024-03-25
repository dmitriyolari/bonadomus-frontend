/*
Документація по роботі у шаблоні: 
Документація слайдера: https://swiperjs.com/
Сніппет(HTML): swiper
*/

// Підключаємо слайдер Swiper з node_modules
// При необхідності підключаємо додаткові модулі слайдера, вказуючи їх у {} через кому
// Приклад: { Navigation, Autoplay }
import Swiper from 'swiper';
import { Navigation, Pagination, EffectFade, FreeMode, Scrollbar } from 'swiper/modules';
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


let windowWidth = window.innerWidth;
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
	if (document.querySelector('.top-object-page__slider') && windowWidth < 768) { // Вказуємо склас потрібного слайдера
		// Створюємо слайдер
		new Swiper('.top-object-page__slider', { // Вказуємо склас потрібного слайдера
			// Підключаємо модулі слайдера
			// для конкретного випадку
			modules: [Pagination, EffectFade],
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
				clickable: true,
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
				},
				768: {
				}
			},

			// Події
			on: {

			}
		});
	}
	if (document.querySelector('.district__slider')) { // Вказуємо склас потрібного слайдера
		// Створюємо слайдер
		new Swiper('.district__slider', { // Вказуємо склас потрібного слайдера
			// Підключаємо модулі слайдера
			// для конкретного випадку
			modules: [Pagination, Navigation, FreeMode],
			observer: true,
			observeParents: true,
			speed: 800,
			slidesPerView: 3,
			watchOverflow: true,
			freeMode: true,
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
				clickable: true
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
					spaceBetween: 12,
					slidesPerView: "auto",

				},
				768: {
					freeMode: false,
					spaceBetween: 30,
					// Кнопки "вліво/вправо"
					navigation: {
						prevEl: '.district-button_prev',
						nextEl: '.district-button_next',
					},
				}
			},

			// Події
			on: {

			}
		});
	}
	if (document.querySelector('.top-catalog-page__slider')) { // Вказуємо склас потрібного слайдера
		// Створюємо слайдер
		new Swiper('.top-catalog-page__slider', { // Вказуємо склас потрібного слайдера
			// Підключаємо модулі слайдера
			// для конкретного випадку
			modules: [Navigation, FreeMode],
			observer: true,
			observeParents: true,
			speed: 800,
			spaceBetween: 10,
			watchOverflow: true,
			freeMode: true,
			slidesPerView: "auto",
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


			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Брейкпоінти
			breakpoints: {
				768: {
					// Кнопки "вліво/вправо"
					navigation: {
						prevEl: '.catalog-button_prev',
						nextEl: '.catalog-button_next',
					},
				}
			},

			// Події
			on: {

			}
		});
	}
	if (document.querySelector('.object-features__slider') && windowWidth < 768) { // Вказуємо склас потрібного слайдера
		// Створюємо слайдер
		new Swiper('.object-features__slider', { // Вказуємо склас потрібного слайдера
			// Підключаємо модулі слайдера
			// для конкретного випадку
			modules: [Scrollbar, FreeMode],
			observer: true,
			observeParents: true,
			slidesPerView: 'auto',
			spaceBetween: 0,
			speed: 800,
			watchOverflow: true,
			freeMode: true,
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
				dragSize: 20,
			},
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

			// pagination: {
			// 	el: '.swiper-pagination',
			// 	clickable: false,
			// },


			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Брейкпоінти
			breakpoints: {
				// 320: {
				// },
				// 768: {
				// 	touchRatio: 0,
				// 	// Кнопки "вліво/вправо"
				// 	navigation: {
				// 		prevEl: '.card-button_prev',
				// 		nextEl: '.card-button_next',
				// 	},
				// }
			},

			// Події
			on: {

			}
		});
	}
	if (document.querySelector('.object-apartment__slider')) { // Вказуємо склас потрібного слайдера
		// Створюємо слайдер
		new Swiper('.object-apartment__slider', { // Вказуємо склас потрібного слайдера
			// Підключаємо модулі слайдера
			// для конкретного випадку
			modules: [Pagination, Navigation],
			observer: true,
			observeParents: true,
			slidesPerView: 3,
			spaceBetween: 30,
			speed: 800,
			watchOverflow: true,
			//autoHeight: true,
			//simulateTouch: false,
			//loop: true,
			//preloadImages: false,
			//lazy: true,
			// Пагінація

			pagination: {
				el: '.swiper-pagination',
				clickable: true,
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
				},
				480: {
					slidesPerView: 2,
				},
				768: {
					slidesPerView: 3,
				}
			},

			// Події
			on: {

			}
		});
	}
	if (document.querySelector('.gallery-slider')) { // Вказуємо склас потрібного слайдера
		// Створюємо слайдер
		let gallerySlider = new Swiper('.gallery-slider', { // Вказуємо склас потрібного слайдера
			// Підключаємо модулі слайдера
			// для конкретного випадку
			modules: [Pagination, Navigation, EffectFade],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 0,
			speed: 800,
			watchOverflow: true,
			effect: 'fade',
			//autoHeight: true,
			//simulateTouch: false,
			//loop: true,
			//preloadImages: false,
			//lazy: true,
			// Пагінація

			pagination: {
				el: '.gallery-pagination',
			},
			navigation: {
				prevEl: '.gallery-button_prev',
				nextEl: '.gallery-button_next',
			},


			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Брейкпоінти
			// breakpoints: {
			// 	320: {
			// 		slidesPerView: 1,
			// 	},
			// 	480: {
			// 		slidesPerView: 2,
			// 	},
			// 	768: {
			// 		slidesPerView: 3,
			// 	}
			// },

			// Події
			on: {

			}
		});

		let mySliderAllSlides = document.querySelector('.gallery-fraction__total');
		let mySliderCurrentSlide = document.querySelector('.gallery-fraction__current');

		mySliderAllSlides.innerHTML = gallerySlider.slides.length;

		gallerySlider.on('slideChange', function () {
			let currentSlide = ++gallerySlider.realIndex;

			mySliderCurrentSlide.innerHTML = currentSlide;
		})
	}
	if (document.querySelector('.command__slider')) { // Вказуємо склас потрібного слайдера
		// Створюємо слайдер
		new Swiper('.command__slider', { // Вказуємо склас потрібного слайдера
			// Підключаємо модулі слайдера
			// для конкретного випадку
			modules: [Pagination, Navigation, FreeMode],
			observer: true,
			observeParents: true,
			speed: 800,
			watchOverflow: true,
			freeMode: true,
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
					slidesPerView: "auto",
					spaceBetween: 20,
				},
				768: {
					freeMode: false,
					slidesPerView: 4,
					spaceBetween: 30,
					// Кнопки "вліво/вправо"
					navigation: {
						prevEl: '.command-swiper_prev',
						nextEl: '.command-swiper_next',
					},
				}
			},

			// Події
			on: {

			}
		});
	}
	if (document.querySelector('.reviews__slider')) { // Вказуємо склас потрібного слайдера
		// Створюємо слайдер
		new Swiper('.reviews__slider', { // Вказуємо склас потрібного слайдера
			// Підключаємо модулі слайдера
			// для конкретного випадку
			modules: [Navigation],
			observer: true,
			observeParents: true,
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

			// pagination: {
			// 	el: '.swiper-pagination',
			// },

			// Кнопки "вліво/вправо"
			navigation: {
				prevEl: '.reviews-swiper_prev',
				nextEl: '.reviews-swiper_next',
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
					spaceBetween: 0,
					slidesPerView: 1,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 30,
				}
			},

			// Події
			on: {

			}
		});
	}
	if (document.querySelector('.top-object-apartment__slider')) { // Вказуємо склас потрібного слайдера
		// Створюємо слайдер
		new Swiper('.top-object-apartment__slider', { // Вказуємо склас потрібного слайдера
			// Підключаємо модулі слайдера
			// для конкретного випадку
			modules: [Navigation, Pagination],
			observer: true,
			observeParents: true,
			speed: 800,
			watchOverflow: true,
			autoHeight: true,
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
				prevEl: '.top-object-apartment-btn--left',
				nextEl: '.top-object-apartment-btn--right',
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
					spaceBetween: 0,
					slidesPerView: 1,
				},
			},

			// Події
			on: {

			}
		});
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

initSliders();
window.addEventListener("DOMContentLoaded", function (e) {
	// Запуск ініціалізації слайдерів
	// Запуск ініціалізації скролла на базі слайдера (за класом swiper_scroll)
	//initSlidersScroll();
});