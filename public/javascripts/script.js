"use strict"
let age = confirm('Вам есть 18?');
// if (age) alert(`добро пожаловать`);
// else window.close();
// console.log(+age);
// console.log(typeof +age);
let accessAllowed = (age) ? console.log("approve"): window.close(); 



let soundPlay = () => {
    let audio = new Audio();
    audio.src = './audio/A.mp3';
    audio.play()
}

// function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else no();
//   }
  
//   ask(
//     "Поехали?",
//     function() { alert("Вы согласились."); },
//     function() { alert("Вы отменили выполнение."); }
//   );