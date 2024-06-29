const {
  repe,
  trim_space,
  string_to_case,
  split_string,
  replace_string,
  substring_extract,
  access_element,
  string_length,
  concatenation,
} = require("./all_Sting");

// Concatenation Testing......
test("concartenation Succesful", () => {
  expect(concatenation("raj", "jani")).toBe("rajjani");
});

// String Length Testing.......
test("string length testing successful", () => {
  expect(string_length("Raj")).toBe(3);
});

// String Extraction Testing....
test("substring extract testing successful", () => {
  expect(substring_extract("RAJ JANI", 2, 5)).toBe("J J");
});

// Access Element Testing....
test("Access Element Testing Succesful", () => {
  expect(access_element("RAJ")).toBe("R");
});

// Trim Testing ........
test("trim testing Succesfully", () => {
  expect(trim_space(" RAJ")).toBe("RAJ");
});

// String Repeatation Testing....
test("String Testing Succesfull", () => {
  expect(repe("RAJ", 3)).toBe("RAJRAJRAJ");
});

// String Case
test("String Case Succesfully completed", () => {
  expect(string_to_case("raj")).toBe("RAJ");
});

// Split testing..
test("Split Testing Succes", () => {
  expect(split_string("I AM RAJ")).toEqual(["I", "AM", "RAJ"]);
});

// Replace Testing....
test("Replace Testing Suceess", () => {
  expect(replace_string("I AM RAJ", "AM", "WAS")).toBe("I WAS RAJ");
});
