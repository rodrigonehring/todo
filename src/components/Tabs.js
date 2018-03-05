import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import AppBar from 'material-ui/AppBar'
import Tabs, { Tab } from 'material-ui/Tabs'
import Done from 'material-ui-icons/PlaylistAddCheck'
import List from 'material-ui-icons/List'
import Typography from 'material-ui/Typography'

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  )
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
}

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
})

class ScrollableTabsButtonForce extends React.Component {
  handleChange = (event, value) => {
    this.props.changeTab({ value })
  }

  render() {
    const { classes, renderTasks, renderCompleted } = this.props
    const { tabSelected } = this.props

    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs value={tabSelected} onChange={this.handleChange} indicatorColor="primary" textColor="primary" fullWidth>
            <Tab label="TASKS" icon={<List />} />
            <Tab label="COMPLETED" icon={<Done />} />
          </Tabs>
        </AppBar>
        {tabSelected === 0 && <TabContainer>{renderTasks()}</TabContainer>}
        {tabSelected === 1 && <TabContainer>{renderCompleted()}</TabContainer>}
      </div>
    )
  }
}

ScrollableTabsButtonForce.propTypes = {
  classes: PropTypes.object,
  renderTasks: PropTypes.func,
  renderCompleted: PropTypes.func,
}

export default withStyles(styles)(ScrollableTabsButtonForce)
