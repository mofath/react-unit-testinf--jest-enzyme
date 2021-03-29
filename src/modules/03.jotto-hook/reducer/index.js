const reducer = (state, action) => {
  switch (action.type) {
    case "secretWord":
      return { ...state, secretWord: action.payload };
    default:
        return state;
  }
};

export default reducer;
