import "bootstrap/dist/css/bootstrap.min.css";

import { router, render } from "./src/lib";
import ProjectAdd from "./src/pages/admin/ProjectAdd";
import ProjectEdit from "./src/pages/admin/ProjectEdit";
import ProjectsAdmin from "./src/pages/admin/ProjectsAdmin";
import Home from "./src/pages/Home";
import Projectdetail from "./src/pages/Projectdetail";

const app = document.querySelector("#app");

router.on("/", () => render(Home, app));
router.on("/project/:id", ({ data }) => render(() => Projectdetail(data), app));

//admin 
router.on("/admin", () => render(ProjectsAdmin, app));
router.on("/admin/add", () => render(ProjectAdd, app));
router.on("/admin/:id/edit", ({ data }) => render(() => ProjectEdit(data), app));

router.resolve();
