
let openRequestForm = Array.from(document.getElementsByClassName('openMessagePrompt')),
	requestForm = document.getElementById('requestForm'),
	requestForm_form = document.getElementById('serviceInquiry'),
	requestForm_inputs = Array.from(requestForm_form.firstElementChild.children),
	requestForm_submit = document.getElementById('sendRequest'),
	requestForm_exit = document.getElementById('exit'),
	requestForm_topExit = document.getElementById('topExit'),
	confirmation = document.getElementById('confirmation'),
	confirmation_exit = document.getElementById('bottomExit'),
	headings = [
		"Headshots, Profile Photos",
		"Hourly, Client Discretion",
		"Full Director Treatment",
		"The Artist's Deal"
	];




function toggleRequestForm(toggle, index) {

	if(typeof index == 'number') {
		document.querySelector('div#requestForm h2 span').innerHTML = headings[index];
		document.getElementById('inquiryType').value = headings[index];
	} else {
		document.querySelector('div#requestForm h2 span').innerHTML = index;
	}
	

	if(toggle) { //if yes, as in, activate
		body.style.overflowY = 'hidden';
		requestForm.style.display = 'block';
		setTimeout(()=> {
			requestForm.style.opacity = 1;
		}, 300)
	} else if(!toggle) {
		requestForm.style.opacity = 0;
		setTimeout(()=> {
			requestForm.style.display = 'none';
			body.style.overflowY = 'auto';
		}, 600)
	}
}

openRequestForm.forEach((element, index) => {
	element.addEventListener('click', (e)=> {
		e.preventDefault();
		toggleRequestForm(true, index)
	});	
})

requestForm_exit.addEventListener('click', (e)=> {
	e.preventDefault();
	toggleRequestForm(false, '...');
})

requestForm_topExit.addEventListener('click', (e)=> {
	e.preventDefault();
	toggleRequestForm(false, '...');
})

/* Submit button appears when inputs are filled */
requestForm_form.addEventListener('change', ()=> {

	let contactInfo = requestForm_inputs[1].value,
		message = requestForm_inputs[2].value;

	if(contactInfo != "" && message != "") {
		requestForm_submit.classList.add('active');
		requestForm_submit.disabled = false;
		console.log('true');
	}
})

requestForm_submit.addEventListener('click', (e)=> {

	e.preventDefault();

	if(!requestForm_form.disabled) {

		emailjs.sendForm('viaMyMedia', 'inquiryForService', requestForm_form).then(()=> {
			setTimeout(()=> {
				confirmation.style.display = "flex";

				setTimeout(()=> {
					confirmation.style.opacity = 1;
				}, 500)
			}, 500)
		})

	}
});

confirmation_exit.addEventListener('click', (e)=> {

	e.preventDefault();

	toggleRequestForm(false, '...');
	setTimeout(()=> {
		confirmation.style.display = 'none';
		confirmation.style.opacity = 0;
	}, 500)
})