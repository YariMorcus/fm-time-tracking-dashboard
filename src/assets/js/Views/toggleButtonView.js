import View from './View';

/**
 * @class toggleButtonView
 * @extends View the parent view (dashboard)
 * @property {HTMLElement} bodyEl - the body element
 * @property {Element} parentEl - the dark/light mode toggle button
 */
class toggleButtonView extends View {
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
  toggleMode() {
    const toggle =
      this.#bodyEl.getAttribute('light-mode') === 'false' ? true : false;

    this.#bodyEl.setAttribute('light-mode', toggle);
  }

  /**
   * Toggle aria text label based on current value of light-mode attr on body
   */
  changeAriaTextLabel() {
    const currentMode = this.#bodyEl.getAttribute('light-mode');
    const ariaTextLabel =
      currentMode === 'true' ? 'Toggle dark mode' : 'Toggle light mode';

    this.#parentEl.setAttribute('aria-label', ariaTextLabel);
  }

  /**
   * Save current mode by using a cookie
   */
  saveCurrentMode() {
    // Indicate that dark mode is active again
    if (this.isLightModeActive()) {
      document.cookie = 'light-mode=false; Secure';
      return;
    }
    document.cookie = `light-mode=true; Secure`;
  }

  /**
   * Check whether light mode is active or not
   * @returns {boolean} true if light mode is active, false otherwise
   */
  isLightModeActive() {
    return document.cookie.split(';').some(cookie => {
      return cookie.includes('light-mode=true');
    });
  }
}

export default new toggleButtonView();
