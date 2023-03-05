const form = document.querySelector(".login-form");

form.addEventListener("submit", onSubmitForm);

function onSubmitForm(event) {
	event.preventDefault();

	if (event.currentTarget.elements.email.value === "" || event.currentTarget.elements.password.value === "") {
		return alert("Please fill in all the fields!");
	}
	const formData = {
		email: event.currentTarget.elements.email.value,
		password: event.currentTarget.elements.password.value,
  };
  
	console.log(formData);
	event.currentTarget.reset();
}
