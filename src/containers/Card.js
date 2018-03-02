import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import Card from '../components/Card'

function CardContainer(props) {
  return <Card {...props} />
}

const withConnect = connect((state, props) => ({
  card: state.main.entities.card[props.id],
}))

export default compose(withConnect)(CardContainer)
