var fs = require("fs");
var batch = fs.readFileSync("./day4_1.txt").toString('utf-8').split("\r\n\r\n");

count = 0

for(pass of batch){
    byr = pass.indexOf('byr');
    iyr = pass.indexOf('iyr');
    eyr = pass.indexOf('eyr');
    hgt = pass.indexOf('hgt');
    hcl = pass.indexOf('hcl');
    ecl = pass.indexOf('ecl');
    pid = pass.indexOf('pid');
    cid = pass.indexOf('cid');
    //console.log(byr,iyr,eyr,hgt,hcl,ecl,pid)
    if(byr != -1){
        if(iyr != -1){
            if(eyr != -1){
                if(hgt != -1){
                    if(hcl != -1){
                        if(ecl != -1){
                            if(pid != -1){
                                //console.log("valid")
                                count++
                            }
                        }
                    }
                }
            }
        }
    }
}
console.log(count)

//216
//second attempt