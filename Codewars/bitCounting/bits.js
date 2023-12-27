var countBits = function(n) {
    const binary = Number(n).toString(2);
    let count = 0;
  
    for (let char of binary) {
      if(char == "1") {
        count++;
      }
    }
    return count;
  };

  countBits(401);

  // optimal code: var countBits = n => Number(n).toString(2).split('0').join('').length;