import "bootstrap/dist/css/bootstrap.min.css";

import { router, render } from "./src/lib";
import Home from "./src/pages/Home";

const app = document.querySelector("#app");

router.on("/", () => render(Home, app));

router.resolve();
