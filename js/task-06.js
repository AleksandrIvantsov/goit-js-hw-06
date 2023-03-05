const input = document.querySelector("#validation-input");

input.placeholder = `Please enter ${input.dataset.length} symbols`;

input.addEventListener("blur", onBlurInput);

function onBlurInput(event) {
	if (event.currentTarget.value.length === Number(input.dataset.length)) {
		input.classList.add("valid");
		input.classList.remove("invalid");
	} else {
		input.classList.add("invalid");
		input.classList.remove("valid");
	}
}
