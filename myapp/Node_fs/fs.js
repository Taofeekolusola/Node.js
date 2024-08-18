const fs = require('fs');
const path = require('path');
const { fileURLToPath } = require('url');


//1 how to read write delete and update files


//Reading the files
//let content = fs.readFileSync(path.join(__dirname, 'f1.txt'))

//console.log('Data of f1 ->' + content)

//Writing into a file

// let content = 'This is some data to be written into the f.txt.'

// fs.writeFileSync(path.join(__dirname, 'f.txt'), content)

// console.log('File written successfully.')

//Update file
// let content = 'This is some data to be appended into the f.txt.'
// fs.appendFileSync(path.join(__dirname, 'f.txt'), content)
// console.log('File updated successfully')

//deleting a file
// fs.unlinkSync(path.join(__dirname, 'f4.txt'));
// console.log('file deleted successfully')