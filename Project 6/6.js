const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', checkboxes)

function checkboxes() {
    const trigger = window.innerHeight * 0.8;
    boxes.forEach(box => {
        const boxtop = box.getBoundingClientRect().top
        if (boxtop < trigger) {
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }
    })
}