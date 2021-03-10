//we write loops to repeat a bit of code over and over / repeat it and change something
//loops are there to help us save time

// The while loop is a way to repeat code until some condition is false


//aslong as x is less than 400 this while loop will display the value at x at (30, y)
//the loop adds 20 to x each time it runs
var x = 40;
while ( x < 400 ) {
	console.log( x, 30, x )
	x += 20
}

//it is important that the condition inside the paranthesis becomes faslse at some point - otherwise, we will have an infinite loop
//this is an infinite loop
var y = 40;
while ( y < 400 ) {
    console.log( y, 30, y );
}

// the for loop is just like the while loop, different sytax
for ( var z = 40; z < 400; z += 20 ) {
	console.log( z, 30, z )
}


//do while loop
//this loop will always be executed at least once - EVEN if the condition is faslse
//because the codeblock before the condition is tested

let i = 0;

do {
	console.log( `number: ${i}` )
	i++;
}
while ( i < 5 )

//forEach loop
//this loop is used to iterate over elements in an array and executes for each element present in the array
//for each item in the array: update the value with 2 times the original value

let numbers = [1,2,3,4]
numbers.forEach(function(item, index, arr) {
	arr[index] = item * 2
})
