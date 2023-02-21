import nav from "./nav";
const header = () => {
  return `
  ${nav()}
    <section class="home-hero" id="home">
    <div class="home-hero__content">
      <h1 class="heading-primary">Hey, My name is Tuan Viet</h1>
      <div class="home-hero__info">
        <p class="text-primary">
          I'm a Frontend Web Developer
        </p>
      </div>
      <div class="home-hero__cta">
        <a href="./#projects" class="btn btn--bg btn btn--med btn--theme dynamicBgClr">Projects</a>
      </div>
    </div>
    <div class="home-hero__socials">
      <div class="home-hero__social">
        <a href="#" class="home-hero__social-icon-link">
          <img src="./public/png/linkedin-ico.png" alt="icon" class="home-hero__social-icon" />
        </a>
      </div>
      <div class="home-hero__social">
        <a href="#" class="home-hero__social-icon-link">
          <img src="./public/png/github-ico.png" alt="icon" class="home-hero__social-icon" />
        </a>
      </div>
      <div class="home-hero__social">
        <a href="#" class="home-hero__social-icon-link">
          <img src="./public/png/twitter-ico.png" alt="icon" class="home-hero__social-icon" />
        </a>
      </div>
      <div class="home-hero__social">
        <a href="#" class="home-hero__social-icon-link">
          <img src="./public/png/yt-ico.png" alt="icon" class="home-hero__social-icon" />
        </a>
      </div>
      <div class="home-hero__social">
        <a href="#" class="home-hero__social-icon-link home-hero__social-icon-link--bd-none">
          <img src="./public/png/insta-ico.png" alt="icon" class="home-hero__social-icon" />
        </a>
      </div>
    </div>
    <div class="home-hero__mouse-scroll-cont">
      <div class="mouse"></div>
    </div>
  </section>
  `
}

export default header;