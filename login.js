// let email=document.getElementsByClassName("form-control");
// let error=document.getElementById("error");
// function validate(){
//     let regexp= /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/
//     if(regexp.test(email.value)){
//         error.innerHTML="valid";
//         error.style.color="green";
//         return true;
//     }
//     else{
//         error.innerHTML="Invalid";
//         error.style.color="red";
//         return false;
//     }
// }

//     document.querySelector("form").addEventListener("submit", function (e) {
//     e.preventDefault();

//   let email = document.getElementById("email");
//   let password = document.getElementById("password");
//   let error = document.getElementById("error");

//   let regexp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

//   if (!email || !regexp) {
//     error.textContent = "Please enter a valid email.";
//     error.style.color="red";}
document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const error = document.getElementById("error");

  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  if (!email || !isValidEmail) {
    error.textContent = "Please enter a valid email.";
    error.className = "text-danger";
    return;
  }

  const passwordStrength = checkPasswordStrength(password);

  if (passwordStrength.level === "poor") {
    error.textContent = "Password is too weak.";
    error.className = "text-danger";
    return;
  }

  error.textContent = "";
  console.log("Login successful");
});

// Password strength check
function checkPasswordStrength(password) {
  const strengthIndicator = document.getElementById("strength-indicator");

  let strength = 0;

  if (password.length >= 8) strength++;
  if (/[a-z]/.test(password)) strength++;
  if (/[A-Z]/.test(password)) strength++;
  if (/\d/.test(password)) strength++;

  let result = { level: "poor", color: "red", text: "Poor" };

  if (strength >= 4) {
    result = { level: "strong", color: "green", text: "Strong" };
  } else if (strength >= 3) {
    result = { level: "medium", color: "orange", text: "Medium" };
  }

  // Show strength visually
  strengthIndicator.textContent = result.text;
  strengthIndicator.style.color = result.color;

  return result;
}

// Show strength as user types
document.getElementById("password").addEventListener("input", function () {
  checkPasswordStrength(this.value.trim());
});


