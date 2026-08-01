emailjs.init("o2WUjQw1-3DdMVG9H");

const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm(
        "service_twc6qqp",
        "template_ijndy0b",
        this
    )
    .then(function () {
        alert("Message sent successfully!");
        form.reset();
    })
    .catch(function (error) {
        alert("Failed to send message.");
        console.log(error);
    });
});
