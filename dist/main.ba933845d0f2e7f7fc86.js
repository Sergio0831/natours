!function(){"use strict";!function(){var t=document.querySelectorAll(".navigation__link[data-goto]"),e=document.querySelector("body");if(t.length>0){var o=function(o){o.preventDefault();var c=o.target;c.dataset.goto&&document.querySelector(c.dataset.goto);var n=document.querySelector(c.dataset.goto).getBoundingClientRect().top+pageYOffset;window.scrollTo({top:n+150,behavior:"smooth"}),t.forEach((function(t){t.classList.remove("active")})),o.target.classList.add("active");var r=document.getElementById("navi-toggle");!0===r.checked&&(e.classList.remove("lock"),r.checked=!1)};t.forEach((function(t){t.addEventListener("click",o)}))}function c(t){t.preventDefault();var e=t.target;e.dataset.goto&&document.querySelector(e.dataset.goto);var o=document.querySelector(e.dataset.goto).getBoundingClientRect().top+pageYOffset;window.scrollTo({top:o+120,behavior:"smooth"})}document.querySelectorAll(".to-tours").forEach((function(t){t.addEventListener("click",c)}))}(),function(){var t=document.querySelectorAll(".open-popup"),e=document.getElementById("popup"),o=document.querySelectorAll(".close-popup"),c=document.querySelectorAll(".lock-padding"),n=document.querySelector("body"),r=400;function a(t){var o;t.preventDefault(),e.classList.add("active"),o=window.innerWidth-document.querySelector(".wrapper").offsetWidth+"px",c.forEach((function(t){t.style.right="7.9rem"})),n.style.paddingRight=o,n.classList.add("lock"),!1,setTimeout((function(){!0}),400)}function i(t){t.preventDefault(),e.classList.remove("active"),setTimeout((function(){c.forEach((function(t){t.style.right="6rem"})),n.style.paddingRight="0px",n.classList.remove("lock")}),100),!1,setTimeout((function(){!0}),r)}t.forEach((function(t){t.addEventListener("click",a)})),o.forEach((function(t){t.addEventListener("click",i)})),e.addEventListener("click",(function(t){t.target.closest(".popup__content")||i(t)}))}()}();
//# sourceMappingURL=main.ba933845d0f2e7f7fc86.js.map