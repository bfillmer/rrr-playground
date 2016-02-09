
import { Subject } from 'rx'
import { itemEvents } from 'events/Items'

// Export our event stream.
export const event$ = new Subject()

// Merge our events into a single lookup.
const eventRegistry = Object.assign(
  {},
  itemEvents
)

// Perform events.
event$.subscribe(event => {
  if (eventRegistry[event.type]) eventRegistry[event.type](event.payload)
})
