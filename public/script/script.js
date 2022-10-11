const map = L.map('map')
const mapEl = document.getElementById('map')

L.tileLayer('https://api.maptiler.com/maps/streets-v2/{z}/{x}/{y}.png?key=jOTlKffECGLIDKDu2YxN', {
    attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
}).addTo(map)

mapEl.style.display = "none"

const yes = document.getElementById('yes')
const no = document.getElementById('no')
const title = document.getElementById('title')
const submitted = document.getElementById('submitted')

submitted.style.display = "none"

const yay = () => {
    yes.style.display = "none"
    no.style.display = "none"
    submitted.style.display = "block"

    const audio = new Audio('/audio/yay.mp3')
    audio.play()
}

const loc = () => {
    title.style.display = "none"
    yes.style.display = "none"
    no.style.display = "none"

    mapEl.style.display = 'block'

    map.locate({ setView: true })
        .addEventListener('locationfound', (pos) => {
            const { lat, lng } = pos.latlng

            L.marker([lat, lng]).bindTooltip('You are around here.').addTo(map)
        })
        .addEventListener('locationerror', (errorMessage) => {
            console.error(errorMessage.message)
        })
}