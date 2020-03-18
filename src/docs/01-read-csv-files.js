//* read csv files with node.js
/**
 * ? https://nodejs.org/api
 * node.js has a lot of modules dedicated to many purposes
 * in the File System Module we can find fs.readFileSync(path[, options])
 * when we use that, it coverts the file into a string
 */

//# 1 import the fs (file system) module from the stanard node library
//? index.ts
/**
 * !if typescript complains about fs, we need to download the type definition file
 * !the type definition file for ALL the standard libraries is the same
 * npm install @types/node
 */
import fs from 'fs';
