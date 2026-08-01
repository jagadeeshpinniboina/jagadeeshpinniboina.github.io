emailjs.init("YOUR_PUBLIC_KEY");

const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        this
    ).then(function () {
        alert("Message sent successfully!");
        form.reset();
    }, function (error) {
        alert("Failed to send message.");
        console.log(error);
    });
});
