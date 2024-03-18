// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
import { addLoadedClass } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";

addLoadedClass();

var r = document.querySelector(':root');
let body = document.querySelector('body');
let header = document.querySelector('header');
let headerHeight = header.clientHeight;

r.style.setProperty('--headerHeight', `${headerHeight}px`);


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
if (document.querySelector('.wrapper-header-bg')) {
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
	document.documentElement.classList.remove('header_hidden')
	subtitleChange();
	let sidebar;
	let side = document.querySelector('.side-object-page');
	if (side) {
		let sideParent = side.closest('[class*="__container"]').classList.toString();

		if (side) {
			sidebar = new StickySidebar(side, {
				containerSelector: `.${sideParent}`,
				innerWrapperSelector: '.sidebar__inner',
				topSpacing: 0,
				bottomSpacing: 0,
				minWidth: 991,
			});
			sidebar.updateSticky();
		}
	}
})
//===============================================================================================
document.addEventListener('DOMContentLoaded', () => {
	const onScrollHeader = () => {

		const header = document.querySelector('.header')

		let prevScroll = window.pageYOffset;
		let currentScroll;

		window.addEventListener('scroll', () => {

			currentScroll = window.pageYOffset;
			if (header && currentScroll > header.clientHeight) {
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

	let videoIframes = document.querySelectorAll('.review-item__video');

	for (let index = 0; index < videoIframes.length; index++) {
		const iframe = videoIframes[index];


		var playVideoButton = iframe.querySelector('.video-custom-poster');

		playVideoButton.addEventListener('click', function (ev) {
			var video = iframe.querySelector('.iframe-id');

			video.src += '&autoplay=1';
			ev.preventDefault();
		});
	}
});
//===============================================================================================
if (!isMobile.any() && document.querySelector('.circle-cursor--outer')) {
	class GlowCursor {
		constructor() {
			this.initCursor()

		}

		initCursor() {
			const { Back } = window
			this.outerCursor = document.querySelector('.circle-cursor--outer')
			this.innerCursor = document.querySelector('.circle-cursor--inner')
			this.outerCursorBox = this.outerCursor.getBoundingClientRect()
			this.outerCursorSpeed = 0
			this.easing = Back.easeOut.config(1.3)
			this.clientX = -100
			this.clientY = -100
			this.showCursor = false

			const unveilCursor = () => {
				// Set the innerCursor on the cursor position
				TweenMax.set(this.innerCursor, {
					x: this.clientX,
					y: this.clientY
				})

				// Center the outerCursor
				// Since it's larger
				TweenMax.set(this.outerCursor, {
					x: this.clientX - this.outerCursorBox.width / 2,
					y: this.clientY - this.outerCursorBox.height / 2
				})

				// Following speed of the outer cursor
				// 0 is immediate
				setTimeout(() => {
					this.outerCursorSpeed = 1
				}, 100)

				this.showCursor = true
			}

			document.addEventListener('mousemove', unveilCursor)

			document.addEventListener('mousemove', e => {
				this.clientX = e.clientX
				this.clientY = e.clientY
			})

			const render = () => {
				TweenMax.set(this.innerCursor, {
					x: this.clientX,
					y: this.clientY
				})

				if (!this.isStuck) {
					TweenMax.to(this.outerCursor, this.outerCursorSpeed, {
						x: this.clientX - this.outerCursorBox.width / 2,
						y: this.clientY - this.outerCursorBox.height / 2
					})
				}
				if (this.showCursor) {
					document.removeEventListener("mousemove", unveilCursor)
				}
				requestAnimationFrame(render)
			}
			requestAnimationFrame(render)
		}
	}

	const cursorAnim = new GlowCursor()
}
//===============================================================================================
document.addEventListener('click', function (e) {
	if (e.target.closest('.review-item__video')) {

		e.target.closest('.review-item__video').classList.add('_hide-poster')
	}
})