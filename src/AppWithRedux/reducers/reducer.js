const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

const initialState = {
  count: 0
}

export const reducer = (state = initialState, action) => {
  let stateCopy;

  switch (action.type) {
    case INCREMENT:
      stateCopy = {
        ...state,
        count: ++state.count
      }
      break;
    case DECREMENT:
        stateCopy = {
          ...state,
          count: --state.count
        }
        break;
    default:
      stateCopy = {...state}
      break;
  }

  return stateCopy;
}

export const incrementAC = () => ({type: INCREMENT});
export const decrementAC = () => ({type: DECREMENT});
