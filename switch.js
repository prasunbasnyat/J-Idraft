// Toggle Dark Mode
function toggleDarkMode() {
    var darkModeToggle = document.getElementById('darkModeToggle');
    var body = document.body;

    if (darkModeToggle.checked) {
        body.classList.add('dark-mode');
    } else {
        body.classList.remove('dark-mode');
    }
}

// Intersection Observer for the fade-in effect
const sections = document.querySelectorAll('.fade-in');

const options = {
    root: null,
    threshold: 0.2,
    rootMargin: "0px"
};

const observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
        }
    });
}, options);

sections.forEach(section => {
    observer.observe(section);
});

// Mobile navigation toggle
function toggleNav() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('active');
}







function getTonightsGame() {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const today = new Date().getDay();
    const dayName = days[today];

    let game = '';
    let imageName = '';
    let hasSpecialGame = true;

    switch (dayName) {
        case 'Monday':
            game = 'Powerball (10:59 PM)';
            imageName = 'powerball.png';
            break;
        case 'Tuesday':
            game = 'Mega Millions (11:00 PM)';
            imageName = 'mega_millions.png';
            break;
        case 'Wednesday':
            game = 'Powerball (10:59 PM), Megabucks Doubler (9:00 PM)';
            imageName = 'megabucks.png';
            break;
        case 'Thursday':
        case 'Sunday':
            hasSpecialGame = false;
            break;
        case 'Friday':
            game = 'Mega Millions (11:00 PM)';
            imageName = 'mega_millions.png';
            break;
        case 'Saturday':
            game = 'Powerball (10:59 PM), Megabucks Doubler (9:00 PM)';
            imageName = 'megabucks.png';
            break;
        default:
            hasSpecialGame = false;
            break;
    }

    const specialGameSection = document.querySelector('.tonights-special-game');
    if (hasSpecialGame) {
        document.getElementById('tonights-game-image').src = imageName;
        document.getElementById('tonights-game-name').textContent = game;
        specialGameSection.style.display = 'block';
    } else {
        specialGameSection.style.display = 'none';
    }
}


// Function to display today's date in the desired format
function displayTodaysDate() {
    const today = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = today.toLocaleDateString('en-US', options);

    // Display the date
    document.getElementById('todays-date').innerHTML = `Today's date: ${formattedDate}`;
}

// Run the functions on page load
window.onload = function() {
    displayTodaysDate();
    getTonightsGame();
};

// Update Lottery Game Info Box Display
document.querySelectorAll('.lottery-game').forEach(box => {
    box.addEventListener('mouseenter', function() {
        var infoBox = document.getElementById('info-box');
        infoBox.style.display = 'block';
        infoBox.innerHTML = this.getAttribute('data-info');
        infoBox.style.left = this.offsetLeft + 'px';
        infoBox.style.top = this.offsetTop + this.offsetHeight + 'px';
    });

    box.addEventListener('mouseleave', function() {
        var infoBox = document.getElementById('info-box');
        infoBox.style.display = 'none';
    });
});








// Function to get today's date in the desired format
function displayTodaysDate() {
    const today = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = today.toLocaleDateString('en-US', options);

    // Display the date
    document.getElementById('todays-date').innerHTML = `Today's date: ${formattedDate}`;
}

// Run the function on page load
window.onload = function() {
    displayTodaysDate();
    getTonightsGame(); // Ensure other onload functions still work
};







































