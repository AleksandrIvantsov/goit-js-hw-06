let counterValue = 0;

const decrementButton = document.querySelector("[data-action=decrement]");
const incrementButton = document.querySelector("[data-action=increment]");
const value = document.querySelector("#value");

decrementButton.addEventListener("click", onDecrementButtonClick);
incrementButton.addEventListener("click", onIncrementButtonClick);

function onDecrementButtonClick() {
	counterValue -= 1;
	value.textContent = counterValue;
}

function onIncrementButtonClick() {
	counterValue += 1;
	value.textContent = counterValue;
}
