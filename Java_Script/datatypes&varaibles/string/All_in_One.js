function concatenation(first_name,last_name)
{
    return first_name + last_name;
}
console.log(concatenation('raj','jani'));

function string_length(str)
{
    return str.length;
}
console.log("String Length is "+" "+string_length("RAJ"));


// function accessing_element(mystr)
// {
//     return mystr.charAt(0);
// }
// console.log("RAJ"+" "+ "First Element is "+ " "+accessing_element("RAJ"));


// function last_element(mystr_last)
// {
//     return mystr_last.charAt(mystr_last.length-1);
// }

// console.log("RAJ"+" "+"Last Element is "+" "+last_element("RAJ"))

function access_element(string)
{
    let first_element = string.charAt(0);
    let last_element = string.charAt(string.length-1);
    return {first_element,last_element};
}
let passing_value = access_element("RAJ");


console.log("First Element is "+" "+passing_value.first_element);
console.log("Last Element is"+" "+passing_value.last_element);