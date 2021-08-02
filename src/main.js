//see the path relative or absolute and other
const oss = require('os'); //property's node.js
const fs = require('fs');

const firstTest = () =>{ //I'm use these property
    let cpu = oss.cpus();
   /*  let system = oss.platform();
    let user = oss.hostname(); */
  
    let cpuString = JSON.stringify(cpu);
    fs.appendFile('textCode.txt', `informacion del cpu:  ${cpuString}`, function(error){
        if(error){
            console.log('error al crear archivo');
        }
    });
};
module.exports = {
    firstTest
};