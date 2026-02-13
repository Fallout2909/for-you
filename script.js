const messages = [
  "I thought about writing you a little something.",
  "I'm usually not great with words,",
  "but now I’m smiling at my screen like an idiot.",
  "So I guess that’s a good sign.",
  "You’re always playful but soft.",
  "And when you pet my head, I melt a little.",
  "Which is not good for my heart.",
  "Anyway...",
  "Happy Valentine’s 🙂",
  "No pressure.",
  "I just wanted to give you a little smile today.",
  "Thanks for being you."
];

let index = 0;

const textDiv = document.getElementById("text");
const button = document.getElementById("nextBtn");

button.addEventListener("click", () => {

  // If there are still messages left
  if (index < messages.length) {

    textDiv.style.opacity = 0;

    setTimeout(() => {
      textDiv.innerHTML = messages[index - 1];
      textDiv.style.opacity = 1;
    }, 200);

    // If NEXT click will be the last message
    if (index === messages.length - 1) {
      button.innerText = "Okay okay… last one I promise 🫣";
    }

    index++;

  } else {
    // After all messages are shown
    button.style.display = "none";
    showFinalMessage();
  }

});

function showFinalMessage() {
  const finalMsg = document.createElement("div");
  finalMsg.innerHTML = "I hope you like it 😌";
  finalMsg.style.marginTop = "20px";
  finalMsg.style.fontSize = "18px";
  finalMsg.style.opacity = "0";
  finalMsg.style.transition = "0.5s ease";

  document.querySelector(".text-section").appendChild(finalMsg);

  setTimeout(() => {
    finalMsg.style.opacity = "1";
  }, 200);
}
