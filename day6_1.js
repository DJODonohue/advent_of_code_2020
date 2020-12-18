var fs = require("fs");
var answers = fs.readFileSync("./day6.txt").toString('utf-8').split("\r\n\r\n"); //parse
var sorted_answers = []
var answer_totals = []
var a = b = c = d = e = f = g = h = i = j = k = l = m = n = o = p = q = r = s = t = u = v = w = x = y = z = false
var entry_total = 0
var day2 = 0

for (entries of answers) {
    replace = entries.replace(/[\n\r\t]+/g, ' '); //remove newline, return, tab
    after = replace.split(" "); //split by spaces
    sorted_answers.push(after) //push to new array
}

function check_letter(data, letter, letter_variable) { //function for checking if string contains character
    if (data.includes(letter) == true) {
        letter_variable = true;
    }
    if (letter_variable == true) { //add to total if true
        entry_total++
    }
}

function check_all_letters(check) { //function for checking each letter
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

for (entries of answers) { // for loop to iterate through array
    check_all_letters(entries)
    answer_totals.push(entry_total)
}
console.log("total number of answers:",'\n',entry_total) //answer for part 1

function part_2(data, string, variable) { //need to modify check letter, as the variable needs to match the length of the array
    if (data.includes(string) == true) {
        variable++
        return variable
    }
}

function part_2e(variable, check) { //check number of times string is present, compare that to length
    if (variable == check) {
        day2++
        variable = 0 //variable needs to be reset after check
    } else {
        variable = 0 //variable needs to be reset after check
    }
}

for (entry of sorted_answers) {
    var a = b = c = d = e = f = g = h = i = j = k = l = m = n = o = p = q = r = s = t = u = v = w = x = y = z = 0
    let quantity = entry.length //find the length of the array
    for (person of entry) { //iterate through each individual person
        a = part_2(person, "a", a); //we're returning a variable from a function, so assignment is necessary
        b = part_2(person, "b", b);
        c = part_2(person, "c", c);
        d = part_2(person, "d", d);
        e = part_2(person, "e", e);
        f = part_2(person, "f", f);
        g = part_2(person, "g", g);
        h = part_2(person, "h", h);
        i = part_2(person, "i", i);
        j = part_2(person, "j", j);
        k = part_2(person, "k", k);
        l = part_2(person, "l", l);
        m = part_2(person, "m", m);
        n = part_2(person, "n", n);
        o = part_2(person, "o", o);
        p = part_2(person, "p", p);
        q = part_2(person, "q", q);
        r = part_2(person, "r", r);
        s = part_2(person, "s", s);
        t = part_2(person, "t", t);
        u = part_2(person, "u", u);
        v = part_2(person, "v", v);
        w = part_2(person, "w", w);
        x = part_2(person, "x", x);
        y = part_2(person, "y", y);
        z = part_2(person, "z", z);
    } //after each for loop, we need to check the variables against the length
    part_2e(a, quantity);
    part_2e(b, quantity);
    part_2e(c, quantity);
    part_2e(d, quantity);
    part_2e(e, quantity);
    part_2e(f, quantity);
    part_2e(g, quantity);
    part_2e(h, quantity);
    part_2e(i, quantity);
    part_2e(j, quantity);
    part_2e(k, quantity);
    part_2e(l, quantity);
    part_2e(m, quantity);
    part_2e(n, quantity);
    part_2e(o, quantity);
    part_2e(p, quantity);
    part_2e(q, quantity);
    part_2e(r, quantity);
    part_2e(s, quantity);
    part_2e(t, quantity);
    part_2e(u, quantity);
    part_2e(v, quantity);
    part_2e(w, quantity);
    part_2e(x, quantity);
    part_2e(y, quantity);
    part_2e(z, quantity);
}
console.log("number of answers where all members said 'yes':",'\n',day2)

//part 1 6612
//part 2 3268
