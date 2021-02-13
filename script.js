const boxes = document.querySelectorAll('.box')


function changeClass(e) {
    boxes.forEach(box => box.classList.remove('active'))
    e.target.parentNode.classList.add('active')
}

boxes.forEach(box => {
    box.addEventListener('click', changeClass)
})

