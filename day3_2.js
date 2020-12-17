var fs = require("fs");
var map = fs.readFileSync("./day3_1.txt").toString('utf-8').split("\n");


function move(x,y){
    h = 0
    v = 0
    count = 0
    while(map[v] != undefined){
        h = h + x;
        v = v + y;
        if(h >= 31)h = h-31;
        if(v >= map.length)break;
        if(((map[v].split(''))[h]) == '#')count++;
    }
    return count
}

function run(){
    console.log(move(1,1)*move(3,1)*move(5,1)*move(7,1)*move(1,2))
}

run()

