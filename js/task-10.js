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
	createBoxes(input.value);
	input.value = "";
}

function onButtonDestroyClick() {
	destroyBoxes();
	input.value = "";
}

function createBoxes(amount) {
	let divDimensions = 30;

	for (let i = 1; i <= amount; i += 1) {
		const div = document.createElement("div");
		div.style.width = `${divDimensions}px`;
		div.style.height = `${divDimensions}px`;
		div.style.backgroundColor = getRandomHexColor();
		divBoxes.append(div);
		divDimensions += 10;
	}
}

function destroyBoxes() {
	divBoxes.innerHTML = "";
}
