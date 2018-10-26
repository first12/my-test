const min = (a,b)=>{
  const c = 3;
  return (b-a)*c;
}

module.exports = {
  add (...args) {
    return args.reduce((a, b) => {
      return a + b;
    });
  },
  mul (...args) {
    return args.reduce((a, b) => {
      return a - b;
    });
  },
  // // 覆盖率测试
  // cover(a, b) {
  //   if (a>b) {
  //     return a-b;
  //   }else if(a===b){
  //     return a;
  //   }else {
  //     return min(a,b);
  //   }
  // }
}