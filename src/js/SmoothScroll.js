// Smooth scroll
export const smoothScroll = () => {
	const menuLinks = document.querySelectorAll(".navigation__link[data-goto]");
	if (menuLinks.length > 0) {
		menuLinks.forEach((menuLink) => {
			menuLink.addEventListener("click", onMenuLinkClick);
		});

		function onMenuLinkClick(e) {
			e.preventDefault();
			const menuLink = e.target;
			if (
				menuLink.dataset.goto &&
				document.querySelector(menuLink.dataset.goto)
			);
			const gotoBlock = document.querySelector(menuLink.dataset.goto);
			const gotoBlockValue =
				gotoBlock.getBoundingClientRect().top + pageYOffset;

			window.scrollTo({
				top: gotoBlockValue + 150,
				behavior: "smooth",
			});

			//  Set active menu link
			menuLinks.forEach((link) => {
				link.classList.remove("active");
			});
			e.target.classList.add("active");

			// Remove nav
			const checkbox = document.getElementById("navi-toggle");
			if (checkbox.checked === true) {
				document.body.classList.remove("lock");
				checkbox.checked = false;
			}
		}
	}

	// Scrool to tours section
	const toTours = document.querySelectorAll(".to-tours");
	toTours.forEach((item) => {
		item.addEventListener("click", scrollToTours);
	});

	function scrollToTours(e) {
		e.preventDefault();
		const link = e.target;
		if (link.dataset.goto && document.querySelector(link.dataset.goto));
		const gotoBlock = document.querySelector(link.dataset.goto);
		const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset;

		window.scrollTo({
			top: gotoBlockValue + 150,
			behavior: "smooth",
		});
	}
};
