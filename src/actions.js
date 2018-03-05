let uniqueCounter = 0

export const changeTab = payload => ({
  type: 'board/changeTab',
  payload,
})

export const openDialog = payload => ({
  type: 'board/openDialog',
  payload,
})

export const cancelDialog = payload => ({
  type: 'board/cancelDialog',
  payload,
})

export const deleteTask = payload => ({
  type: 'board/deleteTask',
  payload,
})

export const finishTask = payload => ({
  type: 'board/finishTask',
  payload,
})

export function createTask(payload) {
  const id = `task-${uniqueCounter++}`
  const createdAt = new Date().toISOString()

  return {
    type: 'board/createTask',
    payload: {
      id,
      name: payload,
      createdAt,
    },
  }
}
