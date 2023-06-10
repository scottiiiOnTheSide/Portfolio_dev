
const optionsWrapper = document.getElementById('optionsWrapper'),
	  options = Array.from(document.getElementsByClassName('opt')),
	  optButtons = Array.from(document.querySelectorAll('div#optionsWrapper button')),

	  testimonials = document.getElementById('testimonials'),
	  clientRegards = Array.from(document.querySelectorAll('div#testimonials ul li')),
	  testimonialButtons = Array.from(document.querySelectorAll('div#optionsWrapper button')),
	  
	  socialsWrapper = document.getElementById('socials'),

	  formWrapper = document.getElementById('emailScotty'),
	  emailScotty = document.getElementById('emailScotty').firstElementChild,
	  inputs = Array.from(emailScotty.firstElementChild.children),
	  submitForm = document.getElementById('submitForm'),
	  successMessage = document.getElementById('successfulSubmit'),

	  pageSections = [testimonials, socialsWrapper, formWrapper];



let closeWrapper = () => {
		setTimeout(() => {
			optionsWrapper.style.width = "222px";
			optionsWrapper.style.height = '225px';

			options.forEach(element => {
				element.style.display = 'none';
			})
		}, 500)
	},
	openWrapper_testimonials = () => {
		setTimeout(() => {
			if(window.innerWidth < 440) {
				optionsWrapper.style.width = "98%";
				optionsWrapper.style.height = "48%";
			} else {
				optionsWrapper.style.width = "42%";
				optionsWrapper.style.height = "49%";
			}
		}, 600)
		setTimeout(() => {
			testimonials.style.display = 'block';
			setTimeout(() => {
				testimonials.style.opacity = 1;
				testimonials.style.transform = "translate(-50%, -50%) scale(1)";
			}, 100)
		}, 800)
		setTimeout(() => {
			optButtons.forEach((element) => {
				element.style.display = "block";
				setTimeout(() => {
					element.style.opacity = 1;
				}, 100)
			})
		}, 1200)
	}
	openWrapper_socials = () => {
		optionsWrapper.style.transform = "translate(-50%, -50%)";
		// socialsWrapper.style.transform = 'translate(-50%, -50%)'

		setTimeout(() => {
			if(window.innerWidth < 440) {
				optionsWrapper.style.width = "99%";
			} else {
				optionsWrapper.style.width = "52%";
			}
			socialsWrapper.style.display = "block";
		}, 600)
		setTimeout(() => {
			socialsWrapper.style.opacity = 1;
			socialsWrapper.classList.add('scale');
		}, 650)
	},
	openWrapper_emailScotty = () => {
		if(window.innerWidth < 440) {
			optionsWrapper.style = "width: 50%; height: 50%;";	
		} else if (window.innerWidth > 440 && window.innerWidth < 769) {
			optionsWrapper.style = "width: 70%; height: 50%;";
		} else if (window.innerWidth > 769) {
			optionsWrapper.style = "width: 50%; height: 50%;";
		}

		setTimeout(() => {
			formWrapper.style.display = "block";
		}, 610)
		setTimeout(() => {
			formWrapper.style.opacity = 1;
			formWrapper.style.transform = 'translate(-50%, -50%) scale(1)'
		}, 725)
	};

options[0].addEventListener('click', ()=> {
	closeWrapper();
	setTimeout(()=>{
		openWrapper_testimonials()
	}, 1500);
})
options[1].addEventListener('click', ()=> {
	closeWrapper();
	setTimeout(()=>{
		openWrapper_socials()
		optButtons[0].style = 'display: block';
	}, 1500);
	setTimeout(()=>{
		optButtons[0].style.opacity = 1;
	}, 3000);
});
options[2].addEventListener('click', ()=> {
	closeWrapper();
	setTimeout(()=>{
		openWrapper_emailScotty()
		optButtons[0].style = 'display: block';
	}, 1500);
	setTimeout(()=>{
		testimonialButtons[0].style.opacity = 1;
	}, 3000);
})
testimonialButtons[0].addEventListener('click', ()=> {
	pageSections.forEach(element => {
		if(getComputedStyle(element).display == 'block') {
			element.style.opacity = 0;
			testimonialButtons.forEach((element) => {
				element.style.opacity = 0;
			})
			setTimeout(() => {
				element.style.display = 'none'
				testimonialButtons.forEach((element) => {
					element.style.display = 'none'
				})
			}, 350);
		}
	});

	//reOpening the wrapper
	if(window.innerWidth < 440) {
		optionsWrapper.style = "height: 60vh; width: 99%;"
	} else {
		optionsWrapper.style = "height: 60vh; width: 80%;"
	}

	options.forEach(element => {
		element.style = 'display:block; opacity: 0;'
		setTimeout(() => {
			element.style.opacity = 1;
		}, 350);
	});

	if(getComputedStyle(successMessage).display == 'block') {
		successMessage.style.display = 'none';
	}
	setTimeout(()=>{
		testimonialButtons[0].style = null;
		successMessage.style.display = 0;
	}, 300);

	if(socialsWrapper.classList.contains('scale')) {
		socialsWrapper.classList.remove('scale');
	}
})
testimonialButtons[1].addEventListener('click', ()=> {
	let next;
	let before;
	setTimeout(() => {
		clientRegards.forEach((element, index) => {
			if(getComputedStyle(element).display == 'flex') {
				if(index == clientRegards.length - 1) {
					next = 0;
				} else {
					next = ++index;
				}
				before = --index;
				setTimeout(() => {
					element.style.left = "-200px"
				}, 50)
				setTimeout(() => {
					element.style.opacity = 0;
				},75)
				setTimeout(() => {
					element.style.display = 'none';
				}, 500)	
			}
		})
	}, 200)
	setTimeout(() => {
		// console.log(before);
		clientRegards[before].style = null;
		clientRegards[before].style.left = '200px';
		clientRegards[next].style.left = '200px';
		clientRegards[next].style.display = 'flex';
		setTimeout(() => {
			clientRegards[next].style.left = "0px"
		}, 10)
		setTimeout(() => {
			clientRegards[next].style.opacity = 1;
		},20)
	}, 700)
});


/**
 * onLoad animation sequence:
 * wrapper starts as scaled down square, scales up then opens out,
 * options then scaleUp 
 **/


/*
	Form stuff
*/

// let formData = {};
let moveToNextOnEnter = (event) => {
	if(event.keyCode === 13) {
		event.preventDefault();
		const index = [...emailScotty].indexOf(event.target);
		console.log(index);
		inputs[index].focus();
	}
}
inputs.forEach((element, index) => {
	if(index == 3) {
		element.addEventListener('keyup', (event) => {
			if(event.keyCode === 13) {
				inputs[index].blur();
			}
		});
	} else {
		element.addEventListener('keyup', (event) => {
			moveToNextOnEnter(event);
		});
	}

	element.addEventListener('focus', ()=> {
		if(window.innerWidth < 440) {
			optionsWrapper.style.opacity = 0;
		}
	})
	element.addEventListener('focusout', ()=> {
		if(getComputedStyle(optionsWrapper).opacity == 0) {
			optionsWrapper.style.opacity = 1;
		}
	})		
})

//when all inputs are filled, submit button appears
emailScotty.addEventListener('change', () =>{
	let fullName = inputs[0].value,
		emailAddr = inputs[1].value,
		subject = inputs[2].value,
		content = inputs[3].value;

	if(fullName !== '' && emailAddr !== '' && subject !== '' && content !== '') {
		submitForm.style = "opacity: 1; transform: translateX(-50%) scale(1);"
	} else {

	}
})


submitForm.addEventListener('click', () => {

	event.preventDefault();
	submitForm.classList.add('glitch');
	// formData = {
	// 	name: inputs[0].value,
	// 	emailAddr: inputs[1].value,
	// 	subject: inputs[2].value,
	// 	content: inputs[3].value,
	// }
	// console.log(formData);

	emailjs.sendForm('viaMyMedia', 'ppcontactForm', emailScotty)
		.then(() => {
			setTimeout(() => {
				formWrapper.style.opacity = 0;
				setTimeout(() => {
					formWrapper.style.display = 'none';
					inputs.forEach((element) => {
						element.value = null;
					})
				}, 425);
				setTimeout(() => {
					closeWrapper();
				}, 600);
				setTimeout(() => {
					successMessage.style.display = 'inline-block';
					setTimeout(()=> {
						successMessage.style.opacity = 1; 
					}, 400)
				}, 1400);
				setTimeout(()=>{
					testimonialButtons[0].style = 'display: block';
				}, 1500);
				setTimeout(()=>{
					testimonialButtons[0].style.opacity = 1;
					submitForm.style = null;
					submitForm.classList.remove('glitch');
				}, 2400);
			}, 1000)
		})
})