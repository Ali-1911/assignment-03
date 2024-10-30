
document.getElementById("contactForm").addEventListener("submit", function(event) {
    
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const date = document.getElementById("date").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;

    
    let isValid = true;

    
    if (firstName.length < 5) {
        alert("First name must be at least 5 characters long.");
        isValid = false;
    }

    
    if (lastName.length < 5) {
        alert("Last name must be at least 5 characters long.");
        isValid = false;
    }

    
    if (!email.includes('@') || email.indexOf('@') === 0 || email.lastIndexOf('.') < email.indexOf('@')) {
        alert("Please enter a valid email address.");
        isValid = false;
    }

    
    const datePattern = /^\d{2}\/\d{2}\/\d{4}$/;
    if (!datePattern.test(date)) {
        alert("Please enter the date in dd/mm/yyyy format.");
        isValid = false;
    }

    
    if (phone.length !== 10 || isNaN(phone)) {
        alert("Phone number must be 10 digits long.");
        isValid = false;
    }

    
    if (message.length < 50) {
        alert("Message must be at least 50 characters long.");
        isValid = false;
    }

    
    if (!isValid) {
        event.preventDefault();
    }
});
