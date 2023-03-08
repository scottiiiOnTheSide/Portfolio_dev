
## Portfolio Site - Development Version

#03. 08. 2023

@0755 using preloader function to add images to div,
	  and then display imagesWrapper, is *mostly* working.

	  Longer than expected delay between the loader dissappearing
	  and the images appearing....


@0200 Added toggleElement function
	  styles for gallery/mainMenu and gallery/genres complete

	  next:
	  async load function when opening galleries
	  - having imageview draw from loaded gallery
	  	should be able to move images into an external array
	  	imageview can then access. Images will probably 
	  	remain cached so long as site isnt reloaded

	 need to implement 'back' from genres
	 probably smaller text button (positioned in middle for desktop)



#03. 07. 2023

@2005 Currently working on styling for gallery.
	  Rn, page doesnt load until some of images have loaded
	  Goal:
	  load images async, while displaying loader. 
	  Images should only have to load once, as imageview
	  should draw from loaded images

@1135 Not sure when, but need to properly implement the image
	  preloader. 
	  Can start with allPhotos, as that directly calls for all
	  images to be loaded.
	  Purpose of preloader is so that images can be smoothly
	  added / revealed one after the other
	  Preloader Code:
	  `const preloadImages = (src) => {
	  	return new Promise((resolve,reject) => {
			const img = new Image();
			img.onload = () => {
				resolve(img);
			} 
			img.onerror = reject;
			img.src = src;
	 	 })
	   }
		const preloadImages_all = async (sources) => {
		return Promise.all(sources.map(preloadImages))
	   `

	   create var for image gallery = to preloadImages_all
	   write rest of code within imageGallery.then((imgs)=> {
	   		create elements to place within wrapper
	   	})

@1125 CSS skeleton made for gallery page and sections
	  completed CSS for mainMenu, genre menu.
	  - with implementation of add/remove funcs,
	  	that covers functionality
	  	(should write functions to accept parameter for timing...)

@0815 Made general class for glitch effect.
	  Need to add span to link elements, or whichever get class.
	  reminder to add overlay fadeIn....
	  Actually, should be able to get them all in main.js file

#03. 05. 2023
@1030 Spent the past hour or so working on adding to the glitch effect - decided to 
		stick with the original style for the header.
		Will use the full glitch effect for navigation and particular buttons, however


@2240 HTML skeleton created for gallery sections
	  - create agnostic addSection, removeSection functions
	  	to be used for sections
	  - #mainMenu options should have glitch effect

@2210 Loading should occur after genre or allImages selection
	  should be able to place loaded images from inital galleryView
	  into imageView slider . . .

@2140 updated the createImagesObjects.js script - result is images.js
	  which houses object organizing images by genre, and then allImages.
	  0 ModelWork
	  1 LifeandEvents
	  2 CarsToys
	  3 Arch.Travel
	  4 allImages

	  Would like to have images (at least allImages) randomized...


#02. 05. 2023

@1055 Currently satisfied with the landing page :D 
	  - just need to implement the glitch effect properly

@1045 Landing page transition fully implemented - and significantly cleaner T-T

@1015 At this point, css for the landing page menu developed.
	  (I have to go watch the glitch tut to add the full effect)

	  cleaned up the "fade on link click" JS as well,
	  seems to work as intended across all pages...

	  Would need to know where / what the links are on each page
	  before I can implement the "fade on link click" per page...

#02. 03. 2023
@0635 cleaned up landing.js further.
	  Working on sectionTitle funtion, and then sectionSwitch

	  should be able to combine them both into a function then run
	  by the button


#01. 25. 2023

@0850 added code / modules for simple, self reloading server
	 Menu button css also added

@0825 Reorganized the landing page
	-div#header
		-div#titleWrapper
		-div#carouselWrapper (needs to be renamed to this)
		-button#sectionSwitch
	-section#landing
	-section#menu

Must start planning out DOM structure in advanced too T- T
especially in regards to JS - currently targetting individual elements
for section switch, rather than their wrappers T- T

Gonna fix button now, 
then make changes to menu
need to reWatch that video by Kevin Powell

#01. 25. 2023

@1720 need to work on landing section menu, the transition button and such...
	  - need to find that glitch tutorial by ... Kevin Powell. Glad I left credit in the notes :D

@1600 Decided to leave carousel code alone for now.

@1530 Only the css animations and media queries need to be changed concerning the carousel,
	  rest of original code seems more or less sufficient

@0210 plot out converting all page animations over to JS web animations
	  
	  have to convert entire carousel layout to web animations...

@1225 Beginning seperation of site sections...

	  - fonts and logos moved into their own folders

	  - sections have their own pages, initial set up

	  - deleted original navigation html code

	  - On Index / Landing - Logo is now an img element

	  - about section to be built from scratch

	  - code for keeping track of active section, deleted
	  	- all index.html JS deleted...

	  - code for fade in on page arrival, fade out on page leave implemented



#01. 13. 2022
@0850 Dev side of the project :D 
	  Many things to change . . .