import View from './View';

/**
 * @class SocialView
 * @property {Object} parentEl - the parent element
 * @extends View - the parent view
 */
class SocialView extends View {
  _parentEl = document.querySelector('.social');
}

export default new SocialView();
