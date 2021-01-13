const sentence = "hello there from lighthouse labs";

let delay = 0;

for (let char of sentence) {
  

  setTimeout(function () {
    process.stdout.write(char);
  }, delay);

delay += 50;

}

setTimeout(function () {
  process.stdout.write("\n");
}, 56 * sentence.length);

