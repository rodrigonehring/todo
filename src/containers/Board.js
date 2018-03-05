import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import Fab from '../components/Fab'
import { openDialog, cancelDialog, createTask, deleteTask, finishTask, changeTab } from '../actions'
import Tabs from '../components/Tabs'
import List from '../components/List'
import DialogCreateTask from '../components/DialogCreateTask'

class Board extends Component {
  deleteTask = list => task => this.props.deleteTask({ ...task, list })

  renderTasks = () => {
    const { main, finishTask } = this.props
    return <List list={main.todos} deleteTask={this.deleteTask('todos')} finishTask={finishTask} />
  }

  renderCompleted = () => {
    const { main } = this.props
    return <List list={main.done} deleteTask={this.deleteTask('done')} done />
  }

  render() {
    const { createTask, cancelDialog, openDialog, changeTab, main } = this.props
    const { dialog } = main

    return (
      <div>
        <Tabs renderTasks={this.renderTasks} renderCompleted={this.renderCompleted} changeTab={changeTab} tabSelected={main.tab} />
        <DialogCreateTask {...dialog} createTask={createTask} cancelDialog={cancelDialog} />
        <Fab openDialog={openDialog} />
      </div>
    )
  }
}

const mapStateToProps = state => ({ main: state.main })

const mapActionsToProps = {
  createTask,
  openDialog,
  cancelDialog,
  deleteTask,
  finishTask,
  changeTab,
}

const withConnect = connect(mapStateToProps, mapActionsToProps)

export default compose(withConnect)(Board)
