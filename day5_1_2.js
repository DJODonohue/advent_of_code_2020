var fs = require("fs");
var batch = fs.readFileSync("./day5_1.txt").toString('utf-8').split("\w*"); //parse
var batch2 = [] // make a new array for a secondary parse

for (bit of batch) {
    x = bit.split("\n"); //split by newline
    batch2.push(x); //push to second array
}

var pass = batch2[0]; //second array is nested, pull it out
const row_number = [...Array(128).keys()]; // array of numbers for rows
const column_number = [...Array(8).keys()]; // array of numbers for columns
var row = [] //array of row numbers
var column = [] //array of column numbers

function slice_F(array) { //function for slicing array if character is F or L
    length = array.length
    zero = 0
    half = Number(array.length / 2);
    let array_F = array.slice(zero, half); //for some reason slice didn't like (0, half)
    return array_F; //return new array
}
function slice_B(array) { //function for slicing array if character is B or R
    length = array.length
    zero = 0
    half = Number(array.length / 2);
    let array_B = array.slice(half);
    return array_B; //return new array
}

function is_f(to_split) { //not sure if these were necessary, but it makes it easier to read
    let split = slice_F(to_split);
    return split
}

function is_b(to_split) {
    let split = slice_B(to_split);
    return split
}

function is_l(to_split) {
    let split = slice_F(to_split);
    return split
}

function is_r(to_split) {
    let split = slice_B(to_split);
    return split
}

for (string of pass) { //iterate through pass array
    let arr = row_number
    let LR = column_number
    for (char of string) { //iterate through characters in string
        if (char == "F") {
            arr = is_f(arr)
        }
        if (char == "B") {
            arr = is_b(arr)
        }
        if (char == "L") {
            LR = is_l(LR)
        }
        if (char == "R") {
            LR = is_r(LR)
        }

    }
    row.push(Number(arr)) //push rows to row_number
    column.push(Number(LR)) //push columns to column number
}

let full_id = [] //new array for "full IDs"

function multiply(row, column, x) { //function for calculating the full ID
    if (row[x] * 8 + column[x] != undefined) {
        full_id.push(row[x] * 8 + column[x])
    }
}

for (x = 0; x <= row.length; x++) { //this is probably not the best way to do this but it worked
    multiply(row, column, x)
}

full_id.pop() //except for that extra undefined at the end

let sorted_id = full_id.sort(function (a, b) { //sort by low to high
    return a - b;
})

console.log("highest seat number:", Math.max(...sorted_id)) //highest seat number

/*

--- Stolen from Stack Overflow ---

let missingNumbers = (a, l=true) => Array.from(Array(Math.max(...a)).keys()).map((n, i) => a.indexOf(i) < 0  && (!l || i > Math.min(...a)) ? i : null).filter(f=>f);
console.log(missingNumbers(sorted_id))

--- Stolen from Stack Overflow ---

*/

//the answer is 653 but you used stack overflow and pasted in an answer.
//do it yourself

for (ID of sorted_id) {
    if (ID + 1 != sorted_id[sorted_id.indexOf(ID + 1)] && ID != 951) {

        if (sorted_id[sorted_id.indexOf(ID + 1)] == undefined) {
            console.log("your seat:", ID + 1)
        }
    }
}

//see you could have just done that from the beginning
//don't forget that you can only print out entries that exist in the array.

