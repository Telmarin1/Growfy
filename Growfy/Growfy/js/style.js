"use strict"

const headerBurger = document.querySelector('.icon-menu');
const headerMenu = document.querySelector('.menu__body');
if (headerBurger) {
    headerBurger.addEventListener("click", function (e) {
        document.body.classList.toggle('_lock');
        headerBurger.classList.toggle('_active');
        headerMenu.classList.toggle('_active');
    });
}



window.addEventListener('load', windowLoad);

function windowLoad() {
    if (document.querySelector('[data-glow]')) {
        document.documentElement.addEventListener('mouseover', buttonActions);
        document.documentElement.addEventListener('mouseout', buttonActions);
        document.documentElement.addEventListener('mousemove', buttonActions);

        let bGlow, bGlowColor, bGlowSize;

        function buttonActions(e) {
            const button = e.target.closest('[data-glow]');
            if (!button) return;

            if (e.type === "mouseover") {
                button.insertAdjacentHTML("beforeend", `
                <span class="button__glow">
                   <span class="button__color"></span>
                </span>
            `);
                bGlow = button.querySelector('.button__glow');
                bGlowColor = button.querySelector('.button__color');

                bGlowSize = Math.min(button.offsetWidth, button.offsetHeight);
                bGlow.style.width = bGlow.style.height = `${bGlowSize}px`;

                bGlowColor.style.width = `${button.offsetWidth}px`;
                bGlowColor.style.height = `${button.offsetHeight}px`;
            }
            if (e.type === 'mouseout') {
                button.querySelector('.button__glow').remove();
            }
            if (e.type === 'mousemove') {
                const posX = e.pageX - button.getBoundingClientRect().left - scrollX;
                const posY = e.pageY - button.getBoundingClientRect().top - scrollY;

                bGlow.style.left = `${posX - bGlowSize / 2}px`;
                bGlow.style.top = `${posY - bGlowSize / 2}px`;

                bGlowColor.style.transform = `
                translate(${posX - (button.offsetWidth - bGlowSize / 2)}px,
                           ${posY - (button.offsetHeight - bGlowSize / 2)}px)`;
            }
        }
    }
}

window.addEventListener('load', windowLoadOdd);

function windowLoadOdd() {
    if (document.querySelector('[data-glow-Odd]')) {
        document.documentElement.addEventListener('mouseover', buttonActions);
        document.documentElement.addEventListener('mouseout', buttonActions);
        document.documentElement.addEventListener('mousemove', buttonActions);

        let bGlow, bGlowColor, bGlowSize;

        function buttonActions(e) {
            const button = e.target.closest('[data-glow-Odd]');
            if (!button) return;

            if (e.type === "mouseover") {
                button.insertAdjacentHTML("beforeend", `
                <span class="button__glow-Odd">
                   <span class="button__color-Odd"></span>
                </span>
            `);
                bGlow = button.querySelector('.button__glow-Odd');
                bGlowColor = button.querySelector('.button__color-Odd');

                bGlowSize = Math.min(button.offsetWidth, button.offsetHeight);
                bGlow.style.width = bGlow.style.height = `${bGlowSize}px`;

                bGlowColor.style.width = `${button.offsetWidth}px`;
                bGlowColor.style.height = `${button.offsetHeight}px`;
            }
            if (e.type === 'mouseout') {
                button.querySelector('.button__glow-Odd').remove();
            }
            if (e.type === 'mousemove') {
                const posX = e.pageX - button.getBoundingClientRect().left - scrollX;
                const posY = e.pageY - button.getBoundingClientRect().top - scrollY;

                bGlow.style.left = `${posX - bGlowSize / 2}px`;
                bGlow.style.top = `${posY - bGlowSize / 2}px`;

                bGlowColor.style.transform = `
                translate(${posX - (button.offsetWidth - bGlowSize / 2)}px,
                           ${posY - (button.offsetHeight - bGlowSize / 2)}px)`;
            }
        }
    }
}
const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
if (menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener("click", onMenuLinkClick);
    });

    function onMenuLinkClick(e) {
        const menuLink = e.target;
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset;  //- document.querySelector('header').offsetHeight;

            if (headerBurger.classList.contains('_active')) {
                document.body.classList.remove('_lock')
                headerBurger.classList.remove('_active');
                headerMenu.classList.remove('_active');
            }

            window.scrollTo({
                top: gotoBlockValue,
                behavior: "smooth"
            });
            e.preventDefault();
        }
    }
}