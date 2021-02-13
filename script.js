const boxes = document.querySelectorAll('.box');
const firstBox = document.getElementById('first-box');

const cssVindowSize = getComputedStyle(document.documentElement).getPropertyValue('--minWindowSize')


function changeClass(e) {
    boxes.forEach(box => box.classList.remove('active'))
    e.target.parentNode.classList.add('active')
}

boxes.forEach(box => {
    box.addEventListener('click', changeClass)
})

// add class active to first element if window size < 720
function reportResize() {
    if (window.innerWidth <= cssVindowSize) {
        boxes.forEach(box => box.classList.remove('active'))
        firstBox.classList.add('active')
    }
}
window.onresize = reportResize