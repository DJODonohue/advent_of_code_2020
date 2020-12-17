var fs = require("fs");
var answers = fs.readFileSync("./day6.txt").toString('utf-8').split("\r\n\r\n"); //parse
var sorted_answers = []
var answer_totals = []
function var_to_string(var_obj){
    let string = Object.keys(var_obj)[0]
    return string
}
for (entries of answers) {
    replace = entries.replace(/[\n\r\t]+/g, ' '); //remove newline, return, tab
    after = replace.split(" "); //split by spaces
    sorted_answers.push(after) //push to new array
}

var entry_total = 0
function check_letter(data, letter, letter_variable) {
    if (data.includes(letter) == true) {
        letter_variable = true;
        //console.log(letter, letter_variable)
    }
    if(letter_variable == true){
        //console.log(letter)
        entry_total++
        //console.log(entry_total)
    }
}

function check_all_letters(check){
    check_letter(check, "a", a)
    check_letter(check, "b", b)
    check_letter(check, "c", c)
    check_letter(check, "d", d)
    check_letter(check, "e", e)
    check_letter(check, "f", f)
    check_letter(check, "g", g)
    check_letter(check, "h", h)
    check_letter(check, "i", i)
    check_letter(check, "j", j)
    check_letter(check, "k", k)
    check_letter(check, "l", l)
    check_letter(check, "m", m)
    check_letter(check, "n", n)
    check_letter(check, "o", o)
    check_letter(check, "p", p)
    check_letter(check, "q", q)
    check_letter(check, "r", r)
    check_letter(check, "s", s)
    check_letter(check, "t", t)
    check_letter(check, "u", u)
    check_letter(check, "v", v)
    check_letter(check, "w", w)
    check_letter(check, "x", x)
    check_letter(check, "y", y)
    check_letter(check, "z", z)
}


//console.log(answers)
var a = b = c = d = e = f = g = h = i = j = k = l = m = n = o = p = q = r = s = t = u = v = w = x = y = z = false
//var_to_string(z)
for (entries of answers) {
    check_all_letters(entries)
    answer_totals.push(entry_total)
    //console.log(entry_total)
}
//console.log(sorted_answers)
for(entries of sorted_answers){
    console.log(entries,entries.length)
}


//part 1 6612