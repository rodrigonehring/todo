import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { DropTarget } from 'react-dnd'
const ItemTypes = { BOX: 'card' }

function getStyle(backgroundColor) {
  return {
    border: '1px solid rgba(0,0,0,0.2)',
    minHeight: '8rem',
    minWidth: '8rem',
    backgroundColor,
    padding: '2rem',
    paddingTop: '1rem',
    margin: '1rem',
    textAlign: 'center',
    float: 'left',
    fontSize: '1rem',
  }
}

const boxTarget = {
  drop(props, monitor, component) {
    const card = monitor.getItem()
    // console.log('drop', props, card)

    props.onDrop({ column: props, card })

    const hasDroppedOnChild = monitor.didDrop()

    if (hasDroppedOnChild && !props.greedy) {
      return
    }

    component.setState({
      hasDropped: true,
      hasDroppedOnChild,
    })
  },
}

class Column extends Component {
  static propTypes = {
    connectDropTarget: PropTypes.func.isRequired,
    isOver: PropTypes.bool.isRequired,
    isOverCurrent: PropTypes.bool.isRequired,
    greedy: PropTypes.bool,
    children: PropTypes.func,
  }

  constructor(props) {
    super(props)
    console.log(props)
    this.state = {
      hasDropped: false,
      hasDroppedOnChild: false,
    }
  }

  render() {
    const { greedy, isOver, isOverCurrent, connectDropTarget, children, column } = this.props
    const { hasDropped, hasDroppedOnChild } = this.state
    const { name, cards } = column

    const text = greedy ? 'greedy' : 'not greedy'
    let backgroundColor = 'rgba(0, 0, 0, .5)'

    if (isOverCurrent || (isOver && greedy)) {
      backgroundColor = 'darkgreen'
    }

    return connectDropTarget(
      <div style={getStyle(backgroundColor)}>
        {name}
        <br />
        {text}
        <br />
        {hasDropped && <span>dropped {hasDroppedOnChild && ' on child'}</span>}

        <div>{children(cards)}</div>
      </div>,
    )
  }
}

export default DropTarget(ItemTypes.BOX, boxTarget, (connect, monitor) => ({
  connectDropTarget: connect.dropTarget(),
  isOver: monitor.isOver(),
  isOverCurrent: monitor.isOver({ shallow: true }),
}))(Column)
