let regex;
function isFirstLetterUpperCase(str) {
  regex = /^[A-Z]/;
  if (regex.test(str)) {
    console.log("String's first character is uppercase");
  } else {
    console.log("String's first character is not uppercase");
  }
}
isFirstLetterUpperCase("La Hoàng Giang");
isFirstLetterUpperCase("lA hOÀNG gIANG");
