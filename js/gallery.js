/*

	For functions specific to [ Gallery ] page

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





/*
	Image Viewer 
*/
let imageView = document.getElementById('imageView'),
	imagesSlidesWrapper = document.getElementById('imageSlidesWrapper');

imageView.oncontextmenu = (event) => {
	event.preventDefault();
	event.stopPropagation();
	return false;
}

for(let imglink of images[3].images) {
	let li = document.createElement('li');
	let img = new Image();
	img.src = imglink;
	li.append(img);
	imagesSlidesWrapper.append(li);
}
imagesSlidesWrapper.children[0].style.display = 'block';

let length = images[3].images.length;

function imagesControls(imagesArray){

	let isDragging = false,
	startPos = 0,
	currentTranslate = 0,
	prevTranslate = 0,
	animationID = 0,
	currentIndex = 0,
	getPositionX = (event) => {
		return event.type.includes('mouse') 
			? event.pageX 
			: event.touches[0].clientX;
	},
	getPositionY = (event) => {
		return event.type.includes('mouse') 
			? event.pageY 
			: event.touches[0].clientY;
	},
	setSliderPosition = (axis) => {
		if(axis == 'x') {
			imagesArray[currentIndex].style.transform = `translateX(${currentTranslate}px)`	
		}
		else if (axis == 'y') {
			imagesArray[currentIndex].style.transform = `translateY(${currentTranslate}px)`
		}
		
	},
	animationX = (element) => {
		if(isDragging) {
				setSliderPosition('x');
				requestAnimationFrame(animationX);
			}
	},
	animationY = (element) => {
		if(isDragging) {
			setSliderPosition('y');
			requestAnimationFrame(animationY);
		}
	},
	setPositionByIndexY = () => {
		currentTranslate = currentIndex * -window.innerHeight;
		prevTranslate = currentTranslate;
		setSliderPosition('y');
	},
	setPositionByIndexX = () => {
		currentTranslate = currentIndex * -window.innerWidth;
		prevTranslate = currentTranslate;
		setSliderPosition('x');
	};

	imagesArray.forEach((element, index, array) => {
		const image = element.firstElementChild;
		image.addEventListener('dragstart', (e) => {e.preventDefault() });

			//touch events
			element.addEventListener('touchstart', touchStart(index, element))
			element.addEventListener('touchend', touchEnd(index))
			element.addEventListener('touchmove', touchMove)


			//mouse events
			element.addEventListener('mousedown', touchStart(index, element))
			element.addEventListener('mouseup', touchEnd(index))
			element.addEventListener('mouseleave', touchEnd(index))
			element.addEventListener('mousemove', touchMove)
	});

	function touchStart(index) {
		return function(event) {

			//should prevent top of screen from being pulled down 
			event.stopPropagation()

			currentIndex = index;
			if(window.innerWidth >= 1024) {
				startPos = getPositionX(event);
				console.log('X read')
			} else {
				startPos = getPositionY(event);
				console.log('Y read')
			}

			
			isDragging = true;

			if(window.innerWidth >= 1024) {
				animationID = requestAnimationFrame(animationX);	
			} else {
				animationID = requestAnimationFrame(animationY);
			}
			imagesWrapper.classList.add('grabbing');
		}
	}

	function touchMove(event) {

		//should prevent top of screen from being pulled down 
		event.stopPropagation()

		if(isDragging) {
			if(window.innerWidth >= 1024) { 
				var currentPosition = getPositionX(event);
			} else {
				var currentPosition = getPositionY(event);
			}
			currentTranslate = prevTranslate + currentPosition - startPos;
		}
	}

	function touchEnd(index) {
		return function(event) {
			if(isDragging == true) {
				isDragging = false;
		    	cancelAnimationFrame(animationID)
		    	/* this needs to be the gallery currently being viewed */

				const movedBy = currentTranslate - prevTranslate;
				//for mobile
				if(movedBy < -100 && currentIndex < imagesArray.length - 1) {
					currentIndex += 1;
					
					// controls_UI[0].firstElementChild.style.opacity = 0;		
					// setTimeout(()=> {
					// 	controls_UI[0].firstElementChild.innerHTML = place;
					// }, 350)
					// setTimeout(()=> {
					// 	controls_UI[0].firstElementChild.style.opacity = 1;
					// }, 400)
				}
				if(movedBy > 100 && currentIndex > 0) {
					currentIndex -= 1;

					// controls_UI[0].firstElementChild.style.opacity = 0;		
					// setTimeout(()=> {
					// 	controls_UI[0].firstElementChild.innerHTML = place;
					// }, 350)
					// setTimeout(()=> {
					// 	controls_UI[0].firstElementChild.style.opacity = 1;
					// }, 400)
				}

				imagesArray[index].style.opacity = 0;
				imagesArray[currentIndex].style.opacity = 0;
				imagesArray[currentIndex].style.transform = 'scale(0.85)'
				setTimeout(() => {
					imagesArray[index].style.display = 'none';

				}, 350);
				setTimeout(()=> {	
					imagesArray[currentIndex].style.display = 'block';
				}, 375)
				setTimeout(()=> {
					imagesArray[currentIndex].style.transform = 'scale(1)'	
					imagesArray[currentIndex].style.opacity = 1;
				}, 400)

				//prevent image disappeareance if it is last
				// didn't need to add further implementation :D 
				
			}
		imagesWrapper.classList.remove('grabbing');
		currentTranslate = 0;
		}
	}
}


imagesControls(Array.from(imageSlidesWrapper.children));