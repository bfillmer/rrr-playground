
/**
 * The main reason this exists is to decouple events from the store
 * aside from during the final mapping of the event. Events can exist
 * without interaction with the store. (Walk into a bank, but the deposit
 * fails, store (account) doesn't care or need to know.)
 */

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
