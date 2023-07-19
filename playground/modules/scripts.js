import { returnHi, last,first } from './utils.js'
import {handleButtonClick} from './handlers.js'


const button = document.querySelector('button');

button.addEventListener('click',handleButtonClick);