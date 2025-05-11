document.addEventListener('DOMContentLoaded', function () {
    function showTour() {
        introJs().setOptions({
            steps: [
                {
                    title: 'Hi!',
                    intro: 'Let me guide you quickly!',
                },
                {
                    element: '#btn1',
                    intro: 'This button will take back you to the Routes.',
                    position: 'top',
                },
                {
                    title: 'Scroll Bar',
                    intro: '<img src="ScreenshotImg/s2.png" alt="error" width="200px"/><p>Keep in mind that these selections have a scroll bar on the right.</p>',
                    position: 'bottom',

                },
                {
                    title: 'Scroll on mobile',
                    intro: '<video src="Tutorialvideo/tt2.mp4" autoplay loop width="250px" height="220px"></video>',
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


