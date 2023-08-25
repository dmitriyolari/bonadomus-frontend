// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
import { addLoadedClass } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";

addLoadedClass();

let body = document.querySelector('body');
let header = document.querySelector('header');
let windowWidth = window.innerWidth;

if (isMobile.any()) {
	body.classList.add('touch');
	let arrows = document.querySelectorAll('.arrow');

	if (arrows) {
		for (let index = 0; index < arrows.length; index++) {
			const arr = arrows[index];
			let thisLink = arr.previousElementSibling;
			let subMenu = arr.nextElementSibling;

			thisLink.classList.add('parent');

			arr.addEventListener('click', function (e) {
				subMenu.classList.toggle('open');
			})
		}
	}
} else {
	body.classList.add('mouse');

	let arrows = document.querySelectorAll('.arrow');

	if (arrows) {
		for (let index = 0; index < arrows.length; index++) {
			const arr = arrows[index];
			let thisLink = arr.previousElementSibling;

			thisLink.classList.add('parent');
		}
	}

}
//===============================================================================================
if (document.querySelector('.page-catalog')) {
	header.classList.add('header_bg');
}
//===============================================================================================
if (!header.classList.contains('header_bg')) {
	window.addEventListener('scroll', function (e) {
		let scrollY = window.scrollY;

		if (scrollY > (header.clientHeight)) {
			header.classList.add('header_bg');
		} else {
			header.classList.remove('header_bg');
		}
	})
}
//===============================================================================================
function subtitleChange() {
	let subtitles = document.querySelectorAll('.top-card-info__subtitle');

	if (subtitles) {
		for (let index = 0; index < subtitles.length; index++) {
			const subtitle = subtitles[index];
			let subtitleContent = subtitle.querySelector('p');

			if (subtitle && subtitleContent) {
				let subtitleHeight = subtitle.offsetHeight;
				let subtitleHeightContent = subtitleContent.offsetHeight;

				if (subtitleHeightContent > subtitleHeight) {
					subtitle.classList.add('_text-hide');
				}
			}
		}
	}
}
window.addEventListener('load', function () {
	subtitleChange()
})
//===============================================================================================
document.addEventListener('DOMContentLoaded', () => {
	if (windowWidth <= 768) {
		const onScrollHeader = () => {

			const header = document.querySelector('.header')

			let prevScroll = window.pageYOffset;
			let currentScroll;

			window.addEventListener('scroll', () => {

				currentScroll = window.pageYOffset;
				if (currentScroll > header.clientHeight) {
					const headerHidden = () => document.documentElement.classList.contains('header_hidden')

					if (currentScroll > prevScroll && !headerHidden()) {
						document.documentElement.classList.add('header_hidden')
					}
					if (currentScroll < prevScroll && headerHidden()) {
						document.documentElement.classList.remove('header_hidden')
					}

					prevScroll = currentScroll;
				}


			})

		}

		onScrollHeader()
	}
	getHeight();
});