
function sumOfEvenNumbers(arr){

    
    let sum = 0;
   for(let x = 0; x < arr.length; x++){
       
      
   if ( arr[x] % 2 === 0){
       sum += arr[x];
   }

} return sum;
}    
          
 let numbers = [1, 2, 3, 4, 5, 6, 7,8, 9,10]
   

       console.log(sumOfEvenNumbers(numbers))
    
  