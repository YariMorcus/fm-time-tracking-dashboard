import View from './View';

/**
 * @class DarkModeToggleButtonView
 * @extends View the parent view (dashboard)
 * @property {HTMLElement} bodyEl - the body element
 * @property {Element} parentEl - the dark/light mode toggle button
 */
class DarkModeToggleButtonView extends View {
  #bodyEl = document.body;
  #parentEl = document.querySelector('#js-light-mode-toggle');

  /**
   * Listen for click event on dark/light mode toggle button
   * @param {function} handler the handler that will be called when click happens on toggle button
   */
  addHandlerClick(handler) {
    this.#parentEl.addEventListener('click', () => {
      handler();
    });
  }

  /**
   * Toggle dark mode based on current value of light-mode attr on body
   */
  toggleDarkMode() {
    const toggle =
      this.#bodyEl.getAttribute('light-mode') === 'false' ? true : false;

    this.#bodyEl.setAttribute('light-mode', toggle);

    // Change aria text label
    this.#changeAriaTextLabel();
  }

  /**
   * Toggle aria text label based on current value of light-mode attr on body
   */
  #changeAriaTextLabel() {
    const currentMode = this.#bodyEl.getAttribute('light-mode');
    const ariaTextLabel =
      currentMode === 'true' ? 'Toggle dark mode' : 'Toggle light mode';

    this.#parentEl.setAttribute('aria-label', ariaTextLabel);
  }
}

export default new DarkModeToggleButtonView();
