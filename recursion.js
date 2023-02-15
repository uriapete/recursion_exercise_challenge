function factorial(num){
		// negative numbers will not work in our function
		if ( num < 0 ) { return undefined }
		
		// the factorial of 0 is 1
		if (num === 0) { return 1 } 

		// return when num is equal to 1
		if (num === 1) { return num }
		else{
			// if num is greater than 1, run the factorial 
			// function again (recursion!) decrementing num by 1
			return num * factorial(num - 1); 
		}
	}	
		
// if we wanted the factorial of 3, 
// we'll want our function to return 3 * 2 * 1 which equals 6
console.log(factorial(3)) // output: 6

// same if we entered 5 
// 5 * 4 * 3 * 2 * 1 = 120
console.log(factorial(5)) // output: 120

// the factorial of 0 is 1
console.log(factorial(0)) // output: 1

// any negative numbers will return undefined 
console.log(factorial(-5)) // undefined