/*
	G E T T I N G  P A G E  E L E M E N T S 
	A S   V A R I A B L E S 
*/

let titleWrapper = document.getElementById('titleWrapper'),
	logoWrapper = document.getElementById('logoWrapper'),
	imgWrappers = Array.from(document.querySelectorAll('.imgWrapper')),
	showcaseWrapper = document.getElementById('showcaseWrapper'),
	menu = document.querySelector('ul#menu'),
	menuLinks = Array.from(document.querySelectorAll('ul#menu li a')),
	sectionSwitch = document.getElementById('sectionSwitch');
	


//split this in the future to create arrays for other image groups
let images = Array.from(document.querySelectorAll('img')).slice(1, 5);


let headerImages = [];
for (let i = 1; i < 13; i++) {
	let string;
	if(i > 9) {
		string = `./resources/arrival/0${i}.jpg`;
	} else {
		string = `./resources/arrival/00${i}.jpg`;
	}
	headerImages.push(string);
}

//sets some default styling 
function toggleDefaults(tog) {
	if(tog) {
		imgWrappers[0].style.top = "45%";
		imgWrappers[1].style.top = "55%";
		imgWrappers[2].style.top = "45%";
		imgWrappers[3].style.top = "55%";
	} else if (!tog) {
		imgWrappers[0].style.top = "";
		imgWrappers[1].style.top = "";
		imgWrappers[2].style.top = "";
		imgWrappers[3].style.top = "";
	}
}

function toggleMobile(tog) {
	if(tog) {
		imgWrappers[0].style.left = "60%";
		imgWrappers[1].style.left = "40%";
		imgWrappers[2].style.left = "60%";
		imgWrappers[3].style.left = "40%";
	} else if (!tog) {
		imgWrappers[0].style.left = "";
		imgWrappers[1].style.left = "";
		imgWrappers[2].style.left = "";
		imgWrappers[3].style.left = "";
	}
}


/* 	

	S I M P L I F Y   T H I S
	rather verbose code, 
	yet it's simply a switch between styles depending on window width 
*/
function mediaQuery1024() {
	if(window.innerWidth <= 480) {
		return 480
	}
	else if(window.innerWidth > 480 && window.innerWidth < 1024) {
		return 1024
	}
	else {
		return null;
	}
}
(mediaQuery1024() == 480 || mediaQuery1024() == 1024) ? toggleDefaults(false) : toggleDefaults(true);
(mediaQuery1024() == 480 || mediaQuery1024() == 1024) ? toggleMobile(true) : toggleMobile(false);

/* 5.4.2022
	need to adjust mediaQuery where these sizes change, around 768 */
function carouselQueried() { //will adjust styles of carousel based on device width
	
		if (mediaQuery1024() == 480) {
			if(images[1].src.includes(`resources/arrival/002.jpg`)) {
				images[1].style.objectPosition = "center -100px";
			} 
			else { images[1].style = null;}

			if(images[2].src.includes(`resources/arrival/003.jpg`)) {
				images[2].style.objectPosition = "center -100px";
			} 
			else { images[2].style = null;}

			if(images[3].src.includes(`resources/arrival/004.jpg`)) {
				images[3].style.objectPosition = "center -150px";
			} 
			else { images[3].style = null;}
		};
		if ( mediaQuery1024() == 1024) {
			if(images[1].src.includes(headerImages[1])) {
				images[1].style.objectPosition = "center -200px";
			} 
			else { images[1].style = null; }
			if(images[2].src.includes(headerImages[2])) {
				images[2].style.objectPosition = "center -200px";
			} 
			else { images[2].style = null; }	
			if(images[3].src.includes(headerImages[3])) {
				images[3].style.objectPosition = "center -300px";
			} 
			else { images[3].style = null; }
		};
	}
carouselQueried(mediaQuery1024);

/*
	C a r o u s e l  
	F u n c t i o n a l i t y
*/
function addIntro () {
	imgWrappers[0].classList.add('loadUp_In');
		imgWrappers[1].classList.add('loadDown_In');
	imgWrappers[2].classList.add('loadUp_In');
		imgWrappers[3].classList.add('loadDown_In');
}

function removeIntro () {
	imgWrappers[0].classList.remove('loadUp_In');
		imgWrappers[1].classList.remove('loadDown_In');
	imgWrappers[2].classList.remove('loadUp_In');
		imgWrappers[3].classList.remove('loadDown_In');
}

function addOutro () {
	imgWrappers[0].classList.add('loadUp_Out');
		imgWrappers[1].classList.add('loadDown_Out');
	imgWrappers[2].classList.add('loadUp_Out');
		imgWrappers[3].classList.add('loadDown_Out');
}

function removeOutro () {
	imgWrappers[0].classList.remove('loadUp_Out');
		imgWrappers[1].classList.remove('loadDown_Out');
	imgWrappers[2].classList.remove('loadUp_Out');
		imgWrappers[3].classList.remove('loadDown_Out');
}


function runCarousel() {

		if (imgWrappers[0].classList.contains('loadUp_In')) { /*Their default state*/
			toggleDefaults(false);
			toggleMobile(false);
			removeIntro(); //removes loadUp_In animation class
			addOutro(); //adds LoadUp_Out animation class
		};

		setTimeout(() => { //change images to next set during transition
			let imgcnt;

			if (images[0].src.includes('009')) {
				imgcnt = 0;
				for (let i = 0; i < images.length; i++) {
					images[i].src = headerImages[imgcnt];
					carouselQueried(mediaQuery1024);
					imgcnt++;
					// console.log(imgcnt);
				}
			} else if (images[0].src.includes('001')) {
				imgcnt = 4;
				for (let i = 0; i < images.length; i++) {
					images[i].src = headerImages[imgcnt];
					carouselQueried(mediaQuery1024);
					imgcnt++;
					// console.log(imgcnt);
				}
			} else if (images[0].src.includes('005')) {
				imgcnt = 8;
				for (let i = 0; i < images.length; i++) {
					images[i].src = headerImages[imgcnt];
					carouselQueried(mediaQuery1024);
					imgcnt++;
					// console.log(imgcnt);
				}
			}
		}, 1200)//0.2s after first .loadUp_in... animation sequence is complete

		setTimeout(() => {
			removeOutro();
			addIntro(); 
			(mediaQuery1024() == 480 || mediaQuery1024() == 1024) ? toggleMobile(true) : toggleMobile(false);
			(mediaQuery1024() == 480 || mediaQuery1024() == 1024) ? toggleDefaults(false) : toggleDefaults(true);
		}, 2000); //bring them back in
	}

let runTheCarousel = {
	set: function() {
		runCarousel();
	},

	repeat: function() {
		this.timeoutID = setInterval(function() {
			runCarousel();
		}.bind(this), 4000);
	},

	cease: function() {
		clearTimeout(this.timeoutID);
	}
}
 

/* 
	f u n c t i o n s   t o   S w i t c h   
	C a r o u s e l  t o  M e n u
*/
function switchElements(elOne, elTwo) {
	const firstElementState = window.getComputedStyle(elOne).getPropertyValue('opacity'),
		  secondElementState = window.getComputedStyle(elTwo).getPropertyValue('opacity');

	if(firstElementState == 0) {
			
		elTwo.style.opacity = 0;
		sectionSwitch.style.opacity = 0;
		setTimeout(()=> {
			elOne.style.opacity = 1;
			sectionSwitch.innerHTML = 'MENU';

			setTimeout(() => {
				// logoWrapper.style.display = 'none';
				sectionSwitch.style.opacity = 1;
			}, 100)
		}, 300);


		
	} else if (firstElementState == 1) {

		elOne.style.opacity = 0;
		sectionSwitch.style.opacity = 0;
		setTimeout(()=> {
			elTwo.style.opacity = 1;
			sectionSwitch.innerHTML = 'RETURN';

			setTimeout(() => {
				sectionSwitch.style.opacity = 1;
			}, 100)
		}, 300);
	}
}

sectionSwitch.addEventListener('click', ()=> {

	let carouselState = window.getComputedStyle(showcaseWrapper).getPropertyValue('opacity');

	if(carouselState == 0) {

		switchElements(showcaseWrapper, menu);
		runTheCarousel.repeat();

	} else if (carouselState == 1) {

		runTheCarousel.cease();
		switchElements(showcaseWrapper, menu);
	}

	switchElements(titleWrapper, logoWrapper);
});