import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

const cursor = document.querySelector(".cursor");

window.addEventListener('mousemove', (e) => {
    let x = e.pageX;
    let y = e.pageY;
    setTimeout(() => {
        cursor.style.left = `${x}px`;
        cursor.style.top = `${y}px`;
    }, 50);
})
