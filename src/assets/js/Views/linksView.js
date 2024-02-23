import View from './View';

/**
 * @class linksView
 * @extends View the parent view (dashboard)
 * @property {Object} parentEl - the report for navigation
 */
class LinksView extends View {
  #parentEl = document.querySelector('.report-for__nav');
  #buttons = this.#parentEl.querySelectorAll('.report-for__nav-button');

  /**
   * Listen for submit event on linksView parent element
   * @param {Object} handler the handler that will be called when click happens on a nav-button
   */
  addHandlerClick(handler) {
    this.#parentEl.addEventListener('click', e => {
      const button = e.target.classList.contains('report-for__nav-button');

      if (!button) return;

      // Pass current button to handler
      handler(e.target);
    });
  }

  /**
   * Indicate which page user is on
   * @param {Object} button the selected button
   */
  indicateCurrentPage(button) {
    this.#buttons.forEach(navButton => {
      navButton.classList.remove('is-active');
    });

    // Indicate current page
    button.classList.add('is-active');
  }

  /**
   * Returns current page id
   * @returns {string} id - id of current page
   */
  getPageId(button) {
    return button.id;
  }
}

export default new LinksView();
