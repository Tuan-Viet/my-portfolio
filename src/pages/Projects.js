import { projects } from "../data";
const Projects = () => {
    return `
        <section id="projects" class="projects sec-pad">
        <div class="main-container">
        <h2 class="heading heading-sec heading-sec__mb-bg">
            <span class="heading-sec__main">Projects</span>
            <span class="heading-sec__sub">
            Here you will find some of the personal and clients projects that I created with each project containing its
            own case study
            </span>

        </h2>

        <div class="projects__content">
            ${projects.map((project) => {
        return `
                <div class="projects__row">
                <div class="projects__row-img-cont">
                  <img src="./public/jpeg/${project.img}" alt="Software Screenshot" class="projects__row-img"
                    loading="lazy" />
                </div>
                <div class="projects__row-content">
                  <h3 class="projects__row-content-title">${project.name}</h3>
                  <p class="projects__row-content-desc">
                    ${project.info}
                  </p>
                  <div class="about__content-skills">
                    <div class="skills">
                      <div class="skills__skill">${project.tools}</div>
                    </div>
                  </div>
                  <a href="/project/${project.id}" class="btn btn--med btn--theme dynamicBgClr"  >Case Study</a>
                </div>
              </div>
                `
    }).join("")}
            
        </div>
        </div>
    </section>
  `
}

export default Projects;