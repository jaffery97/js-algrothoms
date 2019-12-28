//solution - 1

function FirstReverse(str) { 

  // code goes here  
 return str.split("").reverse().join("");
}
   
// keep this function call here 
console.log(FirstReverse(readline()));


// solution - 2


function FirstReverse(str) { 

    // split string with split("")
   var splitString = str.split("");

   //reverse the split string with reverse();
   var reverseString = splitString.reverse();

   //Join the reverseString with join("")
   return reverseString.join("");
    
  }
     
  // keep this function call here 
  console.log(FirstReverse(readline()));



  // SOLUTION - 3
  //Figure out it later (for loop)

  function FirstReverse(str) { 
  
    var reversedStr = "";
    for(i=str.length - 1;i>0 - 1;i--){reversedStr += str[i];} return reversedStr;
  }
  FirstReverse(readline());

   // SOLUTION - 5
   //ES6 introduces one more way for splitting our string into an array, 
   //and that is a spread operator […]. 
   // Even though this solution is similar to the previous one, 
   //I believe it’s worth mentioning, 
   // because it looks and works pretty great.

  
  function FirstReverse(str){
    return [...str].reverse().join('');
  }

} FirstReverse(readline());


  // Article about three way to solve the first reverse string 
  // https://www.freecodecamp.org/news/how-to-reverse-a-string-in-javascript-in-3-different-ways-75e4763c68cb/
  // https://medium.com/better-programming/5-ways-to-reverse-a-string-in-javascript-466f62845827