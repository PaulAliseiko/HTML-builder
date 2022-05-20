const fs = require('fs');
const path = require('path');
const dest = path.join(__dirname,'files');
const copyDest = path.join(__dirname,'files-copy');


fs.mkdir(path.join(__dirname, 'files-copy'), { recursive: true }, (err) => {
  if (err) throw err;
});

function checkFiles() {
  fs.readdir(copyDest, (err, files) => {
    if(files.length === 0) {
      copyFiles();
    }
    else {
      files.forEach(file => {
        let pathToCopyFile = path.join(__dirname,'files-copy',file);
        fs.unlink(pathToCopyFile, err => {
          if(err) throw err;
        });
      });
    }
  });
}
checkFiles();
copyFiles();
function copyFiles() {
  fs.readdir(dest, (err, files) => {
    files.forEach(file => {
      let pathToCopyFile = path.join(__dirname,'files-copy',file);
      let pathToFile = path.join(__dirname,'files',file);
      fs.copyFile(pathToFile, pathToCopyFile, err => {
        if(err) throw err;
      });
    });
  });
}
