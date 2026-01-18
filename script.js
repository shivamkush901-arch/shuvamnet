function sayHello() {
    document.querySelector("p").innerText =
    "Maine apni pehli website khud banayi hai 💪";
}

function sendMessage(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;

    document.getElementById("result").innerText =
    "Thank you " + name + ", your message has been sent ✅";

    // form clear
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
}
