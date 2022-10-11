function isPrime(number) {
    let pembagi = 0;
    for(let i=1; i <= number; i++){
        if(number%i == 0){
            pembagi++
        }
    }
        if(pembagi == 2){
          return true
        }else{
          return false
        }
      }
  // TEST CASES
  console.log(isPrime (3)); 
  console.log(isPrime (7));
  console.log(isPrime (6));
  console.log(isPrime (23));
  console.log(isPrime (33));
