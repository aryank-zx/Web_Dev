const jokes = document.getElementById('joke')
const btn = document.getElementById('btn')

btn.addEventListener('click', generatejoke)
generatejoke()

async function generatejoke() {
    const config = {
        headers: {
            'Accept': 'application/json',
        },
    }

    const res = await fetch('https://icanhazdadjoke.com', config)

    const data = await res.json()

    jokes.innerHTML = data.joke
}