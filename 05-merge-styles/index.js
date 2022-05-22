const fs = require('fs');
const path = require('path');
const dest = path.join(__dirname, 'styles');
console.log(dest);


fs.writeFile(path.join(__dirname, 'project-dist','bundle.css'), '', (err) => {
  if (err) throw err;
});

fs.readdir(dest, (err, files) => {
  if (err) throw err;
  let result = [];
  let pathToBundle = path.join(__dirname, 'project-dist','bundle.css');
  files.forEach(file => {
    let pathToFile = path.join(__dirname, 'styles',file);
    fs.stat(pathToFile, (err, stats) => {
      if (err) throw err;
      if (stats.isFile() && path.parse(pathToFile).ext === '.css') {
        fs.readFile(pathToFile, 'utf-8', (err, data) => {
          if (err) throw err;
          result.push(data);
          const writeStream = fs.createWriteStream(pathToBundle);
          writeStream.write(result.join(''));
        });
      }  
    });
  });
});