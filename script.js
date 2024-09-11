let partyTitle = document.getElementById("header-h1-el")

let partyName = "Felicidad '24"

partyTitle.textContent = partyName

document.addEventListener("DOMContentLoaded", () => {
    const registrationForm = document.getElementById("registration-form");
    // const loginForm = document.getElementById("login-form");
   
    // Check if user is already logged in
    if (localStorage.getItem("isLoggedIn")) {
        document.body.classList.add("logged-in");
        document.body.classList.remove("auth-required");  
        startCountdown();
    } else {
        document.body.classList.add("auth-required");
        document.body.classList.remove("logged-in");
    }

    // Handle registration
    registrationForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        const firstName = document.getElementById("first-name").value;
        const lastName = document.getElementById("last-name").value;
        
            localStorage.setItem("isLoggedIn", true);
            localStorage.setItem("userFirstName", firstName);

            // userGreeting.textContent = firstName;
            document.body.classList.add("logged-in");
            document.body.classList.remove("auth-required");
            startCountdown();
        
    });

});


// Function to start the countdown (unchanged)
function startCountdown() {

    const welcomeGreeting = document.getElementById("header-h2-el");
    const firstName = localStorage.getItem("userFirstName");

    welcomeGreeting.textContent = `Welcome, ${firstName}`;

    let countDownDate = new Date("Sept 21, 2024 16:00:00").getTime();
    let countdownFunction = setInterval(function () {
        let now = new Date().getTime();
        let distance = countDownDate - now;

        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        document.getElementById("count-days").innerHTML = `<div> ${days} </div><div> Days </div>`;
        document.getElementById("count-hours").innerHTML = `<div> ${hours} </div><div> Hours </div>`;
        document.getElementById("count-min").innerHTML = `<div> ${minutes} </div><div> Minutes </div>`;
        document.getElementById("count-sec").innerHTML = `<div> ${seconds} </div><div> Seconds </div>`;
        
        if (distance < 0) {
            clearInterval(countdownFunction);
            document.getElementById("countdown").innerHTML = "Welcome To the Party!";
        }
    }, 1000);
}