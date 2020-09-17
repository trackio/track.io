export default (state, action) => {
  switch (action.type) {
    case "FETCH_DATA":
      return {
        ...state,
        user: action.payload,
      };
    case "SET_APPLICATIONS":
      return {
        ...state,
        applications: action.payload,
      };
    default:
      return state;
  }
};
