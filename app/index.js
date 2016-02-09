
import { render } from 'react-dom'
import { store } from 'store'
import { event$ } from 'event'
import { loadInitialItemsEvent } from 'events/Items'

import { app } from 'components/App'

const items$ = store.state$.map(state => state.Items)

const { element: App } = app({ items$, event$ })

// Rough init.
event$.onNext(loadInitialItemsEvent())

render(
  App,
  document.getElementById('root')
)
