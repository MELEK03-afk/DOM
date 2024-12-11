const divs = document.querySelectorAll('.dv-1, .dv-2, .dv-3, .dv-4');

divs.forEach(div => {
    div.addEventListener('click', () => {
        divs.forEach(d => {
            // d.style.flex = d === div ? '7' : '0.7'; // 70% for clicked, 7% for others
            if (d === div) {
                d.style.flex = '7'; // Expand the clicked div to 70%.
            } else {
                d.style.flex = '0.7'; // Shrink others to 7%.
            }
            
        });
    });
});