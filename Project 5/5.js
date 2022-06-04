const loadText = document.querySelector('.loading-text');
const bgr = document.querySelector('.bg');


let load = 0

let int = setInterval(blur, 30)

function blur() {
    load++;
    if (load > 99) {
        clearInterval(int)
    }

    loadText.innerText = `${load}%`
    if (load < 40) {
        loadText.style.opacity = (110 - load) / 100;
    } else {

        loadText.style.opacity = (100 - load) / 100;
    }
    bgr.style.filter = `blur(${scale(load,0,100,30,0)}px)`
}

const scale = (a, b, c, d, e) => {
    return ((a - b) * (e - d)) / (c - b) + d
}