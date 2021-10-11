import "./styles.css";
let incrCntr = document.querySelector("#incr-cntr");
document.querySelector("#btn-incrmt").addEventListener("click", () => {
  document.getElementById("incr-cntr").style.color = "red";
});
document.querySelector("#btn-minus").addEventListener("click", () => {
  document.getElementById("incr-cntr").style.fontSize = "200px";
});
