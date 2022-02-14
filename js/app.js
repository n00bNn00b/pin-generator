function getPin() {
  const pin = Math.round(Math.random() * 1000000);
  const pinString = pin + "";
  if (pinString.length == 6) {
    return pin;
  } else {
    return getPin();
  }
}

function generatePin() {
  const pin = getPin();
  document.getElementById("display-pin").value = pin;
}

// mathcher
document.getElementById("key-pad").addEventListener("click", function (e) {
  e.stopPropagation();
  const number = e.target.innerText;
  const calcInput = document.getElementById("typed-numbers");
  if (isNaN(number)) {
    if (number == "C") {
      calcInput.value = "";
    }
  } else {
    const previousNumber = calcInput.value;
    const newNumber = previousNumber + number;
    calcInput.value = newNumber;
  }
});

function verifyPin() {
  const pin = document.getElementById("display-pin").value;
  const typedNumbers = document.getElementById("typed-numbers").value;
  const successMessage = document.getElementById("notify-success");
  const failError = document.getElementById("notify-fail");
  let attemptCountText = document.getElementById("attempt-count").innerText;
  let attemptCount = parseInt(attemptCountText);

  if (pin == typedNumbers) {
    successMessage.style.display = "block";
    failError.style.display = "none";
    document.getElementById("typed-numbers").value = "";
  } else {
    failError.style.display = "block";
    successMessage.style.display = "none";
    document.getElementById("typed-numbers").value = "";
  }
  //   attempt validation
  if (attemptCount == 0) {
    document.getElementById("submit-btn").disabled = true;
  } else {
    attemptCount--;
    document.getElementById("attempt-count").innerText = attemptCount;
  }
}
