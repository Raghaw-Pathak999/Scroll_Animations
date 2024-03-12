const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', checkBoxes);

checkBoxes();

function checkBoxes() {
    const triggerBottom = window.innerHeight / 5 * 4;

    boxes.forEach((box, index) => {
        const boxTop = box.getBoundingClientRect().top;

        if (boxTop < triggerBottom) {
            box.classList.add('show');

            // Toggle left/right based on the box index
            if (index % 2 === 0) {
                box.classList.remove('left');
                box.classList.add('right');
            } else {
                box.classList.remove('right');
                box.classList.add('left');
            }
        } else {
            box.classList.remove('show');
        }
    });

    // Remove scroll event listener once all boxes are loaded
    if (allBoxesLoaded()) {
        window.removeEventListener('scroll', checkBoxes);
    }
}

function allBoxesLoaded() {
    return Array.from(boxes).every(box => box.classList.contains('show'));
}



  
