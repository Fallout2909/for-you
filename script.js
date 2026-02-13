const messages = [
  "I thought about writing you a little something, but I'm not great with words.",
  "Now I'm smiling at my screen thinking about you. So I guess that's a good sign.",
  "I always look forward to seeing you. You make things more fun.",
  "You're always playful and teases me.",
  "And when you pet my head, I melt a little.",
  "When you smile at me, it's dangerous.",
  "When you hold my hand, I don.t really want to let go.",
  "You're actually quite dangerous for me.",
  "Anyway...",
  "Happy Valentine's 🙂",
  "I just wanted to give you a little smile today.",
  "Because you always make me smile.",
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
  finalMsg.innerHTML = "Hope it made you smile 😌";
  finalMsg.style.marginTop = "20px";
  finalMsg.style.fontSize = "18px";
  finalMsg.style.opacity = "0";
  finalMsg.style.transition = "0.5s ease";

  document.querySelector(".text-section").appendChild(finalMsg);

  setTimeout(() => {
    finalMsg.style.opacity = "1";
  }, 200);
}
