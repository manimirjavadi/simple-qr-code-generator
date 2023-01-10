const qr = require("qr-image");
const fs = require("fs");

// Generate the QR Code
function generateQRCode(text) {
  return qr.imageSync(text, { type: "png" });
}

// Save to path
function saveQRCode(image, path) {
  try {
    fs.writeFileSync(path, image);
    console.log(`QR Code saved to ${path}`);
  } catch (e) {
    console.log(`Could not save the file to path ${path}. Error: ${e}`);
  }
}

// Export the modules
module.exports = {
  generateQRCode,
  saveQRCode,
};
