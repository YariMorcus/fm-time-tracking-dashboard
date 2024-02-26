/**
 * @class View
 * @property {Object} data - the data of the current view
 */
export default class View {
  _data = null;

  /**
   * Render data in UI
   * @param {Object} data the data
   */
  render(data) {
    this._data = data;

    const markup = this.#generateMarkup();

    this.#clear();

    this._parentEl.insertAdjacentHTML('afterbegin', markup);
  }

  /**
   * Generate markup for given view
   * @this {Object}  View instance that method is called upon (PlayView e.g.)
   * @returns {string} the HTML markup
   */
  #generateMarkup() {
    const currentTimeFrame = this._data.timeframes.current;
    const previousTimeFrame = this._data.timeframes.previous;

    const markup = `
          <header class="card__header">
              <h2 class="card__title">${this._data.title}</h2>
              <button class="card__button" aria-label="Settings (no function attached)"></button>
          </header>
          <div class="card__time-container">
              <time class="card__hours" datetime="PT${currentTimeFrame}H">${currentTimeFrame}hrs</time>
              <span class="card__last-time">Last week - <time datetime="PT${previousTimeFrame}H">${previousTimeFrame}hrs</time></span>
          </div> <!-- .card__time-container -->
      `;

    return markup;
  }

  /**
   * Clear parent element
   */
  #clear() {
    this._parentEl.innerHTML = '';
  }
}
