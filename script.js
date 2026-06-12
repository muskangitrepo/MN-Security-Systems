// Free Consultation Button

function showMessage() {
    alert("Thank you! Our security expert will contact you soon.");
}

// Contact Form Validation

document.getElementById("contactForm")
.addEventListener("submit", function(e){

    e.preventDefault();

    alert("Message Sent Successfully!");

    this.reset();

});