document.addEventListener("DOMContentLoaded", () => {
    const searchBar1 = document.querySelector('.searchbar-here input');
    const table1 = document.querySelector('.tablesched-list1 table'); 
    const noResults1 = document.createElement('tr');

    searchBar1.addEventListener('input', () => {
        const query = searchBar1.value.toLowerCase();
        const rows = table1.querySelectorAll('tr');
        let found = false;

        rows.forEach((row, index) => {
            if (index === 0) {
                row.style.display = '';
                return;
            }
            const text = row.textContent.toLowerCase();
            if (text.includes(query)) {
                row.style.display = '';
                found = true;
            } else {
                row.style.display = 'none';
            }
        });
        if (!found) {
            noResults1.innerHTML = `<td colspan="${table1.rows[0].cells.length}" class="no-results"><h2>No results found</h2></td>`;
            noResults1.style.display = '';
            table1.querySelector('tbody').appendChild(noResults1);
        } else {
            noResults1.style.display = 'none';
        }
    });

});

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
                    intro: '<img src="ScreenshotImg/ss3.png" alt="error" width="200px"/><p>Keep in mind that these selections have a scroll bar on the right.</p>',
                    position: 'bottom', 
                },
                {
                    title: 'Scroll on mobile',
                    intro: '<video src="Tutorialvideo/ttsched1.mp4" autoplay loop width="250px" height="220px"></video>',
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
