/* global document  */
import { burger } from './burger';
import { searchForm } from './search-form';

document.addEventListener('DOMContentLoaded', () => {
  document.documentElement.classList.replace('no-js', 'js');
  burger.init();
  searchForm.init();
});
