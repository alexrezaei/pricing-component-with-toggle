const toggleButton = document.querySelector("#toggle");
const toggleCircle = document.querySelector("#circle");
const basic = document.querySelector("#basic");
const professional = document.querySelector("#professional");
const master = document.querySelector("#master");
//

let timesClicked = 1;
let monthly = false;

toggleButton.addEventListener("click", () => {
  timesClicked++;
  if (timesClicked % 2 == 0) {
    toggleCircle.classList.add("active");
    monthly = true;
    displayMonthly();
  } else {
    toggleCircle.classList.remove("active");
    displayAnnually();
    monthly = false;
  }
});

const displayMonthly = () => {
  basic.innerHTML = "<span>$</span>19.99";
  professional.innerHTML = "<span>$</span>24.99";
  master.innerHTML = "<span>$</span>39.99";
};

const displayAnnually = () => {
  basic.innerHTML = "<span>$</span>199.99";
  professional.innerHTML = "<span>$</span>249.99";
  master.innerHTML = "<span>$</span>399.99";
};
