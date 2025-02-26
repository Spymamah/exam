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
     
   
function loginSystem(username, password) {
    if (username === "admin" && password === "1234") {
        console.log("Login successful");
    } else if (username === "admin" && password !== "1234") {
        console.log("Incorrect password");
    } else {
        console.log("User not found");
    }
}

loginSystem("admin", "1234");                                     
loginSystem("admin", "wrong"); 
loginSystem("user", "1234"); 

function binarySearch(arr, target){
    let left = 0; let right = arr.length-1;
    while (left <= right) {
      let  mid = Math.floor((left + right)/2);
      if (arr[mid] === target)
        return mid;
    else if (arr[mid] < target){
        left = mid + 1;
    }
    else {
        right = mid - 1;
    }
}
return -1;
}
const arr = [1, 2, 3, 4, 5, 6,]
const target = 5;

const result = binarySearch(arr, target)

if (result !== -1) {
    console.log(`Element is present at index ${result}`);
}else{
    console.log(`element not present in the array`)
}
