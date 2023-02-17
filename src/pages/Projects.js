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
            <div class="projects__row">
            <div class="projects__row-img-cont">
                <img src="./public/jpeg/project-facebook.png" alt="Software Screenshot" class="projects__row-img"
                loading="lazy" />
            </div>
            <div class="projects__row-content">
                <h3 class="projects__row-content-title">Project 1</h3>
                <p class="projects__row-content-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                facilis tempora, explicabo quae quod deserunt eius sapiente
                praesentium.
                </p>
                <div class="about__content-skills">
                <div class="skills">
                    <div class="skills__skill">HTML</div>
                    <div class="skills__skill">CSS</div>
                </div>
                </div>
                <a href="./project-1.html" class="btn btn--med btn--theme dynamicBgClr" target="_blank">Case Study</a>
            </div>
            </div>
            <div class="projects__row">
            <div class="projects__row-img-cont">
                <img src="./public/jpeg/project-facebook.png" alt="Software Screenshot" class="projects__row-img"
                loading="lazy" />

            </div>
            <div class="projects__row-content">
                <h3 class="projects__row-content-title">Project 2</h3>
                <p class="projects__row-content-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                facilis tempora, explicabo quae quod deserunt eius sapiente
                praesentium.
                </p>
                <div class="about__content-skills">
                <div class="skills">
                    <div class="skills__skill">HTML</div>
                    <div class="skills__skill">CSS</div>
                </div>
                </div>

                <a href="./project-2.html" class="btn btn--med btn--theme dynamicBgClr" target="_blank">Case Study</a>
            </div>
            </div>
            <div class="projects__row">
            <div class="projects__row-img-cont">
                <img src="./public/jpeg/project-facebook.png" alt="Software Screenshot" class="projects__row-img"
                loading="lazy" />
            </div>
            <div class="projects__row-content">
                <h3 class="projects__row-content-title">Project 3</h3>
                <p class="projects__row-content-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                facilis tempora, explicabo quae quod deserunt eius sapiente
                praesentium.
                </p>
                <div class="about__content-skills">
                <div class="skills">
                    <div class="skills__skill">HTML</div>
                    <div class="skills__skill">CSS</div>
                </div>
                </div>

                <a href="./project-3.html" class="btn btn--med btn--theme dynamicBgClr" target="_blank">Case Study</a>
            </div>
            </div>
        </div>
        </div>
    </section>
  `
}

export default Projects;