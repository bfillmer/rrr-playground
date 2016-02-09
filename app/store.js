
import { createStore, combineReducers } from 'redux'
import { Subject } from 'rx'
import { initialItemsState, itemReducers } from 'stores/Items'

// Generic reducer mapping.
const mapReducers = (state, action, map) => map[action.type] ? map[action.type](state, action) : state

// Our Items reducers.
const Items = (state = initialItemsState, action) => mapReducers(state, action, itemReducers)

// Combine all our reducers.
const rootReducers = combineReducers({
  Items
})

// Create our Redux store & export.
const bootstrapStore = () => {
  const store = ((typeof window !== 'undefined') && window.devToolsExtension ? window.devToolsExtension()(createStore) : createStore)(rootReducers)

  const state$ = new Subject()
  store.subscribe(() => state$.onNext(store.getState()))

  store.state$ = state$.startWith(store.getState());
  return store
}

export const store = bootstrapStore()
