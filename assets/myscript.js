  // ===== Scroll to Top ==== 
  $(window).scroll(function () {
    if ($(this).scrollTop() >= 50) {
      $('#return-to-top').fadeIn(200);
    } else {
      $('#return-to-top').fadeOut(200);
    }
  });

  $('#return-to-top').click(function () {
    $('body,html').animate({ scrollTop: 0 }, 500);
  });

  // ===== Email Validation ====
  function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }

  const emailInput = document.getElementById("email");
  const feedbackText = document.getElementById("text");

  emailInput.addEventListener("input", () => {
    const emailValue = emailInput.value;
    if (validateEmail(emailValue)) {
      feedbackText.textContent = "Valid email!";
      feedbackText.style.color = "green";
    } else {
      feedbackText.textContent = "Invalid email address.";
      feedbackText.style.color = "red";
    }
  });

  const form = document.getElementById("emailForm");
  form.addEventListener("submit", (event) => {
    if (!validateEmail(emailInput.value)) {
      feedbackText.textContent = "Please enter a valid email.";
      feedbackText.style.color = "red";
      event.preventDefault();
    }
  });