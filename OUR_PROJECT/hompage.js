document.addEventListener('DOMContentLoaded', function () {
    function showTour() {
        introJs().setOptions({
            steps: [
                {
                    title: 'Welcome!',
                    intro: 'Let me guide you in our Website!',
                },
                {
                    element: '#home',
                    intro: 'This button will take you to the Hompage.',
                    position: 'right',
                },
                {
                    element: '#sched',
                    intro: 'This button will take you to the Schedule.',
                    position: 'right',
                },
                {
                    element: '#abt',
                    intro: 'This button will take you to the About.',
                    position: 'left',
                },
                {
                    element: '#cont',
                    intro: 'This button will take you to the Contact.',
                    position: 'left',
                },
                {
                    element: '#chs1',
                    intro: 'This button will take you to the Bus.',
                    position: 'left',
                },
                {
                    element: '#chs2',
                    intro: 'This button will take you to the Mobile App.',
                    position: 'top',
                },
                {
                    element: '#chs3',
                    intro: 'This button will take you to the PITX.',
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
    }
        */
