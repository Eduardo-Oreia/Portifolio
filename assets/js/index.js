const btnTheme = document.getElementById("moon-btn")

btnTheme.addEventListener("click", () => {
    document.body.classList.toggle("light")
})


const sr =  ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 1700,
    delay: 200,
    reset: true,
})

sr.reveal('.presentation')
sr.reveal('.title')
sr.reveal('.icons-container', {origin: 'bottom'})
sr.reveal('.roll-down', {origin: 'left'})
sr.reveal('.info-about', {origin: 'right'})
sr.reveal('.my-photo-about', {origin: 'left'})
sr.reveal('.skills-column', {origin: 'left'})
sr.reveal('.quality-column', {origin: 'right'})
sr.reveal('.footer', {origin: 'bottom'})
