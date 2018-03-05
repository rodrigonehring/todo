import React from 'react'
import Button from 'material-ui/Button'
import TextField from 'material-ui/TextField'
import Dialog, { DialogActions, DialogContent, DialogTitle } from 'material-ui/Dialog'

export default class FormDialog extends React.Component {
  state = {
    name: '',
  }

  handleChange = (e) => {
    this.setState({ name: e.target.value })
  }

  sumbit = () => {
    this.props.createTask(this.state.name)
    this.setState({ name: '' })
  }

  render() {
    const { open, cancelDialog } = this.props
    const { name } = this.state

    return (
      <Dialog open={open} onClose={cancelDialog} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Create Task</DialogTitle>
        <DialogContent>
          <TextField autoFocus margin="dense" id="name" label="task name" type="text" fullWidth onChange={this.handleChange} value={name} />
        </DialogContent>
        <DialogActions>
          <Button onClick={cancelDialog}>
            Cancel
          </Button>
          <Button onClick={this.sumbit} disabled={!name} color="primary">
            Create
          </Button>
        </DialogActions>
      </Dialog>
    )
  }
}
