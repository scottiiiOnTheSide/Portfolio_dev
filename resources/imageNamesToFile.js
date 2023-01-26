const fs = require('fs');
const path = require('path');

const folderPath = './';
const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif'];
const outputFile = 'imageNames.txt';

const imageNames = [];

const searchImages = (folder) => {

  fs.readdirSync(folder).forEach((file) => {

    const filePath = path.join(folder, file);
    const fileStat = fs.lstatSync(filePath);
    if (fileStat.isDirectory()) {
      
      searchImages(filePath);

    } else if (imageExtensions.includes(path.extname(file))) {
      
      const newFileName = path.join(path.basename(folder), file);
      imageNames.push(newFileName);

    }
  });

};

searchImages(folderPath);

fs.writeFileSync(outputFile, imageNames.join('\n'));
console.log(`Image names written to ${outputFile}`);