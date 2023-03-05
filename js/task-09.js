function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215)
		.toString(16)
		.padStart(6, 0)}`;
}

const buttonChangeColor = document.querySelector(".change-color");
const spanColor = document.querySelector(".color");

buttonChangeColor.addEventListener("click", onClickButtonChangeColor);

function onClickButtonChangeColor(event) {
	const hexColor = getRandomHexColor();

	document.body.style.backgroundColor = hexColor;
	spanColor.textContent = hexColor;
}
