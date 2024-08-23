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

document.querySelectorAll('.game-box').forEach(box => {
    box.addEventListener('mouseenter', function() {
        var infoBox = document.getElementById('info-box');
        infoBox.style.display = 'block';
        infoBox.innerHTML = this.getAttribute('data-info');
    });

    box.addEventListener('mouseleave', function() {
        var infoBox = document.getElementById('info-box');
        infoBox.style.display = 'none';
    });
});


document.querySelectorAll('.draw-item button').forEach(button => {
    button.addEventListener('click', function() {
        alert(`You clicked on ${this.innerText}`);
        // Add additional functionality as needed
    });
});

document.querySelectorAll('.draw-item a').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        alert(`You clicked on ${this.innerText}`);
        // Add additional functionality as needed
    });
});

document.querySelectorAll('.service-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.querySelector('p').style.display = 'block';
    });
    item.addEventListener('mouseleave', function() {
        this.querySelector('p').style.display = 'none';
    });
});
