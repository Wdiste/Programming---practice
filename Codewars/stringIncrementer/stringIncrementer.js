function incrementString (strng) {
    if(strng.match(/\d+$/)){
        return strng.replace(/\d+$/, match => String(Number(match) + 1).padStart(match.length, '0'));
    }
    else {
        return strng + 1;
    }
  };

  console.log(incrementString('foo00000'))