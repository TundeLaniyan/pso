document.querySelector("body").insertAdjacentHTML(
  "beforebegin",
  `
 <nav class="header">
    <a class="header__logo" href="index.html">
        <img src="img/longlogo.png" alt="logo" class="header__logo">
    </a>
    <button class="header__btn">
        <a href="project-planner.html" class="header__btn-txt">PROJECT PLANNER</a>
    </button>
    <ul class="header__item">
        <li><a  class="header__link" href="index.html">HOME</a></li>
        <li><a  class="header__link" href="/#projects">PROJECTS</a></li>
        <li><a  class="header__link" href="service.html">SERVICE</a></li>
        <li><a  class="header__link" href="aboutus.html">ABOUT US</a></li>
        <li><a  class="header__link" href="contact.html">CONTACT</a></li>
    </ul>
    <div class="navigation">
        <input type="checkbox" class="navigation__checkbox" id="navi-toggle">
        <label for="navi-toggle" class="navigation__button">
            <div class="navigation__icon">&nbsp;</div>
        </label>
        <div class="navigation__background"></div>
        <nav class="navigation__nav">
            <ul class="navigation__list">
                <li class="navigation__item"><a href="index.html" class="navigation__link">Home</a></li>
                <li class="navigation__item"><a href="service.html" class="navigation__link">Service</a></li>
                <li class="navigation__item"><a href="aboutus.html" class="navigation__link">About Us</a></li>
                <li class="navigation__item"><a href="contact.html" class="navigation__link">Contact</a></li>
            </ul>
        </nav>
    </div>
</nav>
`
);

document.querySelector("body").insertAdjacentHTML(
  "beforeend",
  `
<div class="talk">
    <div class="talk__box1">
        <div class="talk__text">Let's talk about your project</div>
        <div class="talk__para">Ready to take it to the next level? Contact us today and find out how our expertisecan help your business grow.</div>
    </div>
    <div class="talk__box2">
        <button class="talk__btn">
            <a href="project-planner.html" class="talk__btn-text"> learn more</a>
        </button>
    </div>
</div>

<footer class="footer">
    <div class="footer__con">
        <img src="img/logo.png" alt="logo" class="footer__logo">
        <ul class="footer__item">
            <li><a  class="footer__link" href="service.html">SERVICE</a></li>
            <li><a  class="footer__link" href="/#projects">PROJECTS</a></li>
            <li><a  class="footer__link" href="aboutus.html">ABOUT US</a></li>
            <li><a  class="footer__link" href="contact.html">CONTACT</a></li>
        </ul>
    </div>

    <div class="footer__con2">
        <div class="footer__box">
            <div class="footer__content">With over 10 years in the industry, currently available for selected projects collaborations and consulting</div>
        </div>
        <div class="footer__box">
            <li>pstudio.officials@gmail.com</li>
            <li>@pso.online</li>
        </div>
        <div class="footer__box">
            <div class="footer__socials">
                <img src="img/facebook.png" alt="" class="footer__icon">
                <img src="img/twitter.png" alt="" class="footer__icon">
                <img src="img/instagram.png" alt="" class="footer__icon">
                <img src="img/email.png" alt="" class="footer__icon">
            </div>
        </div>
    </div>
</footer>
<footer class="footer-small">Copyright © 2020 PERSPECTIVE STUDIO Limited</footer>
`
);
