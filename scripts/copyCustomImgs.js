// scripts/copyLogo.js
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();

if (process.env.CUSTOM === 'true') {
  console.log('Copying custom images...');
  // LOGO
  const sourcePath = path.resolve(process.cwd(), './config/logo.png');
  const destinationPath = path.resolve(process.cwd(), './public/img/custom_logo.png');

  if (fs.existsSync(sourcePath)) {
    fs.writeFileSync(destinationPath, fs.readFileSync(sourcePath));
  } else {
    console.log(`Source file ${sourcePath} does not exist.`);
  }

  // FAVICON
  const sourcePathFavicon = path.resolve(process.cwd(), './config/favicon.ico');
  const destinationPathFavicon = path.resolve(process.cwd(), './public/custom_favicon.ico');

  if (fs.existsSync(sourcePathFavicon)) {
    fs.writeFileSync(destinationPathFavicon, fs.readFileSync(sourcePathFavicon));
  } else {
    console.log(`Source file ${sourcePathFavicon} does not exist.`);
  }
}