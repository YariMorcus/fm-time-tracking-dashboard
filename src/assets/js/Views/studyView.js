import View from './View';

/**
 * @class StudyView
 * @property {Object} parentEl - the parent element
 * @extends View - the parent view
 */
class StudyView extends View {
  _parentEl = document.querySelector('#js-study');
}

export default new StudyView();
