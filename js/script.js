"use strict";

document.addEventListener("DOMContentLoaded", () => {
	const collectionsTabs = document.querySelector(".collections__tabs");
	const collectionsTab = document.querySelectorAll(".collections__tab");
	const collectionImg = document.querySelector(".collections__right-img");
	const bigMenu = document.querySelector(".menu__big-menu");
	const hamburger = document.querySelector(".hamburger");

	if (window.innerWidth < 767) {
		const columnTitle = document.querySelectorAll(".footer__column-title");
		columnTitle.forEach((item) => {
			const div = document.createElement("div");
			div.classList.add("footer__column-title-chevron");
			const span1 = document.createElement("span");
			const span2 = document.createElement("span");
			div.append(span1, span2);
			item.append(div);
		});
	}

	function hamburgerFunc(e) {
		if (e.target.closest(".hamburger")) {
			bigMenu.classList.toggle("menu__big-menu_active");
			hamburger.classList.toggle("hamburger_active");
		}
	}

	document.addEventListener("click", (e) => {
		console.log(e.target);
		if (e.target.classList.contains("collections__tab")) {
			collectionsTab.forEach((item) => {
				item.classList.remove("collections__tab_active");
			});
			e.target.classList.add("collections__tab_active");
			console.log(e.target.textContent);
			collectionImg.src = `img/collections/${e.target.textContent.toLowerCase()}.webp`;
		} else if (window.innerWidth < 992 && window.innerWidth > 767) {
			hamburgerFunc(e);
		} else if (window.innerWidth <= 767) {
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

	if (window.innerWidth < 992) {
		new Swiper(".nft__cards_container", {
			slidesPerView: "auto",
			loop: false,
			spaceBetween: 30,
		});
		new Swiper(".explorecol__container", {
			slidesPerView: "auto",
			loop: false,
			spaceBetween: 30,
		});
	}
	// if (window.innerWidth < 767) {
	// 	const columnTitle = document.querySelectorAll(".footer__column-title");
	// 	columnTitle.forEach((item) => {
	// 		const div = document.createElement("div");
	// 		div.classList.add("footer__column-title-chevron");
	// 		const span1 = document.createElement("span");
	// 		const span2 = document.createElement("span");
	// 		div.append(span1, span2);
	// 		item.append(div);
	// 	});

	// const columns = document.querySelector(".footer__right-columns");

	// columns.addEventListener("click", (e) => {
	// 	if (e.target.classList.contains("footer__column-title")) {
	// 		const columnList = e.target.nextElementSibling;
	// 		if (
	// 			columnList &&
	// 			columnList.classList.contains("footer__column-list")
	// 		) {
	// 			e.target
	// 				.querySelector(".footer__column-title-chevron")
	// 				.classList.toggle("footer__column-title-chevron_active");
	// 			columnList.classList.toggle("footer__column-list_active");
	// 		}
	// 	}
	// });
	// }
});
