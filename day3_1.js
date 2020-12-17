var fs = require("fs");
var text = fs.readFileSync("./day3_1.txt").toString('utf-8').split("\n");
// console.log((text[1].split(''))[9])
h = 0
v = 0
count = 0
//console.log(text.length)
function move_log(){
    while(text[v] != undefined){
        h = h + 3;
        v = v + 1;
        if(h == 34)h = 3;
        if(h == 33)h = 2;
        if(h == 32)h = 1;
        if(h == 31)h = 0;
        if(v == text.length)break;
        if(((text[v].split(''))[h]) == '#')count++;
        //console.log(((text[v].split(''))[h]));
        //console.log(h,v,count);
    }
}
move_log();
console.log(count);