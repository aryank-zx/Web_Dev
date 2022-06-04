const sounds = ['clap', 'mouse', 'music']

sounds.forEach(sound => {
    const btn = document.createElement('button')
    btn.classList.add('btn')

    btn.innerText = sound

    btn.addEventListener('click', () => {
        stopsongs()
        var audio = document.getElementById(sound);
        audio.play();
    })

    document.getElementById('buttons').
    appendChild(btn)
})

function stopsongs() {
    sounds.forEach(sound => {
        const song = document.getElementById(sound)
        song.pause()
        song.currentTime = 0;
    })
}