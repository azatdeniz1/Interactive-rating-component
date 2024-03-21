const buttons = document.querySelectorAll(".button");
const button_con = document.querySelector(".button_container");
const submit = document.querySelector(".submit");
const face_1 = document.querySelector(".face-1");
const face_2 = document.querySelector(".face-2");
const rate = document.querySelector(".rating");

document.addEventListener("DOMContentLoaded", function () {
  const remove = function () {
    face_1.classList.add("hidden");
    face_2.classList.remove("hidden");
  };

  button_con.addEventListener("click", (e) => {
    const clicked = e.target;

    buttons.forEach((button, i) => {
      button.classList.remove("selected");
      button.dataset.number = i + 1;
      button.classList.add(`button-${i + 1}`);
    });

    if (clicked.classList.contains("button")) {
      clicked.classList.add("selected");
    }

    submit.removeEventListener("click", remove);
    submit.addEventListener("click", () => {
      remove();
      const sentence = `You selected ${clicked.dataset.number} out of ${buttons.length}.`;
      rate.textContent = sentence;
    });
  });
});

/*
//wrong, foreach should be inside inside event listener 
buttons.forEach((button) => {
  button.addEventListener("click", function (e) {
    button.classList.remove("selected");
    console.log(e.target);
    let clicked = e.target;
    clicked.classList.add("selected");
  });
});
*/
