import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import update from 'immutability-helper'
import { DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import Column from './Column'
import Card from './Card'
import { moveCard } from '../actions'

class Board extends Component {
  moveCard = (dragIndex, hoverIndex) => {
    console.log('movecard', dragIndex, hoverIndex)
    // const { cards } = this.state
    // const dragCard = cards[dragIndex]

    // this.setState(
    //   update(this.state, {
    //     cards: {
    //       $splice: [[dragIndex, 1], [hoverIndex, 0, dragCard]],
    //     },
    //   }),
    // )
  }

  /**
   * @param {object} column
   * @param {card} column
   */
  handleDrop = ({ column, card }) => {
    const from = card.currentColumn
    const to = column.id
    this.props.moveCard({ from, to, card: card.card })
    console.log('handleDrop', column, card)
  }

  renderCards = column => (id, index) => {
    return <Card key={id} id={id} index={index} moveCard={this.moveCard} currentColumn={column} />
  }

  renderColumn = id => {
    return (
      <div key={id}>
        <Column id={id} onDrop={this.handleDrop}>{cards => cards.map(this.renderCards(id))}</Column>
      </div>
    )
  }

  render() {
    const { columns = [] } = this.props
    console.log('Board', columns)
    return (
      <div>
        board
        {columns.map(this.renderColumn)}
      </div>
    )
  }
}

const mapStateToProps = state => ({ columns: state.main.columns })
const mapActionsToProps = {
  moveCard,
}

const withConnect = connect(mapStateToProps, mapActionsToProps)
const withContextDrag = DragDropContext(HTML5Backend)

export default compose(withConnect, withContextDrag)(Board)
