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

    const markup = this._generateMarkup();

    this.#clear();

    this._parentEl.insertAdjacentHTML('afterbegin', markup);
  }

  /**
   * Clear parent element
   */
  #clear() {
    this._parentEl.innerHTML = '';
  }
}
