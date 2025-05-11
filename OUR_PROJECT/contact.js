function search() {
    const input = document.getElementById("find");
    const filter = input.value.toLowerCase();
    const contacts = document.querySelectorAll('.contact-items');
    let found = false; 

    contacts.forEach(contact => {
        const name = contact.querySelector('h2').textContent.toLowerCase(); 
        if (name.includes(filter)) {
            contact.style.display = ""; 
            found = true; 
        } else {
            contact.style.display = "none";
        }
    });

 
    const noResultsMessage = document.getElementById("no-results");
    if (found) {
        noResultsMessage.style.display = "none"; 
    } else {
        noResultsMessage.style.display = "block";
    }
}



document.addEventListener('DOMContentLoaded', function () {
    function showTour() {
        introJs().setOptions({
            steps: [
                {
                    title: 'Hi!',
                    intro: 'Let me guide you quickly!',
                },
                {
                    element: '#srch',
                    intro: 'To enlarge the search bar and do a search, click this bar.',
                    position: 'bottom', 
                },
                {
                    title: 'Scroll Bar',
                    intro: '<img src="ScreenshotImg/s4.png" alt="error" width="200px"/><p>Keep in mind that these selections have a scroll bar on the right.</p>',
                    position: 'bottom', 
                },
                {
                    title: 'Scroll on mobile',
                    intro: '<video src="Tutorialvideo/contactt1.mp4" autoplay loop width="250px" height="220px"></video>',
                    position: 'bottom', 
                },
                {
                    title: 'Enjoy!',
                    intro: 'Almost Done!',
                },
            ]
        }).start();
    }
    showTour();


});

/*
    if (localStorage.getItem('hasShownTour')) {
        showTour(); 
        localStorage.setItem('hasShownTour', 'true');
    }
    const skipButton = document.getElementById('skipButton');
    if (skipButton) {
        skipButton.addEventListener('click', function () {
            introJs().exit(); 
        });
    }
        */


