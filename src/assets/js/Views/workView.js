import View from './View';

/**
 * @class WorkView
 * @property {Object} parentEl - the parent element
 * @extends View - the parent view
 */
class WorkView extends View {
  _parentEl = document.querySelector('.work');
}

export default new WorkView();
