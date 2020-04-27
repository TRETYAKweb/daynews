/* global document */

const burger = {

  init() {
    const burgers = document.querySelectorAll('.burger');

    for (let i = 0; i < burgers.length; i++) {
      const burger = burgers[i];
      burger.addEventListener('click', showBurgerTarget);
    }

    function showBurgerTarget() {
      const targetId = this.getAttribute('data-target-id');
      const targetClassToggle = this.getAttribute('data-target-class-toggle');
      if (targetId && targetClassToggle) {
        document.body.classList.toggle('no-scroll');
        this.classList.toggle('burger--close');
        document.getElementById(targetId).classList.toggle(targetClassToggle);
      }
    }
  }

};

export { burger };
