document.addEventListener("DOMContentLoaded", function() {
    let pattern = /^[a-z0-9]+@[a-z]+\.com$/;
    const email = document.getElementById("email-user");
    const submit = document.getElementById("submit");

    submit.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent form submission

        if (email.value.match(pattern)) {
            console.log("Email is valid");

            const result = document.createElement("p");
            result.innerText = "Email is valid";
            result.style.backgroundColor = "green";
            result.style.color = "white";
            document.body.appendChild(result);
        } else {
            console.log("Email is not valid");
        }
    });

    const listElements = document.querySelectorAll("li");

    for (let element of listElements) {
        element.style.backgroundColor = "blue";
    }
});