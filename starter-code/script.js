let reqButton = document.querySelector(".request");
let message = document.querySelector(".message");
let input = document.querySelector(".text");
//let form = document.querySelector(".form");



input.addEventListener("keypress", (e) => {
    // e.preventDefault();
    if (e.key === 'Enter') {
        let text = document.querySelector(".text").value;
        if (!ValidateEmail(text)) {
            message.parentNode.classList.add("wrong");
        } else {
            if (message.parentNode.classList.contains("wrong")) {
                message.parentNode.classList.remove("wrong");
            }
        }
    }

})

reqButton.addEventListener("click", () => {
    let text = document.querySelector(".text").value;
    if (!ValidateEmail(text)) {
        message.parentNode.classList.add("wrong");
    } else {
        if (message.parentNode.classList.contains("wrong")) {
            message.parentNode.classList.remove("wrong");
        }
    }
})

function ValidateEmail(email) {
    let emailformat = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (email.match(emailformat)) {
        return true;
    };
    return (false);
};