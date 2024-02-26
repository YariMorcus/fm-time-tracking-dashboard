import data from '../data/time-trackings.json';
import { INITIAL_STATS_DATA } from './config';
export const state = {
  curPage: INITIAL_STATS_DATA, // standard page
  data: null,
};

/**
 * Retrieve data and save only relevant time frames
 */
export const saveData = async function () {
  state.data = data.map(item => {
    return {
      title: item.title,
      timeframes: item.timeframes[state.curPage],
    };
  });
};
