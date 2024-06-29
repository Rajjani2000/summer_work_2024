// function 1
function concatenation(first_name, last_name) {
  return first_name + last_name;
}
console.log(concatenation("raj", "jani")); //Output :-  rajjani;


// function 2
function string_length(str) {
  return str.length;
}
console.log("String Length is " + " " + string_length("RAJ")); //Output :-  3


// function 3
function access_element(string) {
  let first_element = string.charAt(0);
  return  first_element ;
}
let passing_value = access_element("RAJ");

// output
// First Element is  R
// Last Element is J


// function 4
function substring_extract(str, start, end) {
  return str.substring(start, end);
}
console.log(substring_extract("RAJ JANI", 2, 5));
//Output
// J J


// function 5
function replace_string(str, search, rep_str) {
  let new_sentance = str.replace(search, rep_str);
  return new_sentance;
}

// Output
// I AM JANI


// function 6
function split_string(split_str) {
  let new_splited = split_str.split(" ");
  return new_splited;
}
// split_string("I AM RAJ");

// Output
// [ 'I', 'AM', 'RAJ' ]

// function 7
function string_to_case(st_case) {
  let upper_case = st_case.toUpperCase();
   return upper_case;
}
string_to_case("raj");

// Output
// RAJ raj

// function 8
function string_includes(str, sub_st) {
  return str.includes(sub_st);
}
console.log(string_includes("I am boy", "boy"));

// function 9
function trim_space(str) {
  return str.trim();
}
console.log(trim_space(" RAJJANI"));
// Output
// RAJJANI


// function 10
function repe(str, times) {
  return str.repeat(times);
}
console.log(repe("RAJ", 3));
// Output
// RAJRAJRAJ

//function 11
function greet(name) {
    return `Hello, ${name}!`;
}

// let greetingMessage = greet('RAJ');
// console.log(greetingMessage); // Output: Hello, Alice!

module.exports = {
  repe,
  trim_space,
  string_to_case,
  split_string,
  replace_string,
  substring_extract,
  access_element,
  string_length,
  concatenation,
  greet,

};