export default (state, action) => {
  switch (action.type) {
    case "FETCH_DATA":
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};
