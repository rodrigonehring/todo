import { combineReducers } from 'redux'
import entitiesReducer from './entitiesReducer'

const initialState = {
  done: ['taskId1'],
  todos: ['taskId2', 'taskId3'],
  // tab index
  tab: 0,
  dialog: {
    open: false,
  },
}

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'board/changeTab': {
      return {
        ...state,
        tab: payload.value,
      }
    }

    case 'board/createTask': {
      return {
        ...state,
        todos: state.todos.concat(payload.id),
        tab: 0,
        dialog: {
          ...state.dialog,
          open: false,
        },
      }
    }

    case 'board/finishTask': {
      return {
        ...state,
        todos: state.todos.filter(id => id !== payload.id),
        done: state.done.concat(payload.id),
      }
    }

    case 'board/deleteTask': {
      return {
        ...state,
        [payload.list]: state[payload.list].filter(id => id !== payload.id),
      }
    }

    case 'board/cancelDialog': {
      return {
        ...state,
        dialog: {
          ...state.dialog,
          open: false,
        },
      }
    }

    case 'board/openDialog': {
      return {
        ...state,
        dialog: {
          ...state.dialog,
          open: true,
        },
      }
    }

    default:
      return state
  }
}



export default combineReducers({
  main: reducer,
  entities: entitiesReducer,
})
