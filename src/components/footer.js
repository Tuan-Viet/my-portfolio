
const footer = () => {
  return `
    <footer class="main-footer">
      <div class="main-container">
        <div class="main-footer__upper">
          <div class="main-footer__row main-footer__row-1">
            <h2 class="heading heading-sm main-footer__heading-sm">
              <span>Social</span>
            </h2>
            <div class="main-footer__social-cont">
              <a target="_blank" rel="noreferrer" href="#">
                <img class="main-footer__icon" src="./public/png/linkedin-ico.png" alt="icon" />
              </a>
              <a target="_blank" rel="noreferrer" href="#">
                <img class="main-footer__icon" src="./public/png/github-ico.png" alt="icon" />
              </a>
              <a target="_blank" rel="noreferrer" href="#">
                <img class="main-footer__icon" src="./public/png/twitter-ico.png" alt="icon" />
              </a>
              <a target="_blank" rel="noreferrer" href="#">
                <img class="main-footer__icon" src="./public/png/yt-ico.png" alt="icon" />
              </a>
              <a target="_blank" rel="noreferrer" href="#">
                <img class="main-footer__icon main-footer__icon--mr-none" src="./public/png/insta-ico.png" alt="icon" />
              </a>
            </div>
          </div>
          <div class="main-footer__row main-footer__row-2">
            <h4 class="heading heading-sm text-lt">Tuan Viet Portfolio</h4>
            <p class="main-footer__short-desc">
              Thank you for visiting my personal portfolio website. Connect with me over socials.
            </p>
          </div>
        </div>
        <div class="main-footer__lower">
          &copy; Copyright 2023. Made by
          <a rel="noreferrer" target="_blank" href="https://rammaheshwari.com">Ram Maheshwari</a>
        </div>
      </div>
    </footer>
  `
}

export default footer;