document.addEventListener('DOMContentLoaded', function () {
    function showTour() {
        introJs().setOptions({
            steps: [
                {
                    title: 'Hi!',
                    intro: 'Let me guide you quickly!',
                },
                {
                    element: '#lk',
                    intro: 'Click the highlighted link to proceed with downloading the mobile application.',
                    position: 'bottom', 
                },
                {
                    title: 'Scroll Bar',
                    intro: '<img src="ScreenshotImg/s6.png" alt="error" width="200px"/><p>Keep in mind that these selections have a scroll bar on the right.</p>',
                    position: 'bottom', 
                },
                {
                    title: 'Instructions',
                    intro: '<video src="Tutorialvideo/ttmobil11.mp4" autoplay loop muted width="250px" height="220px"></video><p>Please keep in mind that you may view the instructions for using our mobile device by just clicking on the box or images.</p>',
                    position: 'bottom', 
                },
                {
                    title: 'Scroll on mobile',
                    intro: '<video src="Tutorialvideo/tmobilet1.mp4" autoplay loop muted width="250px" height="220px"></video>',
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

const stepsCards = document.querySelectorAll('.steps-card');

// Add click event listener to each card
stepsCards.forEach(card => {
    card.addEventListener('click', () => {
        // Toggle the 'flipped' class on click
        card.classList.toggle('flipped');
    });
});