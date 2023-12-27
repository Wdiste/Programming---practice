function duplicateCount(text){
    const lowerTxt = [...text.toLowerCase()].filter((value, index) => text.indexOf(value) !== index);
    // console.log(lowerTxt)
    // console.log(unique);
    return new Set(lowerTxt).size;
}

console.log(duplicateCount("a9ritt29dAA"));

// Spread chars in text to an array, make all chars lowercase for compare.
// Filter that array for duplicates.  use new Set(array) to make a set of unique elements.
// Return the size of the Set of unique elements.


// best practice: 

function duplicateCount(text){
    return (text.toLowerCase().split('').sort().join('').match(/([^])\1+/g) || []).length;
  }

  // match function uses REGEX to compare chars