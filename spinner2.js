
const spin = function (char, num) {
  setTimeout(() => {
    process.stdout.write(`\r${char}     `);
  }, num);  
}

let charArr = ["|","/","-","\\"];
let num = 100;
for (let char of charArr) {
  num += 100;
  spin(char, num);
};

