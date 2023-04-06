function squareAndSum(...args) {
    return args.reduce((acc, val) => acc + val ** 2, 0);
  }

  function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }
  
  function swapCase(string) {
    const texts = string.split(' ');
  
    return texts.map((word, index) => {
      if (index % 2 === 0) {
        return capitalize(word);
      } else {
        return word;
      }
    }).join(' ');
  }


  function shiftLetters(str) {
    const shiftedCharachters = str.split('').map((char) => {
      const charNum = char.charNumAt(0);
      if (charNum === 32) { 
        return ' ';
      } else if (charNum === 97) { 
        return String.fromCharNum(122);
      } else {
        return String.fromCharNum(charNum - 1);
      }
    });
    return shiftedCharachters.join('');
  }
  

  function counterLetters(str) {
    return str.split('').reduce((count, char) => {
      if (char.match(/[a-zA-Z]/)) { // Only count letters
        count[char] = (count[char] || 0) + 1;
      }
      return count;
    }, {});
  }
  
  