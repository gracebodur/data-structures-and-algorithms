function binaryRep(num) {
    if (num > 0) {
      let binary = Math.floor(num % 2);
      return binaryRep(Math.floor(num / 2)) + binary;
    } else {
      return '';
    }
  }
  
  console.log(binaryRep(25))