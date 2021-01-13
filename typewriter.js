// CHALLENGE CREATE AN ANIMATED SENTENCE

// Our goal is to animate the sentence, revealing one character at a time. This would make it look as though it is being typed in by someone, as shown in the GIF above.


const sentence = "hello there from lighthouse labs";

for(let char of sentence) {
//   //console.log(character); // print a /n after every workd and we don't want that. I want a single line.
process.stdout.write(char); // I replaced console for process.stdout.write
}

// setTimeout(() => {
//   //character; 
// }, 1000) // <= 1s delay to make it noticeable. Can dial it down later.



// PLAYING WITH THE WORDS.


//for (let char of sentence) {
//  //console.log(character); // print a /n after every workd and we don't want that. I want a single line.
//  process.stdout.write(char); // I replaced console for process.stdout.write
//}

//setTimeout(() => {
//  console.log('h")
//}, 1000) // <= 1s delay to make it noticeable. Can dial it down later.


// let delay = 0;

// setTimeout(function () {
//   console.log('h');

//   //My code to be executed after 1 second
// }, delay);


// delay = 50;

// setTimeout(function () {
//   console.log('e');

//   //My code to be executed after 1 second
// }, delay);

