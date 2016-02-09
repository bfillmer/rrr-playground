
import { List } from 'immutable'
import { ADD_ITEM, LOAD_INITIAL_ITEMS } from 'constants'

// Initial State for Items
export const initialItemsState = new List()

// Items Actions
export const addItemAction = (text) => {
  return {
    type: ADD_ITEM,
    text
  }
}

export const loadInitialItemsAction = (json) => {
  return {
    type: LOAD_INITIAL_ITEMS,
    json
  }
}

// Items Reducers
const addItemReducer = (state, action) => {
  return state.push(action.text)
}

const loadInitialItemsReducer = (state, action) => {
  const newItems = action.json.items
  return state.merge(newItems)
}

// Map Items Reducers
export const itemReducers = {
  ADD_ITEM: addItemReducer,
  LOAD_INITIAL_ITEMS: loadInitialItemsReducer
}
