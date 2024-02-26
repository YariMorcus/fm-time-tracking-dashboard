import ExerciseView from './Views/ExerciseView';
import LinksView from './Views/LinksView';
import PlayView from './Views/PlayView';
import SelfCareView from './Views/SelfCareView';
import SocialView from './Views/SocialView';
import StudyView from './Views/StudyView';
import workView from './Views/workView';
import {
  EXERCISE_DATA_DATA_INDEX,
  PLAY_DATA_DATA_INDEX,
  SELF_CARE_DATA_DATA_INDEX,
  SOCIAL_DATA_DATA_INDEX,
  STUDY_DATA_DATA_INDEX,
  WORK_DATA_DATA_INDEX,
} from './config';
import * as model from './model';

// TODO refactor comments and function (DRY PRINCIPAL)
const renderInitialData = async function () {
  // 2. Retrieve and store data from json file
  await model.saveData();

  // 3. Render given data for work
  workView.render(model.state.curPage, model.state.data[WORK_DATA_DATA_INDEX]);

  // 4. Render given data for play
  PlayView.render(model.state.curPage, model.state.data[PLAY_DATA_DATA_INDEX]);

  // 5. Render given data for study
  StudyView.render(
    model.state.curPage,
    model.state.data[STUDY_DATA_DATA_INDEX]
  );

  // 6. Render given data for exercise
  ExerciseView.render(
    model.state.curPage,
    model.state.data[EXERCISE_DATA_DATA_INDEX]
  );

  // 7. Render given data for social
  SocialView.render(
    model.state.curPage,
    model.state.data[SOCIAL_DATA_DATA_INDEX]
  );

  // 8. Render given data for self care
  SelfCareView.render(
    model.state.curPage,
    model.state.data[SELF_CARE_DATA_DATA_INDEX]
  );
};

/**
 * Controller provides functionality for the navigation
 * TODO refactor comments and function (DRY PRINCIPAL)
 */
const navController = async function navController(button) {
  // Indicate and save current page
  LinksView.indicateCurrentPage(button);
  model.state.curPage = LinksView.getPageId(button);

  // 2. Retrieve and store data from json file
  await model.saveData();

  // 3. Render given data for work
  workView.render(model.state.curPage, model.state.data[WORK_DATA_DATA_INDEX]);

  // 4. Render given data for play
  PlayView.render(model.state.curPage, model.state.data[PLAY_DATA_DATA_INDEX]);

  // 5. Render given data for study
  StudyView.render(
    model.state.curPage,
    model.state.data[STUDY_DATA_DATA_INDEX]
  );

  // 6. Render given data for exercise
  ExerciseView.render(
    model.state.curPage,
    model.state.data[EXERCISE_DATA_DATA_INDEX]
  );

  // 7. Render given data for social
  SocialView.render(
    model.state.curPage,
    model.state.data[SOCIAL_DATA_DATA_INDEX]
  );

  // 8. Render given data for self care
  SelfCareView.render(
    model.state.curPage,
    model.state.data[SELF_CARE_DATA_DATA_INDEX]
  );
};

const init = function init() {
  renderInitialData();
  LinksView.addHandlerClick(navController);
};

init();
