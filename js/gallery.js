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
	galleryHeader = document.querySelector('div#gallery div#heading'),
	galleryReturn = document.querySelector('div#gallery div#heading button#return'),
	headingText = document.querySelector('span#genre'),
	imagesWrapper = document.getElementById("imagesWrapper"),
	loader = document.getElementById("loader");

let currentGallery = [];

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

	toggleElement(gallery, 500, 'block');
	toggleElement(galleryHeader, 500, 'block');
	loader.style.opacity = 1;

	preloadImages_all(images).then((imgs)=> {

		imgs.forEach((img, index) => {
			imagesWrapper.append(img);
			currentGallery.push(img);
		})

		loader.style.opacity = 0;

		let pics = Array.from(imagesWrapper.children);
		pics.forEach((img, index) => {
			setTimeout(()=> {
				img.style.opacity = 1;
			}, 300 * index)
		})
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

genreOptions.forEach((option, index) => {

	option.addEventListener('click', ()=> {

		/* for return to main menu */
		if(index == 4) {
			setTimeout(()=> {
				toggleElement(genres, 500)
				setTimeout(()=> {
					toggleElement(mainMenu, 500, 'flex');
				}, 700)
			}, 500)
			
		/* Opening a gallery */	
		} else {
			headingText.innerText = '/ '+images[index].genre;
			/* make loader display block */

			setTimeout(()=> {
				toggleElement(genres, 500, 'flex');
				setTimeout(loadGallery(images[index].images), 700)
			}, 500)
		}

		
	})
})


/* Gallery Return Button */
galleryReturn.addEventListener('click', ()=> {
	setTimeout(()=> {
		toggleElement(gallery, 500)
		toggleElement(galleryHeader, 500);

		setTimeout(()=> {
			imagesWrapper.innerHTML = "";
			currentGallery = [];
			toggleElement(genres, 500, 'flex');
		}, 700)
	}, 550)
})