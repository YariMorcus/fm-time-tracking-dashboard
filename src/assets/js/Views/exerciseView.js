import View from './View';

/**
 * @class ExerciseView
 * @property {Object} parentEl - the parent element
 * @extends View - the parent view
 */
class ExerciseView extends View {
  _parentEl = document.querySelector('.exercise');
}

export default new ExerciseView();
