import './style.css'

import "bootstrap/dist/css/bootstrap.min.css";
import Homepage from './src/pages/Homepage';
import AboutPage from './src/pages/AboutPage';
import { render, router } from './src/lib';
const app = document.querySelector('#app');

router.on("/", () => render(Homepage, app));
router.on("/about", () => render(AboutPage, app))

router.resolve();
