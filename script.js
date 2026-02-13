const messages = [
  "I thought about writing you a little something, but I'm not great with words.",
  "Now I'm smiling at my screen thinking about you. So I guess that's a good sign.",
  "I always look forward to see you. You make things more fun.",
  "You're always playful and tease me.",
  "And when you pet my head, I melt a little.",
  "When you smile at me, it's dangerous.",
  "When you hold my hand, I don't really want to let go.",
  "You're actually quite dangerous for me.",
  "Anyway...",
  "Happy Valentine's 🙂",
  "I just wanted to give you a little smile today.",
  "Because you always make me smile."
];

let index = 0;

const textDiv = document.getElementById("text");
const button = document.getElementById("nextBtn");

button.addEventListener("click", () => {

  if (index < messages.length) {

    // Fade out text
    textDiv.style.opacity = 0;
    textDiv.style.transform = "translateY(5px)";

    setTimeout(() => {
      textDiv.innerHTML = messages[index - 1];
      textDiv.style.opacity = 1;
      textDiv.style.transform = "translateY(0)";
    }, 250);

    // Change button text before last message
    if (index === messages.length - 1) {
      button.innerText = "That's all! Hope it made you smile 😊";
    }

    index++;

  } else {
    // Smooth fade out entire page
    document.body.style.transition = "1s ease";
    document.body.style.opacity = "0";

    setTimeout(() => {
      window.close();

      // Fallback if window.close() is blocked
      document.body.innerHTML = `
        <div style="
          height:100vh;
          display:flex;
          justify-content:center;
          align-items:center;
          font-family:'Segoe UI',sans-serif;
          font-size:22px;
          background:linear-gradient(135deg,#f8e8ed,#fce4ec);
        ">
          Okay bye 😌
        </div>
      `;
      document.body.style.opacity = "1";
    }, 1000);
  }

});


/* function showFinalMessage() {
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

*/