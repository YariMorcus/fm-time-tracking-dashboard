import View from './View';

/**
 * @class SelfCareView
 * @property {Object} parentEl - the parent element
 * @extends View - the parent view
 */
class SelfCareView extends View {
  _parentEl = document.querySelector('#js-self-care');
}

export default new SelfCareView();
