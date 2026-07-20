import fs from 'fs';
const buffer = fs.readFileSync('./public/rps-fe.png');
console.log("Size: " + buffer.length);
