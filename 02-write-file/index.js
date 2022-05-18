const fs = require('fs');
const process = require('process');
const path = require('path');
const readline = require('readline');
const i = readline.createInterface({
  input:process.stdin,
  output:process.stdout
});

function inp() {
  i.question('Enter your message here and check it in text.txt \n', (answer) => {
    i.on('SIGINT', () => {
      console.log('Input finished!');
      i.close();
      process.stdin.destroy();
    });
    if(answer === 'exit' || answer === 'Exit' || answer === 'EXIT') {
      console.log('Input finished!');
      i.close();
      return process.stdin.destroy();
    }
    let res = answer.toString().trim();
    fs.writeFile(path.join(__dirname, 'text.txt'), (res + '\n'), { flag: 'a+' }, (err) => {
      if (err) throw err;
    });
    inp();
  });
}
inp();