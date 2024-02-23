import LinksView from './Views/LinksView';
import workView from './Views/workView';
import { WORK_DATA_DATA_INDEX } from './config';
import * as model from './model';
/**
 * Controller provides functionality for the navigation
 */
const navController = async function navController(button) {
  // Indicate and save current page
  LinksView.indicateCurrentPage(button);
  model.state.curPage = LinksView.getPageId(button);

  // 2. Retrieve and store data from json file
  await model.saveData();

  // 3. Render given data for work
  workView.render(model.state.data[WORK_DATA_DATA_INDEX]);

  // 4. Render given data for play
  // 5. Render given data for study
  // 6. Render given data for exercise
  // 7. Render given data for social
  // 8. Render given data for self care
};

const init = function init() {
  LinksView.addHandlerClick(navController);
};

init();
