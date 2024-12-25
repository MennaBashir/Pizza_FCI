document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    localStorage.setItem("firstName", firstName);
    localStorage.setItem("lastName", lastName);
    localStorage.setItem("email", email);
    localStorage.setItem("phone", phone);
    localStorage.setItem("subject", subject);
    localStorage.setItem("message", message);

    alert("Your message has been sent successfully");
  });
