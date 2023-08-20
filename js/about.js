
const sections = Array.from(document.getElementsByClassName("section"));
const sectionSwitcher = document.getElementById('sectionSwitch');
const sectionSwitcher_text = sectionSwitcher.children[0];



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

let changeText = () => {
	if(sectionSwitcher_text.innerHTML == 'Next Section') {
		sectionSwitcher_text.innerHTML = 'Previous Section';
	} else if (sectionSwitcher_text.innerHTML == 'Previous Section') {
		sectionSwitcher_text.innerHTML = 'Next Section';
	}
}

sectionSwitcher.addEventListener("click", ()=> {

	setTimeout(() => {
		sectionSwitcher.style.opacity = 0;

		setTimeout(()=> {
			// sectionSwitcher.style.display = 'none';
			changeText();
		}, 400)
	}, 400)

	setTimeout(()=> {

		sectionSwitch();
		setTimeout(()=> {
			sectionSwitcher.style.opacity = 1;
		}, 2000)	
	}, 1200)
})