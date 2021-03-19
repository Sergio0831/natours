const imagemin = require("imagemin");
const imageminWebp = require("imagemin-webp");

imagemin(["./img/*.{jpg,png}"], {
	destination: "./img/webp/",
	plugins: [
		imageminWebp({
			quality: 60,
		}),
	],
}).then(() => {
	console.log("Images Converted Successfully!!!");
});
