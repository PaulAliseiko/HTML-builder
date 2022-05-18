const path = require('path');
const fs = require('fs');
const process = require('process');
const read = fs.createReadStream(path.join(__dirname, 'text.txt'), 'utf-8');
read.pipe(process.stdout);
