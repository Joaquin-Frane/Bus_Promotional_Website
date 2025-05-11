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
                    intro: 'This button will take you to the Routes.',
                    position: 'top',
                },
                {
                    element: '#dr1',
                    intro: 'I will live this hint for you if you forgot the guide.',
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
    } */


