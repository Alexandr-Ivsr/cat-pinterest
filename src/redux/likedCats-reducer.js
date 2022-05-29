const ADD_LIKE_CATS = "ADD_LIKE_CAT";

const initialState = {
  likedCats: [],
}

export const addLikeAction = (payload) => {
  return {
    type: ADD_LIKE_CATS,
    payload,
  }
}

export const likedCatsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_LIKE_CATS:
      return { ...state, likedCats: [...state.likedCats, action.payload] };

    default:
      return state;
  }
}