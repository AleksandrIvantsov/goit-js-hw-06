const ingredients = ["Potatoes", "Mushrooms", "Garlic", "Tomatos", "Herbs", "Condiments"];

const ingredientsLiEL = ingredients.map(ingredient => {
	const liEl = document.createElement("li");
	liEl.textContent = ingredient;
	liEl.classList.add("item");

	return liEl;
});

document.querySelector("#ingredients").append(...ingredientsLiEL);
