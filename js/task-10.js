function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215)
		.toString(16)
		.padStart(6, 0)}`;
}

const input = document.querySelector("input");
const buttonCreate = document.querySelector("[data-create]");
const buttonDestroy = document.querySelector("[data-destroy]");
const divBoxes = document.querySelector("#boxes");

buttonCreate.addEventListener("click", onButtonCreateClick);
buttonDestroy.addEventListener("click", onButtonDestroyClick);

function onButtonCreateClick() {
	if (Number(input.value) < input.min || Number(input.value) > input.max) {
		return alert(`Введіть число від ${input.min} до ${input.max}`);
	}

	divBoxes.append(...createBoxes(input.value));
	input.value = "";
}

function onButtonDestroyClick() {
	destroyBoxes();
	input.value = "";
}

function createBoxes(amount) {
	const divElements = [];
	let divDimensions = 30;

	for (let i = 1; i <= amount; i += 1) {
		const div = document.createElement("div");
		div.style.width = `${divDimensions}px`;
		div.style.height = `${divDimensions}px`;
		div.style.backgroundColor = getRandomHexColor();
		divElements.push(div);
		divDimensions += 10;
	}
	return divElements;
}

function destroyBoxes() {
	divBoxes.innerHTML = "";
}
