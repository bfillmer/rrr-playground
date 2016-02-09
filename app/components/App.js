
import React from 'react'
import { dom } from 'react-reactive-class'
import { addItemEvent } from 'events/Items'

const {
  li: Li,
  div: Div
} = dom

export const app = ({ items$, event$ }) => {

  const handleSubmit = (e) => {
    const text = e.target.value.trim()
    if (e.which === 13) event$.onNext(addItemEvent(text))
  }

  const element = (
    <div className = "container">
      <h1>RRR Playground</h1>
      <div className = "form-group form-inline">
        <input className = "form-control" type = "text" onKeyPress = { handleSubmit } />
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
