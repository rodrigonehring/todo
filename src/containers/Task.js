import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import Task from '../components/Task'

function TaskContainer(props) {
  return <Task {...props} />
}

const withConnect = connect((state, props) => ({
  task: state.entities.task[props.id],
}))

export default compose(withConnect)(TaskContainer)
