const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById('btn');
const color = document.querySelector(".color");

btn.addEventListener('click', () => {
  //get random NUmber between 0 - 3
  const randomNUmber =  getRandomNumber();
  console.log(randomNUmber)
  document.body.style.backgroundColor = colors[randomNUmber];
  color.textContent = colors[randomNUmber];
})

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}