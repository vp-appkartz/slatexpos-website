const fs = require('fs');
const buffer = fs.readFileSync('/Users/vp/SlateX-website/public/category/qsr/qsr-about-1.png');
// PNG header check
if (buffer[0] !== 0x89 || buffer[1] !== 0x50 || buffer[2] !== 0x4E || buffer[3] !== 0x47) {
  console.log("Not a PNG");
  process.exit(1);
}
console.log("It's a PNG");
