function search() {
    const input = document.getElementById("find");
    const filter = input.value.toLowerCase();
    const contacts = document.querySelectorAll('.bus-items');
    let found = false; // Variable to track if any results were found

    contacts.forEach(contact => {
        const name = contact.querySelector('h3').textContent.toLowerCase(); // Adjust to match the contact's name
        if (name.includes(filter)) {
            contact.style.display = ""; // Show contact
            found = true; // Set found to true
        } else {
            contact.style.display = "none"; // Hide contact
        }
    });

    // Show or hide the no results message
    const noResultsMessage = document.getElementById("no-results");
    if (found) {
        noResultsMessage.style.display = "none"; // Hide the no results message
    } else {
        noResultsMessage.style.display = "block"; // Show the no results message
    }
}
/*Here */


document.addEventListener('DOMContentLoaded', function () {
    // Function to show the Intro.js tour
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
                    intro: '<img src="ScreenshotImg/s1.png" alt="error" width="200px"/><p>Keep in mind that these selections have a scroll bar on the right.</p>',
                    position: 'bottom', 
                },
                {
                    title: 'Scroll on mobile',
                    intro: '<video src="Tutorialvideo/tt1.mp4" autoplay loop width="250px" height="220px"></video>',
                    position: 'bottom', 
                },
                {
                    element: '#btn1',
                    intro: 'Keep in mind that clicking on any of these buttons will lead you to the details of your choice.',
                    position: 'right', 
                },
                {
                    element: '#dr1',
                    intro: 'I will live this hint for you if you forgot the guide',
                    position: 'top', 
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
    }*/

