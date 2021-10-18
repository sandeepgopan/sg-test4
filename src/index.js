import "./styles.css";
let incrCntr = document.querySelector("#incr-cntr");
document.querySelector("#btn-incrmt").addEventListener("click", () => {
  document.getElementById("incr-cntr").innerHTML = "Sandeep";
  document.getElementById("incr-cntr1").innerHTML = "Sandeep";
  document.getElementById("incr-cntr2").innerHTML = "Sandeep";
});
document.querySelector("#btn-minus").addEventListener("click", () => {
  document.getElementById("incr-cntr").style.fontSize = "200px";
});
