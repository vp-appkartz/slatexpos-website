const fs = require('fs');

function checkPNG(filePath) {
  const buffer = fs.readFileSync(filePath);
  // PNG signature
  if (buffer.readUInt32BE(0) !== 0x89504E47) {
    console.log("Not a PNG");
    return;
  }
  
  // Find IHDR chunk to get dimensions
  let offset = 8;
  while (offset < buffer.length) {
    const length = buffer.readUInt32BE(offset);
    const type = buffer.toString('ascii', offset + 4, offset + 8);
    if (type === 'IHDR') {
      const width = buffer.readUInt32BE(offset + 8);
      const height = buffer.readUInt32BE(offset + 12);
      const colorType = buffer.readUInt8(offset + 17);
      console.log(`Dimensions: ${width}x${height}`);
      console.log(`Color Type: ${colorType} (6 means RGBA, 2 means RGB, 3 means Indexed)`);
      break;
    }
    offset += length + 12;
  }
}

console.log("Checking rps-fe.png:");
checkPNG('./public/rps-fe.png');
