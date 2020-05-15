function triangleNum(num) {
    // 3 + 2 + 1
  
    // when num is 1 return 1
    if (num === 1) {
      return 1;
    }
  
    return num + triangleNum(num-1);
    
  }
  
  console.log(triangleNum(4));
  console.log(triangleNum(5));