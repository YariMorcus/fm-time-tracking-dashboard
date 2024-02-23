import View from './View';

/**
 * @class PlayView
 * @property {Object} parentEl - the parent element
 * @extends View - the parent view
 */
class PlayView extends View {
  _parentEl = document.querySelector('.play');

  /**
   * Generate markup for given view
   * @this {Object} PlayView instance
   * @returns {string} the HTML markup
   */
  _generateMarkup() {
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
}

export default new PlayView();
