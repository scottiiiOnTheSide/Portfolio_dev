
## Portfolio Site - Development Version


#08. 15. 2023

@1200 SectionSwitch CTA now positioned well below sections for mobile :D
	  
	  Now need to change to an actual button, change text
	  write JS for onClick


@1130 Mobile styling complete for both sections!
	  Currently having trouble getting the SectionSwitch button
	  to stay below both sections on page . . .
	  continues to stick in middle


#08. 14. 2023
@1440 May need to make both sections scrollable, so that there's space for the
	  menu button at the bottom

@1420 JS function, classes and animation created for section switch

	  have to change CTA to be button,
	  on click:
	    - scale up, and fade away -> then sectionSwitch
	    - text changed (next to prev), fade in and scale down

	  Aaaand then mobile styling !

@1010 Logo & Brand name need a wrapper & cursor: pointer

#08. 12. 2023

@1600 section#Two Desktop Styling complete

	 what if spans for .glitch class were lighter color???

@0930 Menu button to be vertical on desktop, to the left side
	  Horizontal at bottom center on mobile

#08. 11. 2023
@1140 Have to add contingency for section#two . . .
	  onTouch or scroll, 
	  if bottom of section isn't visible, no switch.

	  scroll CTA removed from sections, 
	  about 20% up from body's bottom

@08. 10. 2023

@1400 Images and Copy added for sectionOne, 
	  styling complete for Desktop

	  Next:
	    - sectionTwo ✔️ done 08.12 
	    - mobile Styling for both sections
	    - js function for scrolling / swiping between sections

	  All pages will be complete after these tasks,
	  then to combine them with navPage and headerLogo

@1331 about page main sections may need to be positioned higher up on viewports
	less than 800px 
	Definitely not centered on mobile . . .


@08. 01. 2023

@2235 initial html skeleton added 

@2220 Use object position on background images in about section...

@2145 Added another section of copywriting to the Services page

@1440 Image count issue fixed d(T-T )

	  begin about page :D
	  First thing, dev function for 
	  switching between div sections within wrapper
	  on scroll


@07. 27. 2023
@0955 Desktop styling added. 

@1033 Mobile landscape styling reAdded 

	  Need to fix counting issue with image counter, imageView... ✔️



@07. 04. 2023
@0420 Previous two issues fixed !

	  Image size within imageView needs to be larger for desktop
	  - restyle info to be left aligned as well ✔️

	  - re-add mobile, horizontal style ✔️
	  - reduce size of info text on mobile 

@06. 22. 2023
@0830 
	Fixes to Implement:
	- for ipad, portrait mode (height > 800 or so) move infoWrapper down ✔️
	- have the main gallery display: none while imageView is open.
	  should prevent scrolling while in landscape ✔️

	Can begin about page ...


@06. 20. 2023
@01955 Implemented fix for gallery display and imageView across all devices.
       Need to englargen imageSlidesWrapper for tablet AND
       test arrangement on devices

       also, image counter is now having issue - will load correct image number
       but keeps it when sliding to next . . .

@06. 16. 2023
@1330 Fix margin for imagesWrapper within div#gallery
	  still need to do below


@06. 12. 2023
@1425 Fixed issue with vertical images fitting correctly within the li's :D !
	  Need to do resizings for the Li's for different screen sizes,

	  also need to implement desktop styling, beginning at 1023px W


@06. 10. 2023
@1300 Need to devise way to redesign imageView, as long vertical images get clipped...
	 
	  Next To Do:
	  About page -> Nav Menu -> Header Logo as link to landing
	  -> reduce landing carousel images filesize

@06. 09. 2023
@0705 Adjustment of landing section elements complete.

	  Gallery could actually use abit of work - will need to reorganize
	  the elements on page so that 
	  - when whole page is scrolled, everything moves down (the header is fixed?) ✔️
	  - optimized spacing between logo header, section header and images gallery
	  - and tablet styling ... ✔️

@06. 09. 2023
@2145 had issues on iOS concerning buttons being blue and the inputs for the contact
	  form having curved, visible borders 

	  Fixed some other previously listed issues as well.

	  Will add the opening animation in a future update....

	  Need to adjust width at which landing Menu goes vertical 
	  and height of menu button (done) ✔️

@06. 07. 2023
@2235 - Decided to forgoe the animation on load, for now: May revise idea

	  - adjusted styling for socials wrapper so design is more cohesive

#06. 01. 2023
@0345 Finished updated / fixing Contact page

	  - Would like to add animation on load where optionsWrapper
	 	opens up and then reveals options 

	  - Contact form needs to be resized for tablets ✔️

	  - delay needs to be added to socialMedia links ✔️

	  - Would like inputs to be highlighted upon entering text ✔️

	  TO DO AFTER:
	    - About Section
	    - Site nav menu
	    - Have header go back to landing page


#05. 31. 2023
@0940 
	  Need to clean up entirity of contact section,
	  reorganize.

	  Should be a back button for sending a message

	  Elements need to be restyled...


#05. 30. 2023

@1333 services.html page complete!

	  To Do Next:
	  - refresh contact page design...

@0925 
	  To Do:
	  - Create submission confirm div ✔️
	  - have sendButton appear active and clickable when fields are filled ✔️
	  - Upon completed submission, confirmPage should appear ✔️

#05. 27. 2023
@1545 Desktop styles for services page complete!
	  Connecting the form to email.js is the final step...

#05. 25. 2023
@1510 Added a topExit to the requestForm and the bouncing animation for the mouse Icon
	  
	  Next to do:
	  - Desktop styles ✔️
	  - connect form to email.js

@1410 May need to add an additional exit button to the top of the requestPrompt due to when
	  mobile browsers have their searchbars at the botton ...

@1345 Finally added a working sync function between the linux folder and the windows side.

@0050 functionality for opening requestForm and closing it.

	  Next:
	  - lil bounce animation for the mouse ✔️
	  - Desktop styles
	  - connect form to email.jss

#05. 23. 2023
@2210 Built requestForm modal for services page
	  
	  Next: desktop styles for everything on page

	  List all needed JS functions:
	  - disable scroll on body while modal is up

#05. 22. 2023
@2340 HTML & CSS(for mobile) complete regarding initial section of Services page

	  To Do:
	  - Build Request form modal ✔️
	  - Desktop styles for everything
	  - JS functionality for launching modal, connecting the form, animations...
For page animations: on page load, everything below the 'scroll down' alert is invisble
until page is scrolled on. 
Alert hovers up and down

#05. 17. 2023
@0735 Issue with 3D effect for landing/mainMenu options fixed


#05. 16. 2023
@1333 Need to adjust 3D affect for landing/mainMenu options
	  issue with the positioning - effect removed for now

#04. 03. 2023
@1205 Coming soon section added for 'Projects' andd 'Video' section
	  reusable function structure really came in clutch here

#04. 02. 2023

@2233 All photos section works + randomizer for image order :D

@2010 Need to get 'all photos' working


#04. 01. 2023

@0200 To Do Next
	  - All photos gallery and imageView ✔️
	  - Desktop and Tablet Styling
	  - TBD section for Projects and Videos ✔️
	  ?! Gotta figure out a solution to the landscape scrolling...

@0145 scrolling is now horizontal :D

@0130 Fixed sizing of elements when imageview rotated, looks perfect.
	  Also removed the body.overflow = hidden from the gallery,
	  and all the menus look / work fine. 

	  However! new issue of the gallery behind imageview still being visible, 
	  causing scrolling down to see it behind the imageview to be possible.
	  Unsure of possible fix right now ...
	  Also, need to fix currentImageCount when going backwards (fixed) ✔️


#03. 31. 2023
@1800	
	Otherwise, imageView more or less complete
	- need to change the info text line spacing for mobile ✔️
	- would like to change the image sliding direction to horizontal ✔️
	- Desktop and Tablet css styling 

	Next, 
	- implement functions and such for All Photos
	- creating "coming soon" or "in progress" sections for Projects and Videos
		- would like to have design similar to original gallery look for projects
		- images have some details in gallery view, but regular imageView

	This was supposed to be noted on branch / repo I made on my phone, however,
	- on mobile, the body having no overflow prevents the page from taking full 
	  width (with how browsers adjust the nav bar these days) ✔️
	  - need to adjust elements so that they're centered regardless ✔️

#03. 30. 2023
@2240 
	clicking images from gallery now launches , but doing so now causes the gallery
	to dissappear. Not sure why or how specifically - needs to be fixed.
	After that:
	- add code for image count ...


#03. 29. 2023

@1650 Current plan:
	  convert imagesWrapper to ul,
	  have js create and push li's with images
	  have clicking on the li's toggle the imageView

@1135 Need to watch for when images are added to gallery imagesWrapper
	  Then, take index of clicked image to open imageView with
	  Current having trouble discerning where / when
	  to run those functions....


#03. 19. 2023
@0745 Need to check old code for process on opening imageView with selected image
	  from the gallery, setting the correct imageTotal and currentImage index, and such.

	  added sessonStorage variable for determining which current gallery is being
	  viewed - however,
	  this would cause whichever gallery is being viewed to be restarted from
	  the top upon return,
	  so i may have to get rid of that implementation :/

#03. 15. 2023
@2325 Added media query for imageView, for smaller phones.
	  Header should also change to alternate logo while viewer is up

	  need to do:
	  - tablet styling, hori & vert
	  - Desktop Styling

#03. 13. 2023
@2255 Initial styling done for infoWrapper components
	  - need to do desktop styling and vertical styling
	  - have background color change while imageViewer up

	  - Add JS functionality for the imageCount and return button 

	  Afterwards,
	  get allimages gallery functional

	  Design "coming soon" page for projects and video
	  probably 'In the Works' in large glitch text

	  Then, done with this section - onto services.

	  Need to plan dual section functionality for about section...

#03. 12. 2023
@1350 Successfully got imageview imported. 
	 * Have to change the direction, from vert swiping to horizonatal.
	 * Have to see if I can make the initial touch more responsive...
	 seems to be a lag. Not sure if this is reflected on mobile
	 * Clean up the code, make the script _agnostic_

	 Then, add other elements,
	 add vertical styling / scripts
	 integrate with rest of page....

#03. 11. 2023
@1145 Return button added to genres menu,
	  return button for both gallery & genres functional.

	  Adjusted positioning of gallery elements, so that
	  they dont move around while images load
	  (header would appear in middle while images loaded)

#03. 10. 2023
@2200 preloaded images get added into 'currentGalleries' array.
	  
	  Next, make changes to imageViewer -> add it

	  Add return button to 'genres' menu (done)

	  if imageWrapper has odd number of children, to add extra margin
	  to that last, odd child

@2140 Implemented a solution for the jittery loading and appending of the images.
	  Is much smoother, and imgs arent visible while they're being added - only after.

	  Effect may be smoother with smaller image sizes...

	  Need to add JS for mobile,
	  that if imageWrapper has odd number of children, to add extra margin
	  to that last, odd child

@2040 The preloader and loader combo now works much better

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