import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import Column from '../components/Column'

function Board(props) {
  return <Column {...props} />
}

const withConnect = connect((state, props) => ({
  column: state.main.entities.column[props.id],
}))

export default compose(withConnect)(Board)
