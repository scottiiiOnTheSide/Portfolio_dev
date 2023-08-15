
const sections = Array.from(document.getElementsByClassName("section"));
const scrollCTA = document.getElementById('scrollCTAWrapper');
const scrollCTAText = scrollCTA.children[1];


/* on button click */
let sectionSwitch = () => {
	sections.forEach(element => {
		let visible = getComputedStyle(element).display == 'block' ? true : false;

		if(visible) {
			element.classList.remove('return');
			element.classList.add('leave');

			setTimeout(()=> {
				element.style.display = 'none';
			}, 600)
		}

		setTimeout(()=> {
				if(!visible) {
					element.style.display = 'block';
					element.classList.add('return');
				}
		}, 1100)
	})
}
