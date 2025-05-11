document.addEventListener('DOMContentLoaded', function () {
    function showTour() {
        introJs().setOptions({
            steps: [
                {
                    title: 'Hi!',
                    intro: 'Let me guide you quickly!',
                },
                {
                    title: 'Scroll Bar',
                    intro: '<img src="ScreenshotImg/s5.png" alt="error" width="200px"/><p>Keep in mind that these selections have a scroll bar on the right, Scroll through the material if your on a mobile device.</p>',
                    position: 'bottom', 
                },
                {
                    title: 'Scroll on mobile',
                    intro: '<video src="Tutorialvideo/abouttt1.mp4" autoplay loop width="250px" height="220px"></video>',
                    position: 'bottom', 
                },
                {
                    element: '#tm',
                    intro: 'To enlarge this image and see its amazing color, click this image.',
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

    /*THis  is conditions */
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





