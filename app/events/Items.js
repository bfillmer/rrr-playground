
/**
 * The main reason this exists is to decouple events from the store
 * aside from during the final mapping of the event. Events can exist
 * without interaction with the store. (Walk into a bank, but the deposit
 * fails, store (account) doesn't care or need to know.)
 */

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
    getItems.then((res) => {
      store.dispatch(loadInitialItemsAction(res))
    })
  }
}
