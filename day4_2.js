var fs = require("fs");
var batch = fs.readFileSync("./day4_1.txt").toString('utf-8').split("\r\n\r\n");

count = 0

var batch2 = []

for (bit of batch) {
    x = bit.replace(/[\n\r\t]+/g, ' '); //remove newline, return, tab
    y = x.split(" "); //split by spaces
    batch2.push(y) //push to new array
}
for (group of batch2) { //we need to iterate through the array we just made
    let byr_v = false //define validation variables (true/false)
    let iyr_v = false //starting with false is fine, since if the variable isn't present, it is false
    let eyr_v = false
    let hgt_v = false
    let hcl_v = false
    let ecl_v = false
    let pid_v = false
    for (inside of group) {
        z = inside.split(":"); //each identifyer is 3 characters and a colon, we can split by that

        if (z[0] == "byr") { //check for the first entry in the new 2 length array
            if (z[1] <= 2002 && (z[1] >= 1920)) { //validate the 2nd entry in the array
                byr_v = true //assign true if passing, will remain false if failed
            }
        }
        if (z[0] == "iyr") { //first entry check
            if (z[1] <= 2020 && (z[1] >= 2010)) { //validate 2nd entry
                iyr_v = true //assign if passing
            }
        }
        if (z[0] == "eyr") { //3rd time's the charm
            if (z[1] <= 2030 && (z[1] >= 2020)) { //validate
                eyr_v = true; //assign
            }
        }
        if (z[0] == "hgt") { //this one is more difficult because of unit translation
            a = z[1]; //original //pull the full second entry
            b = a.replace(/cm|in/, ""); //remove unit and replace with blank
            c = a.slice(-2); //standalone unit //isolate the measurement unit
            if (c == "cm") { //check for "cm" unit
                if (b <= 193 && (b >= 150)) { //validate
                    hgt_v = true; //assign
                }
            }
            if (c == "in") { //check for "in" unit
                if (b <= 76 && (b >= 59)) { //validate
                    hgt_v = true; //assign
                }
            }
        }
        if (z[0] == "hcl") {
            a = z[1]
            if (a.charAt(0) == "#") { //find if the first character is an "#"
                if (a.length == 7) { //find if the length is correct
                    hcl_v = true; //assign
                } //realistically, there should be a bit more validation here
            } // there is nothing stopping entries of g-z
        }
        if (z[0] == "ecl") { //eye color is the easiest, just a long if statement
            a = z[1];
            if (a == "amb" || a == "blu" || a == "brn" || a == "gry" || a == "grn" || a == "hzl" || a == "oth") {
                ecl_v = true; //assign
            }
        }
        if (z[0] == "pid") { //this is where I forgot to use two "=" for validation
            a = z[1];
            if (a.length == 9) { //check the length
                if (a.match(/\D/g)) { //find if the entry has non-digits
                    pid_v = false //set false if non-digits are present
                } else { pid_v = true } //assign

            }
        }
    }
    if ((byr_v == true) && (iyr_v == true) && (eyr_v == true) && (hgt_v == true) && (hcl_v == true) && (ecl_v == true) && (pid_v == true)) {
        //check if all statements are true
        count++ //add to valid count
    }
}
console.log(count) //print valid count

/* comments:

HOLY SHIT DID THIS TAKE FOREVER

Don't forget that you need TWO "=" for a check

Pretty much had to re-write the entire program to get this to work

You should be proud of this, this is some headdy code right here

*/
/*Everything below this marker is pretty much useless for this problem*/

/* ------------------------------------------------------------------ */

/*for(pass of group){
    byr = pass.indexOf('byr');
    console.log(byr)
    if(byr != -1){byr_v = pass.slice(byr + 4, byr + 8); console.log("birth year:",byr_v)
}
    iyr = pass.indexOf('iyr');
    if(iyr != -1){iyr_v = pass.slice(iyr + 4, iyr + 8); console.log("issue year:",iyr_v)
}
    eyr = pass.indexOf('eyr');
    if(eyr != -1){eyr_v = pass.slice(eyr + 4, eyr + 8); console.log("expiration year:",eyr_v)
}
    hgt = pass.indexOf('hgt');
    if(hgt != -1){hgt_v = pass.slice(hgt + 4, hgt + 8); console.log("height:",hgt_v)
}
    hcl = pass.indexOf('hcl');
    if(hcl != -1){hcl_v = pass.slice(hcl + 4, hcl + 8); console.log("hcl:",hcl_v)
}
    ecl = pass.indexOf('ecl');
    if(ecl != -1){ecl_v = pass.slice(ecl + 4, ecl + 8); console.log("ecl:",ecl_v)
}
    pid = pass.indexOf('pid');
    if(pid != -1){pid_v = pass.slice(pid + 4, pid + 8); console.log("pid:",pid_v)
}
    cid = pass.indexOf('cid');
    //console.log(byr,iyr,eyr,hgt,hcl,ecl,pid)
    if(byr != -1){
        console.log("byr")
        if(iyr != -1){
            console.log("iyr")
            if(eyr != -1){
                console.log("eyr")
                if(hgt != -1){
                    console.log("hgt")
                    if(hcl != -1){
                        console.log("hcl")
                        if(ecl != -1){
                            console.log("ecl")
                            if(pid != -1){
                                console.log("pid")
                                console.log("valid")
                                count++
                                console.log(count)
                            } else {console.log("pid errn")}
                        } else {console.log("ecl err")}
                    } else {console.log("hcl err")}
                } else {console.log("hgt err")}
            } else {console.log("eyr err")}
        } else {console.log("iyr err")}
    } else {console.log("byr err")}
}
}*/
//console.log(count)

