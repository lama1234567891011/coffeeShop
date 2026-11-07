
function showWelcome() {
    document.getElementById("message").innerHTML =
    "Welcome to Coffee House!";
}

function changeColor() {
    document.getElementById("message").style.color = "brown";
}

function changeFont() {
    document.getElementById("message").style.fontSize = "30px";
}

function calculatePrice() {
    var price = 18;
    var quantity = document.getElementById("quantity").value;

    var total = price * quantity;

    document.getElementById("total").innerHTML =
        "Total Price: " + total + " SAR";
}

function showContact() {
    var name = document.getElementById("customerName").value;

    var email = document.getElementById("customerEmail").value;

    var message = document.getElementById("customerMessage").value;

    document.getElementById("contactResult").textContent =
        "Thank you, " + name + "! Your message: " + message;
}
