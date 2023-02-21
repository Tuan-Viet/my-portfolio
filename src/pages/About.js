const About = () => {
    return `
    <section id="about" class="about sec-pad">
        <div class="main-container">
        <h2 class="heading heading-sec heading-sec__mb-med">
            <span class="heading-sec__main">About Me</span>
            <span class="heading-sec__sub">
            Here you will find more information about me, what I do, and my current skills mostly in terms of programming
            and technology
            </span>
        </h2>
        <div class="about__content">
            <div class="about__content-main">
            <h3 class="about__content-title">Get to know me!</h3>
            <div class="about__content-details">
                <p class="about__content-details-para">
                Hey! It's
                <strong>Tuan Viet</strong>
                and I'm a <strong> Frontend Web Developer </strong> located in
                Ha Noi. Feel free to
                <strong>contact</strong> me here. I've done
                <strong> remote </strong>
                projects for agencies, consulted for startups, and collaborated
                with talented people to create
                <strong>digital products </strong>
                for both business and consumer use.
                </p>
                <p class="about__content-details-para">
                I'm a bit of a digital product junky. Over the years, I've used
                hundreds of web and mobile apps in different industries and
                verticals.
                </p>
            </div>
            <a href="#contact" class="btn btn--med btn--theme dynamicBgClr">Contact</a>
            </div>
            <div class="about__content-skills">
            <h3 class="about__content-title">My Skills</h3>
            <div class="skills">
                <div class="skills__skill">HTML</div>
                <div class="skills__skill">CSS</div>
                <div class="skills__skill">JavaScript</div>
                <div class="skills__skill">React</div>
                <div class="skills__skill">GIT</div>
                <div class="skills__skill">Wordpress</div>
                <div class="skills__skill">Google ADS</div>
                <div class="skills__skill">Facebook Ads</div>
                <div class="skills__skill">Android</div>
                <div class="skills__skill">IOS</div>
            </div>
            </div>
        </div>
        </div>
    </section>
  `
}

export default About;