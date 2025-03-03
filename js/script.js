"use strict";

document.addEventListener("DOMContentLoaded", () => {
	const collectionsTab = document.querySelectorAll(".collections__tab");
	const collectionImg = document.querySelector(".collections__right-img");
	const bigMenu = document.querySelector(".menu__big-menu");
	const hamburger = document.querySelector(".hamburger");
	const body = document.querySelector("body");

	window.addEventListener("resize", () => {
		if (window.innerWidth <= 767) {
			changeImgDiscovery();
			creatChevrons();
		} else if (window.innerWidth > 767) {
			const chevrons = document.querySelectorAll(
				".footer__column-title-chevron"
			);
			chevrons.forEach((item) => {
				item.remove();
			});
		}
		if (window.innerWidth <= 991) {
			changeTabs();
			initSwiper();
		}
	});

	changeImgDiscovery();

	function changeImgDiscovery() {
		if (window.matchMedia("(max-width: 767px)").matches) {
			const img = document.querySelector(".discover__img");
			img.src = "img/discover/img2.webp";
		}
	}

	creatChevrons();
	function creatChevrons() {
		if (window.matchMedia("(max-width: 767px)").matches) {
			const columnTitle = document.querySelectorAll(".footer__column-title");
			columnTitle.forEach((item) => {
				if (!item.querySelector(".footer__column-title-chevron")) {
					const div = document.createElement("div");
					div.classList.add("footer__column-title-chevron");
					const span1 = document.createElement("span");
					const span2 = document.createElement("span");
					div.append(span1, span2);
					item.append(div);
				}
			});
		}
	}

	function hamburgerFunc(e) {
		console.log(1);
		if (e.target.closest(".hamburger")) {
			bigMenu.classList.toggle("menu__big-menu_active");
			hamburger.classList.toggle("hamburger_active");

			const scrollbarWidth =
				window.innerWidth - document.documentElement.clientWidth;

			if (body.style.overflow === "hidden") {
				body.style.overflow = "";
				body.style.paddingRight = "";
			} else {
				body.style.overflow = "hidden";
				body.style.paddingRight = `${scrollbarWidth}px`;
			}
		}
	}

	function listenerAction(action) {
		document.addEventListener(action, (e) => {
			if (e.target.classList.contains("collections__tab")) {
				collectionsTab.forEach((item) => {
					item.classList.remove("collections__tab_active");
				});
				e.target.classList.add("collections__tab_active");
				collectionImg.src = `img/collections/${e.target.textContent.toLowerCase()}.webp`;
			} else if (
				window.matchMedia("(max-width: 992px)").matches &&
				window.matchMedia("(min-width: 768px)").matches
			) {
				hamburgerFunc(e);
			} else if (window.matchMedia("(max-width: 767px)").matches) {
				hamburgerFunc(e);
				if (e.target.closest(".footer__column-title")) {
					const columnList = e.target.nextElementSibling;
					if (
						columnList &&
						columnList.classList.contains("footer__column-list")
					) {
						e.target
							.querySelector(".footer__column-title-chevron")
							.classList.toggle("footer__column-title-chevron_active");
						columnList.classList.toggle("footer__column-list_active");
					}
				}
			}
		});
	}

	listenerAction("click");

	initSwiper();
	function initSwiper() {
		if (window.matchMedia("(max-width: 991px)").matches) {
			if (!document.querySelector(".nft__cards_container").swiper) {
				new Swiper(".nft__cards_container", {
					slidesPerView: "auto",
					loop: false,
					spaceBetween: 25,
				});
			}

			if (!document.querySelector(".explorecol__container").swiper) {
				new Swiper(".explorecol__container", {
					slidesPerView: "auto",
					loop: false,
					spaceBetween: 25,
				});
			}
		}
	}
	changeTabs();
	function changeTabs() {
		if (window.matchMedia("(max-width: 991px)").matches) {
			const tab = document.querySelectorAll(".sellers__tab");
			const flexBlocks = [];

			tab.forEach((block) => {
				if (getComputedStyle(block).display === "flex") {
					flexBlocks.push(block);
				}
			});

			flexBlocks.forEach((block, index) => {
				const numElement = block.querySelector(".sellers__tab-num");
				if (numElement) {
					numElement.textContent = index + 1;
				}
			});
		}
	}
});
