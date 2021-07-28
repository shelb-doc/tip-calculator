let bill = document.getElementById("bill");
let people = document.getElementById("people");
let tipButton = document.querySelector(".tip-button");
let reset = document.getElementById("reset");
let tipAmount = document.getElementById("tipAmount");
let priceAmount = document.getElementById("priceAmount");

function billCheck(inputArr) {
  inputArr.forEach((input) => {
    if (input.value.trim() === "") {
      showError(input, "Can't be zero");
    } else {
      showSuccess(input);
    }
  });
}

function showError(input, message) {
  const valueCheck = input.parentElement;
  valueCheck.className = "value-check error";
  const small = document.querySelector("small");
  small.innerText = message;
}
function showSuccess(input) {
  const valueCheck = input.parentElement;
  valueCheck.className = "value-check success";
}

function billCalculator(billAmount, numberOfPeople) {
  return (
    parseFloat(billAmount / numberOfPeople) + parseFloat(tipAmountPerPerson)
  ).toFixed(2);
}

function tipCalculator(tipPercent, billAmount, numberOfPeople) {
  tipAmountPerPerson = (
    ((tipPercent / 100) * billAmount) /
    numberOfPeople
  ).toFixed(2);
  tipAmount.innerText = "$" + tipAmountPerPerson;
  priceAmount.innerText = "$" + billCalculator(billAmount, numberOfPeople);
}

tipButton.addEventListener("click", (e) => {
  e.preventDefault();
  let tipPercent = e.target.value;
  let billAmount = document.getElementById("bill").value;
  let numberOfPeople = document.getElementById("people").value;

  if (e.target.classList.contains("tipBtn")) {
    if (billAmount === "" || numberOfPeople === "") {
      tipAmount.innerText = "$0.00";
      priceAmount.innerText = "$0.00";
      billCheck([bill, people]);
    } else {
      tipCalculator(tipPercent, billAmount, numberOfPeople);
    }
  }
});

reset.addEventListener("click", function () {
  tipAmount.innerText = "$0.00";
  priceAmount.innerText = "$0.00";
  document.getElementById("bill").value = "";
  document.getElementById("people").value = "";
  document.getElementById("number").value = "";
});