import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Button from 'material-ui/Button'
import AddIcon from 'material-ui-icons/Add'
import Tooltip from 'material-ui/Tooltip'

const styles = theme => ({
  wrapper: {
    position: 'fixed',
    right: 16,
    bottom: 16,
  },
  button: {
    margin: theme.spacing.unit,
  },
})

function FabCreateTask({ classes, openDialog }) {
  return (
    <div className={classes.wrapper}>
      <Tooltip title="create task" placement="left">
        <Button variant="fab" color="primary" aria-label="add" onClick={openDialog} className={classes.button}>
          <AddIcon />
        </Button>
      </Tooltip>
    </div>
  )
}

FabCreateTask.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(FabCreateTask)
