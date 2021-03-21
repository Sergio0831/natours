export const popup = () => {
	const openPopupBtn = document.querySelectorAll(".open-popup");
	const popup = document.getElementById("popup");
	const popupContent = document.querySelector(".popup__content");
	const popCloseBtn = document.querySelectorAll(".to-tours");

	openPopupBtn.forEach((btn) => {
		btn.addEventListener("click", showPopup);
	});

	popCloseBtn.forEach((btn) => {
		btn.addEventListener("click", hidePopup);
	});

	function showPopup(e) {
		e.preventDefault();
		popup.classList.add("active");
		popupContent.classList.add("active");
		document.body.classList.add("lock");
	}

	function hidePopup(e) {
		e.preventDefault();
		popup.classList.remove("active");
		popupContent.classList.remove("active");
		document.body.classList.remove("lock");
	}
};
