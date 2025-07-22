// script.js

//Burger menu
const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        //Toggle Nav
        nav.classList.toggle('nav-active');

        //Animate Links
        navLinks.forEach((link, index) => {
            if(link.style.animation){
                link.style.animation = '';
            } else{
                link.style.animation = `navLinkFade 0.5s ease forwards \${index / 7 + 0.3}s`;
            }
        });

        //Burger Animation
        burger.classList.toggle('toggle');
    });
}

navSlide();


// Contact Form Submission (Basic Example)
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const messageDiv = document.getElementById('form-message');

    // **Very Basic Validation**  (Expand this for real-world use!)
    if (!name || !email || !message) {
        messageDiv.textContent = "Please fill in all fields.";
        messageDiv.className = "error"; // Add error class for styling
        return;
    }

    // In a real application, you would send this data to a server-side script
    // using AJAX (fetch or XMLHttpRequest).  For this example, we'll just
    // simulate a successful submission.

    // Simulate success
    messageDiv.textContent = "Thank you for your message! We'll be in touch soon.";
    messageDiv.className = "success"; // Add success class for styling

    // Clear the form (optional)
    document.getElementById('contactForm').reset();

    //Clear message after 3 seconds
    setTimeout(() => {
      messageDiv.textContent = "";
      messageDiv.className = "";
    }, 3000);

});
