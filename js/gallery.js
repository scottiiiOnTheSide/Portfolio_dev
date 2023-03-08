/*

	For functions specific to [ Gallery ] page

*/

/*
	agnostic functions for adding and removing 
	SECTION LEVEL elements
	(such elements are only displayed one at a time and by themselves)
*/

let imagesWrapper = document.getElementById("imagesWrapper"),
	mainMenu = document.getElementById("mainMenu"),
	mainMenuOptions = Array.from(document.querySelectorAll('ul#mainMenu li')),
	genres = document.getElementById("genres"),
	genreOptions = Array.from(document.querySelectorAll('ul#genres li'));

for (let img of images[0].images) {
	let element = new Image();
	element.src = img;
	imagesWrapper.append(element);
}

function toggleElement(element, timing) {
	const elementState = window.getComputedStyle(element).getPropertyValue('opacity');

	if(elementState == 0) {
			
		element.style.display = 'flex';
		setTimeout(()=> {
			element.style.opacity = 1;	
		}, 100)
		
		
	} else if (elementState == 1) {

		element.style.opacity = 0;

		setTimeout(()=> {
			element.style.display = 'none';
		}, timing+200);
	}
}

/* For Main Menu Options */
for(let i=0; i < mainMenuOptions.length; i++) {
	mainMenuOptions[i].addEventListener('click', ()=> {
		if(i == 0) {
			console.log('lol')
		} else if (i == 1) {
			console.log('lol')
		} else if (i == 2) {
			setTimeout(()=> {
				toggleElement(mainMenu, 500);
				setTimeout(toggleElement(genres, 500), 700)
			}, 500)
			
		} else if (i == 3) {
			console.log('lol')
		}
	})
}

// console.log(images[0]);