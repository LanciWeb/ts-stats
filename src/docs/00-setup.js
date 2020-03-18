//** SETUP TYPESCRIPT PROJECT */

//# 01 Install NPM
/**
 * This bootstraps a new npm project so that we can manage our dependencies
 */
npm init -y

//# 02 Install Typescript Compiler
// Generates a tsconfig.json file that allows us to compile typescript files at save
tsc --init

//# 03 Install Nodemon and Concurrently
/**
 * nodemon allows us to watch our files and reload the project while we edit files
 * concurrently allows to launch a set of npm scripts all together
 */
npm i nodemon concurrently

//#04 Create a build folder
// we need to create a build folder to be put in the root of the project, outside src.

//#05 Create the root index.ts file
//this file inside src is going to be our root for the application

//#06 Setup the outDir (out directory) and rootDir (root directory) in the tsconfig.json file
//We need to uncomment "outDir" in tsconfig.json file and put "./build"
//We need to uncomment "rootDir" in tsconfig.json file and put "./src"
//? tsconfig.json

//#07 Setup the scripts in package.json 
//? package.json
"scripts": {
  "start:build": "tsc -w", //watches the tyescript compiler
  "start:run": "nodemon build/index.js", //builda
  "start": "concurrently npm:start:*" //raqnna entrambi
}

/**
 * Now  we just need to do npm start
 * ! but first we need to put some js code into index.ts other
 */
