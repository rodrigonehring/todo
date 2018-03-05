import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import List from 'material-ui/List'
import Typography from 'material-ui/Typography'
import Task from '../containers/Task'

const styles = theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
})


function CardList({ classes, list = [], finishTask, deleteTask, done }) {
  return (
    <div className={classes.root}>
      <List>
        {list.map(id => (
          <Task
            key={id}
            id={id}
            finishTask={finishTask}
            deleteTask={deleteTask}
            done={done}
          />
        ))}
        {list.length === 0 && (
          <Typography variant="display1" gutterBottom>
            The task list is empty.
          </Typography>
        )}
      </List>
    </div>
  )
}

CardList.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(CardList)