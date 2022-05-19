const fs = require('fs');
const path = require('path');
const dest = path.join(__dirname,'secret-folder');
console.log('\n');

fs.readdir(dest, (err, files) => {
  files.forEach(file => {
    let pathToFile = path.join(__dirname,'secret-folder',file);
    fs.stat(pathToFile, (err, stats) => {
      if (err) throw err;
      if (stats.isFile()) {
        console.log(`${path.parse(pathToFile).name} - ${(path.parse(pathToFile).ext).slice(1)} - ${Math.round((stats.size / 1024)*100)/100}Kb`);
      }  
    });
  });
});