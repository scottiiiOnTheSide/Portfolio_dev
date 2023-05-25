
let body = document.getElementsByTagName('body')[0],

	openRequestForm = Array.from(document.getElementsByClassName('openMessagePrompt')),
	requestForm = document.getElementById('requestForm'),
	requestForm_send = document.getElementById('sendRequest'),
	requestForm_exit = document.getElementById('exit'),
	requestForm_topExit = document.getElementById('topExit');

let headings = [
	"Headshots, Profile Photos",
	"Hourly, Client Discretion",
	"Full Director Treatment",
	"The Artist's Deal"
]


requestForm.active;

function toggleRequestForm(toggle, index) {

	if(typeof index == 'number') {
		document.querySelector('div#requestForm h2 span').innerHTML = headings[index];
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