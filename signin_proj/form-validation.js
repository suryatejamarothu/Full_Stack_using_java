document.addEventListener("DOMContentLoaded", () => {

    // SIGN IN VALIDATION
    const signInForm = document.getElementById("signInForm");
    signInForm.addEventListener("submit", (e) => {
      const email = document.getElementById("signInEmail");
      const pass = document.getElementById("signInPassword");
      const errBox = document.getElementById("signInError");
      errBox.textContent = "";
  
      if (!email.checkValidity()) {
        errBox.textContent = "Please enter a valid email.";
        email.focus();
        e.preventDefault();
        return;
      }
      if (!pass.checkValidity()) {
        errBox.textContent = "Password must be at least 8 characters.";
        pass.focus();
        e.preventDefault();
        return;
      }
      // form valid -> continue (e.g., send to server)
    });
  
    // SIGN UP VALIDATION
    const signUpForm = document.getElementById("signUpForm");
    signUpForm.addEventListener("submit", (e) => {
      const name = document.getElementById("signUpName");
      const email = document.getElementById("signUpEmail");
      const pass = document.getElementById("signUpPassword");
      const confirm = document.getElementById("signUpConfirm");
      const errBox = document.getElementById("signUpError");
      errBox.textContent = "";
  
      if (!name.value.trim()) {
        errBox.textContent = "Name is required.";
        name.focus();
        e.preventDefault();
        return;
      }
      if (!email.checkValidity()) {
        errBox.textContent = "Please enter a valid email.";
        email.focus();
        e.preventDefault();
        return;
      }
      if (!pass.checkValidity()) {
        errBox.textContent = "Password must be at least 8 characters.";
        pass.focus();
        e.preventDefault();
        return;
      }
      if (pass.value !== confirm.value) {
        errBox.textContent = "Passwords do not match.";
        confirm.focus();
        e.preventDefault();
        return;
      }
    });
  
  });
  