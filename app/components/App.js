
import React from 'react'
import { dom } from 'react-reactive-class'
import { addItemEvent } from 'events/Items'

const {
  li: Li,
  div: Div
} = dom

// Seriously rough code, no sub components, all in one kind of deal.
export const app = ({ items$, event$ }) => {

  const doEvent = (text) => event$.onNext(addItemEvent(text))

  const handleSubmit = (e) => {
    const text = e.target.value.trim()
    if (e.which === 13) doEvent(text)
  }

  const element = (
    <div className = "container">
      <h1>RRR Playground</h1>
      <div className = "form-group form-inline">
        <label>Add Item:</label><input className = "form-control" type = "text" onKeyPress = { handleSubmit } />
      </div>
      <Div>
        {items$.map(items => {
          return (
            <ul>
              {items.map(item => {
                return <Li key = { item }>{ item }</Li>
              })}
            </ul>
          )
        })}
      </Div>
    </div>
  )

  return { element }
}
