import { catsApi } from "../utils/api";

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

export const getCatsAsync = () => {
  return function(dispatch) {
    catsApi.getCats()
      .then((res) => {
        dispatch(getCatsAction(res.data));
      })
      .catch((err) => {
        console.log(err);
      })
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