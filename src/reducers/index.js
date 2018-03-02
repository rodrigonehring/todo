import { combineReducers } from 'redux'

const initialState = {
  columns: ['columnId1', 'columnId2'],

  entities: {
    card: {
      cardId1: {
        id: 'cardId1',
        name: 'Card 1',
      },
      cardId2: {
        id: 'cardId2',
        name: 'Card 2',
      },
      cardId3: {
        id: 'cardId3',
        name: 'Card 3',
      },
    },
    column: {
      columnId1: {
        id: 'columnId1',
        name: 'column 1',
        cards: ['cardId1', 'cardId2'],
      },
      columnId2: {
        id: 'columnId2',
        name: 'column 2',
        cards: ['cardId3'],
      },
    },
  },
}

function updateEntitie(currentState, id, cb) {
  return {
    ...currentState,
    [id]: cb(currentState[id]),
  }
}

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'board/moveCard': {
      const { from, to, card } = payload
      return {
        ...state,
        entities: {
          ...state.entities,
          column: updateEntitie(state.entities.column, from, q => ({})),
        },
      }
    }
      
  
    default:
      return state
  }
}

export default combineReducers({
  main: reducer,
})
