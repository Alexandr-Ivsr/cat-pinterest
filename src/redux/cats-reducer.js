import { catsApi } from "../utils/api";

const GET_CATS = "GET_CATS";
const SHOW_LIKE = "SHOW_LIKE";
const REMOVE_LIKE = "REMOVE_LIKE";

const initialState = {
  cats: [],
}

export const getCatsAction = (payload) => {
  return {
    type: GET_CATS,
    payload,
  }
}

export const showLikedCardAction = (payload) => {
  return {
    type: SHOW_LIKE,
    payload,
  }
}

export const removeLikeAction = (payload) => {
  return {
    type: REMOVE_LIKE,
    payload,
  }
}

export const getCatsAsync = () => {
  return function (dispatch) {
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
      return { ...state, cats: [...state.cats, ...action.payload] }

    case SHOW_LIKE:
      return {
        ...state,
        cats: [...state.cats].map((item) => {
          if (item.id === action.payload) {
            return { ...item, isLiked: true }
          } else {
            return item;
          }
        })
      }

    case REMOVE_LIKE:
      return {
        ...state,
        cats: [...state.cats].map((item) => {
          if (item.id === action.payload) {
            return { ...item, isLiked: false }
          } else {
            return item;
          }
        })
      }

    default:
      return state;
  }
}