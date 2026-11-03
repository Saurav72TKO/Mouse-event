const mouseXPos = document.querySelector(".x-pos");
const mouseYPos = document.querySelector(".y-pos");

window.addEventListener("mousemove", (e) => {
  // console.log(e);
  mouseXPos.innerHTML = e.clientX;
  mouseYPos.innerHTML = e.clientY;
});
