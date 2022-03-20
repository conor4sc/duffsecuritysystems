const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");

loginButton.addEventListener("click", (e) => {
  e.preventDefault();
  const username = loginForm.username.value;
  const password = loginForm.password.value;
  if (username === "user" && password ==="password") {
    location.href="controldevice.html";
  }else if(username !="user" || password !="password" ){
    alert("login unsuccessful");}
  
});