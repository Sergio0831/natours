export const popup = () => {
	const openPopupBtn = document.querySelectorAll(".open-popup");
	const popup = document.getElementById("popup");
	const popupCloseBtn = document.querySelectorAll(".close-popup");
	const lockPadding = document.querySelectorAll(".lock-padding");
	const body = document.querySelector("body");

	let unlock = true;

	const timeout = 400;

	openPopupBtn.forEach((btn) => {
		btn.addEventListener("click", showPopup);
	});

	popupCloseBtn.forEach((btn) => {
		btn.addEventListener("click", hidePopup);
	});

	popup.addEventListener("click", (e) => {
		if (!e.target.closest(".popup__content")) {
			hidePopup(e);
		}
	});

	function showPopup(e) {
		e.preventDefault();
		popup.classList.add("active");
		bodyLock();
	}

	function hidePopup(e) {
		e.preventDefault();
		popup.classList.remove("active");
		bodyUnlock();
	}

	function bodyLock() {
		const lockPaddingValue =
			window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px";

		lockPadding.forEach((item) => {
			item.style.right = "7.9rem";
		});

		body.style.paddingRight = lockPaddingValue;
		body.classList.add("lock");

		unlock = false;
		setTimeout(() => {
			unlock = true;
		}, timeout);
	}

	function bodyUnlock() {
		setTimeout(() => {
			lockPadding.forEach((item) => {
				item.style.right = "6rem";
			});
			body.style.paddingRight = "0px";
			body.classList.remove("lock");
		}, 100);

		unlock = false;
		setTimeout(() => {
			unlock = true;
		}, timeout);
	}
};
