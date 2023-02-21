import { projects } from "../data";
import { useEffect, useState } from "../lib";
const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/projects").then((response) => response.json()).then((data) => setProjects(data));
    // const projects = JSON.parse(localStorage.getItem("projects")) || [];
    // setData(projects)
  }, [])

  useEffect(() => {
    const btns = document.querySelectorAll(".btn-remove");
    for (let btn of btns) {
      btn.addEventListener("click", function () {
        const id = this.dataset.id;

        fetch(`http://localhost:3000/projects/${id}`, {
          method: "DELETE",
        }).then(() => {
          //reRender
          const newProjects = projects.filter((project) => project.id !== +id);
          setProjects(newProjects);
        })


      });
    }
  });
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
        <img src="${project.img}" alt="Software Screenshot" class="projects__row-img"
          loading="lazy" />
      </div>
      <div class="projects__row-content">
        <h3 class="projects__row-content-title">${project.name}</h3>
        <div class="project_date">${project.date}</div>
        <p class="projects__row-content-desc">
          ${project.desc}
        </p>
        <div class="about__content-skills">
          <div class="skills">
                ${project.tools ? project.tools.map((tool) => {
      return `
                <div class="skills__skill">${tool}</div>
              `
    }).join('') : ''}
    
        </div>
      </div>
      
      <a href="/project/${project.id}" class="btn btn--med btn--theme dynamicBgClr"  >See more</a>
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