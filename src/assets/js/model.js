import data from '../data/time-trackings.json';

export const state = {
  curPage: 'daily', // standard page
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
