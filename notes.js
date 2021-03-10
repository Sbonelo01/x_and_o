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


for ( var z = 40; z < 400; z += 20 ) { // for ( start her; aslong as this is true; iterate )
	console.log( z, 30, z )
}


// The for ... in loop
// Use case - Iterating over objects and arrays
//The for in statement iterates over all inumerable properties of an object that are keyed by strings,
//(ignoring ones keyed by symbols) including inherited inumerable properties
// *ENUMERABLE PROPERTIES: Properties whose internal enumerable flag is set to true
// *INTERNAL INUMERABLE FLAG: writable - if set to true, the value can be changed, otherwise it's read only
							//enumerable - if set to true, then listed in loops, otherwise, not listed
							//configurable - if set to true, the property can be deleted and these atributes can be modified, else not

const obj = {
	a:1
	b:2
	c:3
}		

for ( const property in obj ) { // for ( variable in object ) { statement }
	console.log(`${property}: ${obj[property]}`)
}




// The for ... of loop
//The for of statement creates a loop iterating over iterable objects. Including strings, arrays, array-like objects,
//(e.g arguments, or NodeList), typedArray, Map, Set and user defined iterables.
//*ITERATOR: In JS, an itertor is an object which defines a sequence and potentially a return value upon its termination
		//	 It is any object which implements the iterator protocol by having a next() method that returns an object with 2 properties


const arr = ['a', 'b', 'c']

for ( const element of arr ) { // for ( varible of interable ) { statement }
	console.log(element)
}
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
//the forEach loop is a high order array function

const animals = ['cat', 'dog', 'bird', 'chicken']
animals.forEach(animal => console.log(animal))

