document.addEventListener('DOMContentLoaded', function () {
    function showTour() {
        introJs().setOptions({
            steps: [
                {
                    title: 'Hi!',
                    intro: 'Let me guide you quickly!',
                },
                {
                    title: 'Scroll on mobile',
                    intro: '<video src="Tutorialvideo/pitxtt1.mp4" autoplay loop width="250px" height="220px"></video>',
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
