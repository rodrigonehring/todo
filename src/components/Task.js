import React from 'react'
import { withStyles } from 'material-ui/styles'
import { ListItem, ListItemSecondaryAction, ListItemText } from 'material-ui/List'
import IconButton from 'material-ui/IconButton'
import IconDelete from 'material-ui-icons/Delete'
import IconDone from 'material-ui-icons/Done'
import Tooltip from 'material-ui/Tooltip'

const styles = theme => ({
  tooltip: {
    width: 80,
    textAlign: 'center',
  },
})

function prettyDate(str) {
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
  const date = new Date(str).toLocaleDateString('en-US', options)
  return `created at: ${date}`
}

function Task({ classes, task, deleteTask, finishTask, done }) {
  return (
    <ListItem
      button
      className={classes.listItem}
    >
      <ListItemText primary={task.name} secondary={prettyDate(task.createdAt)} />
      <ListItemSecondaryAction className={classes.actions}>
        <Tooltip title="delete task" placement="bottom" onClick={() => deleteTask(task)} classes={{ popper: classes.tooltip }}>
          <IconButton color="secondary">
            <IconDelete />
          </IconButton>
        </Tooltip>
        {!done && (
          <Tooltip title="complete task" placement="bottom" onClick={() => finishTask(task)} classes={{ popper: classes.tooltip }}>
            <IconButton color="primary">
              <IconDone />
            </IconButton>
          </Tooltip>
        )}
      </ListItemSecondaryAction>
    </ListItem>
  )
}


export default withStyles(styles)(Task)
