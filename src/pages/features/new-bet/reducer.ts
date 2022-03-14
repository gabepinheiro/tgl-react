type State = {
  numbers: number[]
  remaining: number
}

export enum ActionTypes {
   ADD_NUMBER,
   REMOVE_NUMBER,
   CLEAR_GAME,
   COMPLETE_GAME,
   SET_REMAINING,
   SET_NUMBERS
}

type Action = { type: ActionTypes, payload?: any }

export const betInitialState: State = {
  numbers: [],
  remaining: 0,
}

export const betReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ActionTypes.ADD_NUMBER:
      return {
        ...state,
        numbers: state.numbers.concat(action.payload),
        remaining: state.remaining - 1,
      }

    case ActionTypes.REMOVE_NUMBER:
      return {
        ...state,
        numbers: state.numbers.filter(number => number !== action.payload),
        remaining: state.remaining + 1,
      }

    case ActionTypes.CLEAR_GAME:
      return {
        ...state,
        numbers: [],
        remaining: action.payload,
      }
    case ActionTypes.SET_REMAINING:
      return {
        ...state,
        remaining: action.payload,
      }
    case ActionTypes.SET_NUMBERS:
      return {
        ...state,
        numbers: action.payload,
        remaining: 0,
      }
    default:
      return state
  }
}
