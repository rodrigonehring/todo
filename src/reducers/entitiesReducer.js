const initialState = {
  task: {
    taskId1: {
      id: 'taskId1',
      name: 'Create a react todo app',
      createdAt: '2018-03-02T14:10:23.968Z',
    },
    taskId2: {
      id: 'taskId2',
      name: 'make a cake',
      createdAt: '2018-02-01T14:10:23.968Z',
    },
    taskId3: {
      id: 'taskId3',
      name: 'task 3',
      createdAt: '2018-03-03T14:10:23.968Z',
    },
  },
}

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'board/createTask': {
      return {
        ...state,
        task: {
          ...state.task,
          [payload.id]: payload,
        },
      }
    }

    case 'board/deleteTask': {
      const nextTaskState = { ...state.task }
      delete nextTaskState[payload.id]
      return {
        ...state,
        task: nextTaskState,
      }
    }
    default:
      return state
  }
}

export default reducer
