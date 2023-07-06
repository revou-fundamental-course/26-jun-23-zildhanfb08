// Form Input - Validation and Alert

submit.addEventListener("submit", function (event) {
    event.preventDefault()
})
function validateForm () {
    var name = document.forms["message-form"]["name"].value;
    var email = document.forms["message-form"]["email"].value;
    var phone = document.forms["message-form"]["phone"].value;
    var interested = document.forms["message-form"]["interested"].value;
    var messages = document.forms["message-form"]["messages"].value;

    if (name == "") {
        alert ("Name is required!")
        return false
    }

    if (email == "") {
        alert ("Email is required!")
        return false
    }

    if (phone == "") {
        alert ("Phone number is required!")
        return false
    }

    if (interested == "") {
        alert ("Please select one!")
        return false
    }

    if (messages == "") {
        alert ("Messages is required!")
        return false
    }

    if (name == "" || email == "" || phone == "" || interested == "" || messages == "") {
        alert ("No blank form allowed!");
        return false;
    } else { 
        alert ("Success! Your data has been send.");
    }

    document.getElementById("sender-name").innerText = name;
    document.getElementById("sender-email").innerText = email; 
    document.getElementById("sender-phone").innerText = phone;
    document.getElementById("sender-interested").innerText = interested;
    document.getElementById("sender-messages").innerText = messages;
    
    setSenderUI(name, email, phone, interested, messages);

    return false;
}