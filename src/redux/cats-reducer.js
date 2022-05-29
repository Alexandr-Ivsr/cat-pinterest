const GET_CATS = "GET_CATS";

const initialState = {
  cats: [],
}

export const getCatsAction = (payload) => {
  return {
    type: GET_CATS,
    payload,
  }
}

export const catsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CATS:
      return { ...state, cats: [...state.cats, action.payload] }

    default:
      return state;    
  }
}