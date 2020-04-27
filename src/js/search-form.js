/* global document */

const searchForm = {

  handleClick() {
    const parent = this.closest('#search-form');
    parent.classList.toggle('search-form--opened');
  },

  init() {
    const btn = document.querySelector('.js-search-form-btn');
    btn.addEventListener('click', this.handleClick);
  }

};

export { searchForm }
