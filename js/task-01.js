const liItemRef = document.querySelectorAll(".item");
console.log("Number of categories:", liItemRef.length);

liItemRef.forEach(item =>
	console.log(`Category: ${item.firstElementChild.textContent}\nElements: ${item.lastElementChild.childElementCount}`),
);
