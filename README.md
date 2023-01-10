# Simple QR Code Generator

A simple package to convert string to qr code or save it.

## How to use the package

Simply install the package

```bash
npm install simple-qr-code-generator
```

And the use it in your code like this

```JavaScript
const { generateQRCode } = require('qr-code-generator');

// Generate QR Code
const image = generateQRCode('Hello, World!');

// Saving QR Code providing path
saveQRCode(image, './qrCode.png')
```
