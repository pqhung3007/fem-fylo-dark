const themeToggleBtn = document.querySelector('#theme-toggle')
const darkIcon = document.querySelector('#dark-icon')
const lightIcon = document.querySelector('#light-icon')
const input = document.querySelector('.input')
const ctaBtn = document.querySelector('.cta')
const warning = document.querySelector('.warning')

if (
    // check if dark mode is stored in l;local storage or window system (OS)
    localStorage.getItem('color-theme') === 'dark' ||
    (!('color-theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
) {
    lightIcon.classList.remove('hidden')
} else {
    darkIcon.classList.remove('hidden')
}


themeToggleBtn.addEventListener('click', toggleTheme)

function toggleTheme() {
    let theme = getLocalStorageTheme()
    if (theme === 'light') {
        console.log('switch to dark');
        theme = 'dark'
        document.documentElement.classList.add('dark')
    } else {
        console.log('switch to light');
        theme = 'light'
        document.documentElement.classList.remove('dark')
    }

    localStorage.setItem('theme', theme)
    lightIcon.classList.toggle('hidden')
    darkIcon.classList.toggle('hidden')
}

function getLocalStorageTheme() {
    let theme = "dark";
    if (localStorage.getItem("theme")) {
        theme = localStorage.getItem("theme");
    }
    return theme;
}

setTimeout(() => {
    ctaBtn.addEventListener('click', () => {
        if (input.value === '') {
            warning.innerText = 'Please enter your email'
        }
    })
}, 2000);
