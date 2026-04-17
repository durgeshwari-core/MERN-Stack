const fs = require('fs');
// to create file
fs.writeFile("hey.txt","hello hey",function(err){
    if(err)console.error(err);
    else console.log(" yess done");
})

// to add text to existing file
fs.appendFile("hey.txt",".......I am good, what about you?",function(err){
    if(err)console.error(err);
    else console.log(" yess done");
})

//to rename file
fs.rename("hey.txt","hello.txt",function(err){
    if(err) console.error(err);
    else console.log(" y done");
})

// to copy file i another file
fs.copyFile("hello.txt","copy.txt",function(err){
    if(err)console.error(err);
    else console.log(" yess done");
})

// delete file
fs = require('fs');
// to create file
fs.writeFile("hey.txt","hello hey",function(err){
    if(err)console.error(err);
    else console.log(" yess done");
})

// to copy file i another file
fs.unlink("hello.txt",function(err){
    if(err)console.error(err);
    else console.log(" yess done");
})

