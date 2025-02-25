"use strict";

document.addEventListener("DOMContentLoaded", () => {
	const collectionsTabs = document.querySelector(".collections__tabs");
	const collectionsTab = document.querySelectorAll(".collections__tab");
	const collectionImg = document.querySelector(".collections__rightSide_img");
	collectionsTabs.addEventListener("click", (e) => {
		if (e.target.classList.contains("collections__tab")) {
			collectionsTab.forEach((item) => {
				item.classList.remove("collections__tab_active");
			});
			e.target.classList.add("collections__tab_active");
			console.log(e.target.textContent);
			collectionImg.src = `img/collections/${e.target.textContent.toLowerCase()}.webp`;
		}
	});
});
