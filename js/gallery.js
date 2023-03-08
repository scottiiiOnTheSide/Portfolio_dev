/*

	For functions specific to [ Gallery ] page

*/

/*
	agnostic functions for adding and removing 
	SECTION LEVEL elements
	(such elements are only displayed one at a time and by themselves)
*/

let mainMenu = document.getElementById("mainMenu"),
	mainMenuOptions = Array.from(document.querySelectorAll('ul#mainMenu li')),
	genres = document.getElementById("genres"),
	genreOptions = Array.from(document.querySelectorAll('ul#genres li')),
	gallery = document.querySelector('div#gallery'),
	headingText = document.querySelector('span#genre'),
	imagesWrapper = document.getElementById("imagesWrapper"),
	loader = document.getElementById("loader");

// for (let img of images[0].images) {
// 	let element = new Image();
// 	element.src = img;
// 	imagesWrapper.append(element);
// }

	
function toggleElement(element, timing, style) {
	const elementState = window.getComputedStyle(element).getPropertyValue('opacity');

	if(elementState == 0) {
			
		element.style.display = style;
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

	let preloadImages = (src) => {
		return new Promise((resolve,reject) => {

			const img = new Image();
			img.onload = () => {
				resolve(img);
			} 
			img.onerror = reject;
			img.src = src;

		 })
	}
	let preloadImages_all = async(sources) => {
		return Promise.all(sources.map(preloadImages))
	}

function loadGallery(images) {

	toggleElement(loader, 500, 'block');

	preloadImages_all(images).then((imgs)=> {
		
		toggleElement(gallery, 500, 'block');

		imgs.forEach(img => {
			imagesWrapper.append(img);
		})

		toggleElement(loader, 500, 'block');
		
	})

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
				toggleElement(mainMenu, 500, 'flex');
				setTimeout(toggleElement(genres, 500, 'flex'), 700)
			}, 500)
			
		} else if (i == 3) {
			console.log('lol')
		}
	})
}

/* For Genre Options */
// for(let i=0; i < genreOptions.length; i++) {

// 	genreOptions[i].addEventListener('click', ()=> {

// 		if(i == 0) {
// 			headingText.innerText = images[i].genre;

// 			setTimeout(()=> {
// 				toggleElement(genres, 500, 'flex');
// 				setTimeout(loadGallery(images[i].images), 700)
// 			}, 500)
// 		} else if (i == 1) {
// 			headingText.innerText = images[i].genre;
			
// 		} else if (i == 2) {
// 			headingText.innerText = images[i].genre;
			
// 		} else if (i == 3) {
// 			headingText.innerText = images[i].genre;
			
// 		}
// 	})
// }

genreOptions.forEach((option, index) => {

	option.addEventListener('click', ()=> {
		headingText.innerText = '/ '+images[index].genre;

		setTimeout(()=> {
			toggleElement(genres, 500, 'flex');
			setTimeout(loadGallery(images[index].images), 700)
		}, 500)
	})

})