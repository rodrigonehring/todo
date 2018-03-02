import React, { Component } from 'react'
import { DragDropContext } from 'react-dnd'
import update from 'immutability-helper'
import HTML5Backend from 'react-dnd-html5-backend'
import Card from './Card'
import Column from './Column'

const style = {
  width: 400,
}

class Container extends Component {
  constructor(props) {
    super(props)
    this.moveCard = this.moveCard.bind(this)
    this.state = {
      cards: [
        {
          id: 1,
          text: 'Write a cool JS library',
        },
        {
          id: 2,
          text: 'Make it generic enough',
        },
        {
          id: 3,
          text: 'Write README',
        },
        {
          id: 4,
          text: 'Create some examples',
        },
        {
          id: 5,
          text: 'Spam in Twitter and IRC to promote it (note that this element is taller than the others)',
        },
        {
          id: 6,
          text: '???',
        },
        {
          id: 7,
          text: 'PROFIT',
        },
      ],
    }
  }

  moveCard(dragIndex, hoverIndex) {
    const { cards } = this.state
    const dragCard = cards[dragIndex]

    this.setState(
      update(this.state, {
        cards: {
          $splice: [[dragIndex, 1], [hoverIndex, 0, dragCard]],
        },
      }),
    )
  }

  render() {
    const { cards } = this.state

    return (
      <div>
        <div style={style}>
          {cards.map((card, i) => (
            <Card key={card.id} index={i} id={card.id} text={card.text} moveCard={this.moveCard} />
          ))}
        </div>
        <Column id="column1" />
        <Column id="column2" />
      </div>
    )
  }
}

export default DragDropContext(HTML5Backend)(Container)
