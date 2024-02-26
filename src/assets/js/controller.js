import DarkModeToggleButtonView from './Views/DarkModeToggleButtonView';
import ExerciseView from './Views/ExerciseView';
import LinksView from './Views/LinksView';
import PlayView from './Views/PlayView';
import SelfCareView from './Views/SelfCareView';
import SocialView from './Views/SocialView';
import StudyView from './Views/StudyView';
import workView from './Views/workView';
import {
  EXERCISE_DATA_DATA_INDEX,
  INITIAL_STATS_DATA,
  PLAY_DATA_DATA_INDEX,
  SELF_CARE_DATA_DATA_INDEX,
  SOCIAL_DATA_DATA_INDEX,
  STUDY_DATA_DATA_INDEX,
  WORK_DATA_DATA_INDEX,
} from './config';
import * as model from './model';

/**
 * Render all components on the dashboard
 */
const renderComponents = function () {
  // Render given data for work
  workView.render(model.state.curPage, model.state.data[WORK_DATA_DATA_INDEX]);

  // Render given data for play
  PlayView.render(model.state.curPage, model.state.data[PLAY_DATA_DATA_INDEX]);

  // Render given data for study
  StudyView.render(
    model.state.curPage,
    model.state.data[STUDY_DATA_DATA_INDEX]
  );

  // Render given data for exercise
  ExerciseView.render(
    model.state.curPage,
    model.state.data[EXERCISE_DATA_DATA_INDEX]
  );

  // Render given data for social
  SocialView.render(
    model.state.curPage,
    model.state.data[SOCIAL_DATA_DATA_INDEX]
  );

  // Render given data for self care
  SelfCareView.render(
    model.state.curPage,
    model.state.data[SELF_CARE_DATA_DATA_INDEX]
  );
};

/**
 * Render initial components
 */
const renderInitialData = async function () {
  // Retrieve and store data from json file
  await model.saveData();

  // Render all components
  renderComponents();
};

/**
 * Controller provides functionality for the navigation
 */
const navController = async function navController(button) {
  // Indicate and save current page
  LinksView.indicateCurrentPage(button);
  model.state.curPage = LinksView.getPageId(button);

  // Retrieve and store data from json file
  await model.saveData();

  // Render all components
  renderComponents();
};

/**
 * Controller provides functionality for the dark mode functionality
 */
const darkModeController = function () {
  DarkModeToggleButtonView.toggleDarkMode();
};

const init = function init() {
  // Indicate what initial page is and render initial data
  LinksView.highlightInitialPage(INITIAL_STATS_DATA);
  renderInitialData();

  LinksView.addHandlerClick(navController);

  DarkModeToggleButtonView.addHandlerClick(darkModeController);
};

init();
