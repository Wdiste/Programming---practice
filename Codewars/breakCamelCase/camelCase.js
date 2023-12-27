function solution(string) {
    return string.split(/(?=[A-Z])/g).join(" ");
    
}

solution('camelCaseBoxOffice');

// Complete the solution so that the function will break up camel casing, using a space between words.
//
//      'camelCasing' => 'camel Casing'
//      'identifier' => 'indentifier'


// using (?=) in regex doesnt remove the match