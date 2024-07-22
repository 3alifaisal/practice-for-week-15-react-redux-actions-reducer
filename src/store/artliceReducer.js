import articles from "../data/data.json";

const lOAD_ARTLICES = "article/loadArticles";

export const loadArticles = () => {
  return {
    type: lOAD_ARTLICES,
    articles,
  };
};

const initialState = { entries: [], isLoading: true };

const articleReducer = (state = initialState, action) => {
  switch (action.type) {
    case lOAD_ARTLICES:
      return { ...state, entries: [...action.articles] };
    default:
      return state;
  }
};
export default articleReducer;
