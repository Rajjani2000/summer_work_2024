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

function substring_extract(str, start, end)
{
    return str.substring(start,end);
    
}
console.log(substring_extract("RAJ JANI",2,5));


function replace_string(sentance)
{
 

    let new_sentance = sentance.replace(/RAJ/g,"JANI")
    console.log(new_sentance);


}
replace_string("I AM RAJ");


function split_string(split_str)
{
    let new_splited = split_str.split(" ");
    console.log(new_splited);

}
split_string("I AM RAJ");   


function string_to_case(st_case)
{
    let upper_case = st_case.toUpperCase();
    let lower_case = st_case.toLowerCase();
    console.log(upper_case,lower_case);
  

}
string_to_case("RaJ")

function string_includes(str,sub_st)
{
    return str.includes(sub_st);
   
}

console.log(string_includes("I am boy","boy"));

function trim_space(str)
{
    return str.trim();
}
console.log(trim_space(" RAJJANI"));



function repe(str,times)
{
    return str.repeat(times);
}
console.log(repe("RAJ",3));