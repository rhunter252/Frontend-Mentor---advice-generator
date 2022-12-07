const para = document.querySelector("p");
const btn = document.querySelector(".btn");
const adviceNum = document.querySelector(".advice-number");

function getAdvice() {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((data) => {
      const adviceNumber = data.slip.id;
      const advice = data.slip.advice;
      console.log(adviceNumber, advice);
      return (adviceNum.innerHTML = adviceNumber), (para.innerHTML = advice);
    });
}

btn.addEventListener("click", getAdvice);
