import typeAction from "./../../constants/index";

const initState = {
  animalList: [],
  pagination: {},
  isLoading: true,
};

const animalReducer = (state = initState, action) => {
  switch (action.type) {
    case typeAction.SET_ANIMAL_LIST:
      return {
        ...state,
        animalList: action.payload.animals,
        pagination: action.payload.pagination,
        isLoading: false,
      };

    default:
      return state;
  }
};

export default animalReducer;
export { initState };
