const qr = require("qr-image");
const fs = require("fs");

// Generate the QR Code
function generateQRCode(text) {
  return qr.imageSync(text, { type: "png" });
}

// Save to path
function saveQRCode(image, path) {
  fs.writeFileSync(path, image);
  console.log(`QR Code saved to ${path}`);
}

module.exports = {
  generateQRCode,
  saveQRCode,
};
