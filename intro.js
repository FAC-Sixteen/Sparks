let typed = document.querySelector(".typed");

console.log(typed.textContent.length);

// console.log(typed.innerText.length);

let words = ["Creative Coders...", "Daring Designers...", "Web Developers...", "Pokemon Lovers...", "Team Elite"];

// console.log(words[0].split("").slice(0, [words[0].length]).join(""));

//How to call Immediately Invoking Function Expressions (IIFEs) - these are needed when you want to add a delay between loop iterations: https://borgs.cybrilla.com/tils/javascript-for-loop-with-delay-in-each-iteration-using-iife/

let delay = 40;
let baseline = 0;

for (let i = 0; i < words.length; i++) {

  // let countdown;

  for (let j = 0; j < words[i].length; j++) {

    (function (j) {
      setTimeout(function () {
      typed.textContent += words[i][j];

    }, baseline+(delay*j));
      // if (j == words[i].length-1) {
      //   countdown = j;
      // }
  })(j);
    // typed.textContent = "";

}


    // for (let j = 0; j < words[i].length; j++) {

//     (function (j) {
//       setTimeout(function () {
//       typed.textContent += words[i][j];

//     }, baseline+(delay*j));
//       // if (j == words[i].length-1) {
//       //   countdown = j;
//       // }
//   })(j);

// }

  // console.log(words[i].split("").slice(0, -1).join(""));

  baseline += (delay*words[i].length)*4;

  }

  // console.log(typed.innerText.length);
