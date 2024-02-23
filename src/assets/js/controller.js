import * as model from './model';
import linksView from './Views/linksView';

/**
 * Controller provides functionality for the navigation
 */
const navController = async function navController(button) {
  // Indicate and save current page
  linksView.indicateCurrentPage(button);
  model.state.curPage = linksView.getPageId(button);

  // 2. Retrieve and store data from json file
  await model.saveData();

  // 3. Render given data for work
  // 4. Render given data for play
  // 5. Render given data for study
  // 6. Render given data for exercise
  // 7. Render given data for social
  // 8. Render given data for self care
};

const init = function init() {
  linksView.addHandlerClick(navController);
};

init();
