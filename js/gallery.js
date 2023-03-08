/*

	For functions specific to [ Gallery ] page

*/

/*
	agnostic functions for adding and removing 
	SECTION LEVEL elements
	(such elements are only displayed one at a time and by themselves)
*/

let imagesWrapper = document.getElementById("imagesWrapper")

for (let img of images[0].images) {
	let element = new Image();
	element.src = img;
	imagesWrapper.append(element);
}

// console.log(images[0]);