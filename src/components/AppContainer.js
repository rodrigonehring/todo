import React from 'react'
import { withStyles } from 'material-ui/styles'

const styles = theme => ({
  app: {    
    margin: '0 auto',    
    minHeight: '100vh',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      '& > div': {
        width: 768,
        margin: '30px 0',
      },
    },
  },
})

function AppContainer({ classes = {}, children }) {
  return (
    <div className={classes.app}>
      <div>
        {children}
      </div>
    </div>
  )
}

export default withStyles(styles)(AppContainer)
