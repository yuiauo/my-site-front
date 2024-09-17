import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

const cursor = document.querySelector(".cursor");
const cursorSmall = document.querySelector(".cursor-small");

window.addEventListener('mousemove', (e) => {
    let x = e.pageX;
    let y = e.pageY;
    cursorSmall.style.left = `${x}px`;
    cursorSmall.style.top = `${y}px`;
    setTimeout(() => {
        cursor.style.left = `${x}px`;
        cursor.style.top = `${y}px`;
    }, 70);
})

window.addEventListener('mouseleave', (e) => {
    console.log(1);
    cursorSmall.style.left = '0px';
    cursorSmall.style.top = '0px';
    cursor.style.left = '0px';
    cursor.style.top = '0px';
})

// window