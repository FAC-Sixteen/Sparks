let typed = document.querySelector(".typed");

let words = ["Creative Coders... ", "Daring Designers... ", "Web Developers... ", "Pokemon Lovers... ", "Team Elite"];

//How to call Immediately Invoking Function Expressions (IIFEs) - these are needed when you want to add a delay between loop iterations: https://borgs.cybrilla.com/tils/javascript-for-loop-with-delay-in-each-iteration-using-iife/

let delay = 40;
let baseline = 0;

for (let i = 0; i < words.length; i++) {

  for (let j = 0; j < words[i].length; j++) {

    (function (j) {
      setTimeout(function () {
        typed.textContent += words[i][j];

    }, baseline+(delay*j));
  })(j);

  }

  baseline += (delay*words[i].length)*4;

  }
