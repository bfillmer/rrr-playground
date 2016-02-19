
import { ADD_ITEM, LOAD_INITIAL_ITEMS } from 'constants'
import { store } from 'store'

import { addItemAction, loadInitialItemsAction } from 'stores/Items'
import { getItems } from 'fetchers/Items'

// Generic event format wrapper. Needs to be moved elsewhere.
const eventFormat = (type, payload = {}) => {
  return {
    type,
    payload
  }
}

// Add Item Event
export const addItemEvent = (text) => eventFormat(ADD_ITEM, { text })

// Load Initial Items
export const loadInitialItemsEvent = () => eventFormat(LOAD_INITIAL_ITEMS)

// Mapping
export const itemEvents = {
  ADD_ITEM: (payload) => {
    store.dispatch(addItemAction(payload.text))
  },
  LOAD_INITIAL_ITEMS: () => {
    // @TODO: Add error handling etc.
    // @TODO: Fire off event for the dispatch of actual data, decouple slightly from the async.
    getItems.then((res) => {
      store.dispatch(loadInitialItemsAction(res))
    })
  }
}
