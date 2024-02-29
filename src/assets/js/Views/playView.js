import View from './View';

/**
 * @class PlayView
 * @property {Object} parentEl - the parent element
 * @extends View - the parent view
 */
class PlayView extends View {
  _parentEl = document.querySelector('#js-play');
}

export default new PlayView();
