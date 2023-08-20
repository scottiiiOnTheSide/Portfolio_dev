/*
	JS file for scripts to be used across
	all pages of the site. Functions include
	- fade in on page arrival
	- Delay in links leading to other pages
	- functions for Nav Page
*/

/* 
	Fade in from black on page arrival 
	!!! Needs to be first in script...
*/
let body = document.getElementsByTagName('body')[0],
	navPage = document.getElementsByTagName('nav')[0],
	toggle = document.getElementById('toggle'),
	closeNav = document.getElementById('closeNav');

window.onload = () => {
	let overlay = document.getElementById("overlay");
	let overlayState = window.getComputedStyle(overlay).getPropertyValue('opacity');

	if(overlayState == 1) {
		overlay.style.opacity = 0;

		setTimeout(()=> {
			overlay.style.zIndex = 0;
		}, 250)
	}
};



/* Functions for navPage functionality */

toggle.addEventListener('click', ()=> {

	body.style.overflow = 'hidden';

	if(window.innerWidth < 440) {

		toggle.classList.add('toggle');

		setTimeout(()=> {
			navPage.style.display = "block";

			setTimeout(()=> {
				// dont remove class on mobile
				// toggle.classList.remove('toggle');
			}, 500)
		}, 400)

	} else {

		toggle.classList.add('toggle');

		setTimeout(()=> {
			navPage.style.display = "block";

			setTimeout(()=> {
				toggle.classList.remove('toggle');
			}, 500)
		}, 400)
	}
})

closeNav.addEventListener('click', ()=> {
	setTimeout(()=> {
		navPage.style.opacity = 0;

		setTimeout(()=> {
			body.style = '';
			navPage.style.display = 'none';			
		}, 600)

		setTimeout(()=> {
			navPage.style = '';				
		}, 800)

		if(window.innerWidth < 440) {
			setTimeout(()=> {
				toggle.classList.remove('toggle');			
			}, 1200)
		}
	}, 400)
})




