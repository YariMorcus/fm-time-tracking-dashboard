import { CURRENTLY_VIEWING_DATA_SET, CURRENTLY_VIEWING_INDEX } from '../config';
/**
 * @class View
 * @property {Object} data - the data of the current view
 */
export default class View {
  _data = null;

  /**
   * Render data in UI
   * @param {Array} data contains the currently viewing string and corresponding data of the view
   */
  render(...data) {
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
    const curStats = this._data[CURRENTLY_VIEWING_INDEX];
    const currentTimeFrame =
      this._data[CURRENTLY_VIEWING_DATA_SET].timeframes.current;
    const previousTimeFrame =
      this._data[CURRENTLY_VIEWING_DATA_SET].timeframes.previous;

    const markup = `
          <header class="card__header">
              <h2 class="card__title">${
                this._data[CURRENTLY_VIEWING_DATA_SET].title
              }</h2>
              <button class="card__button" aria-label="Settings (no function attached)"></button>
          </header>
          <div class="card__time-container">
              <time class="card__hours" datetime="PT${currentTimeFrame}H">${currentTimeFrame}hrs</time>
              <span class="card__last-time">${this.#generateLastTimeLabel(
                curStats
              )} - <time datetime="PT${previousTimeFrame}H">${previousTimeFrame}hrs</time></span>
          </div> <!-- .card__time-container -->
      `;

    return markup;
  }

  /**
   * Generate text label given on currently viewed statistics
   * @param {string} curStats daily, weekly or montly
   * @returns {string} either yesterday, last week or last month
   */
  #generateLastTimeLabel(curStats) {
    return curStats === 'daily'
      ? 'Yesterday'
      : curStats === 'weekly'
      ? 'Last week'
      : curStats === 'monthly'
      ? 'Last month'
      : '';
  }

  /**
   * Clear parent element
   */
  #clear() {
    this._parentEl.innerHTML = '';
  }
}
