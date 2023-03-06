
const path = require('path');
const fs = require('fs');
const imagesFolder = path.resolve(__dirname, '../img');	

function createGalleryObject(mainFolder) {

	/*collection of images, by genre, to be exported as JSON object into 
	  seperate file */
	let exportArray = [];
	let allImages = []

	/*reads each folder / object within main folder*/
	let galleries = fs.readdirSync(mainFolder);

	galleries.forEach(folder => {

		let album = {
			genre: folder,
			images: [],
		}


		let dir = mainFolder + '/' + folder;

		let images = fs.readdirSync(dir);
		images.forEach(img => {
			album.images.push(img);
			
		})

		exportArray.push(album);
	});

	return exportArray;
}


let gallery = createGalleryObject(imagesFolder);

/* deconstruct to then reorganize */
let [one, two, three, four] = gallery;
let allImages = [];

for(let i=0;i<gallery.length;i++) {

	for(let e=0; e<gallery[i].images.length;e++) {
		allImages.push(gallery[i].images[e])
	}
}
gallery = [four, three, two, one, allImages]

let result = 'let images =' + JSON.stringify(gallery);

fs.writeFileSync('./js/images.js', result, 'utf-8');