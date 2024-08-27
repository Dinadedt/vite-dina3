import './style.css'
import Title from './components/Title'
import {subtitle, Menu} from './components/Subtitle'


document.querySelector('#app').innerHTML = Title()
document.querySelector('#app').innerHTML += subtitle(`dina` )
document.querySelector('#app').innerHTML += subtitle()
document.querySelector('#app').innerHTML += Menu()