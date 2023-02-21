import nav from "../components/nav";
import footer from "../components/footer";
import { projects } from "../data";
import { useEffect, useState } from "../lib";
const Projectdetail = ({ id }) => {
  const [project, setProject] = useState({});
  useEffect(() => {
    fetch(`http://localhost:3000/projects/${id}`)
      .then((response) => response.json())
      .then((data) => setProject(data))
  }, []);

  return `
    ${nav()}
    
    <section class="project-cs-hero">
    <div class="project-cs-hero__content">
      <h1 class="heading-primary">${project.name}</h1>
      <div class="project-cs-hero__info">
        <p class="text-primary">
        This page contains the case study of Crown Website Template
         which includes the Project Overview, Tools Used and Live Links
         to the official product.
        </p>
      </div>
      <div class="project-cs-hero__cta">
        <a href="${project.link}" class="btn btn--bg btn btn--med btn--theme dynamicBgClr" target="_blank">PROJECT LINK</a>
      </div>
    </div>
  </section>
  <section class="project-details">
    <div class="main-container">
      <div class="project-details__content">
        <div class="project-details__showcase-img-cont">
          <img
            src="${project.img}"
            alt="Project Image"
            class="project-details__showcase-img"
          />
        </div>
        <div class="project-details__content-main">
          <div class="project-details__desc">
            <h3 class="project-details__content-title">Project Overview</h3>
            <p class="project-details__desc-para">
             ${project.desc}
            </p>
           
          </div>
          <div class="project-details__tools-used">
            <h3 class="project-details__content-title">Tools Used</h3>
            <div class="skills">
            ${project.tools ? project.tools.map((tool) => {
    return `
                <div class="skills__skill">${tool}</div>
              `
  }).join('') : ''}
                    
            </div>
          </div>
          <div class="project-details__links">
            <h3 class="project-details__content-title">See Live</h3>
            <a
              href="${project.link}"
              class="btn btn--med btn--theme project-details__links-btn"
              target="_blank"
              >PROJECT LINK</a
            >
            <a
              href="/"
              class="btn btn--med btn--theme-inv project-details__links-btn"
              >GO BACK</a
            >
          </div>
        </div>
      </div>
    </div>
  </section>
    
    ${footer()}
  `
}

export default Projectdetail;