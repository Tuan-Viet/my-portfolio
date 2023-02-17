
const header = () => {
  return `
    <header class="header">
        <div class="header__content">
        <div class="header__logo-container">
            <div class="header__logo-img-cont">
            <img src="./public/png/avatar.jpg" alt="Ram Maheshwari Logo Image" class="header__logo-img" />
            </div>
            <span class="header__logo-sub">Tuan Viet</span>
        </div>
        <div class="header__main">
            <ul class="header__links">
            <li class="header__link-wrapper">
                <a href="./index.html" class="header__link"> Home </a>
            </li>
            <li class="header__link-wrapper">
                <a href="./index.html#about" class="header__link">About </a>
            </li>
            <li class="header__link-wrapper">
                <a href="./index.html#projects" class="header__link">
                Projects
                </a>
            </li>
            <li class="header__link-wrapper">
                <a href="./index.html#contact" class="header__link"> Contact </a>
            </li>
            </ul>
            <div class="header__main-ham-menu-cont">
            <img src="./assets/svg/ham-menu.svg" alt="hamburger menu" class="header__main-ham-menu" />
            <img src="./assets/svg/ham-menu-close.svg" alt="hamburger menu close"
                class="header__main-ham-menu-close d-none" />
            </div>
        </div>
        </div>
        <div class="header__sm-menu">
        <div class="header__sm-menu-content">
            <ul class="header__sm-menu-links">
            <li class="header__sm-menu-link">
                <a href="./index.html"> Home </a>
            </li>

            <li class="header__sm-menu-link">
                <a href="./index.html#about"> About </a>
            </li>

            <li class="header__sm-menu-link">
                <a href="./index.html#projects"> Projects </a>
            </li>

            <li class="header__sm-menu-link">
                <a href="./index.html#contact"> Contact </a>
            </li>
            </ul>
        </div>
        </div>
    </header>
    <section class="home-hero">
    <div class="home-hero__content">
      <h1 class="heading-primary">Hey, My name is Tuan Viet</h1>
      <div class="home-hero__info">
        <p class="text-primary">
          I'm a Frontend Web Developer
        </p>
      </div>
      <div class="home-hero__cta">
        <a href="./#projects" class="btn btn--bg">Projects</a>
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