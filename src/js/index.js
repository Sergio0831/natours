"use strict";
import "../sass/main.scss";
import { popup } from "./Popup";
import { smoothScroll } from "./SmoothScroll";

smoothScroll();
popup();

// Hide scroll when nav menu is open
const navigation = document.querySelector(".navigation");
navigation.addEventListener("click", (e) => {
	if (e.target.id === "navi-toggle") {
		e.target.parentElement.parentElement.classList.toggle("lock");
	}
});
