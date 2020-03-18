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

//#2 read the csv file readFileSync()
/**
 * ? index.ts
 * this will turn the cile into a big string
 */
const matches = fs.readFileSync('football.csv', {
  encoding: 'utf-8'
});

//# 3 get the rows and cols
/**
 * ? index.js
 * we can get the row splitting the string by '\n' (line break)
 * this will result in an array of strings
 *
 * we then split the array of strings again by ',' so that we can get all the cells value
 */
const matches = fs
  .readFileSync('football.csv', {
    encoding: 'utf-8'
  })
  .split('\n')
  .map((row: string): string[] => {
    return row.split(',');
  });
