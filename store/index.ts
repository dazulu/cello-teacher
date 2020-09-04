import { useMemo } from 'react'
import { createStore, applyMiddleware, Store } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

export type RootState = ReturnType<typeof reducer>

export interface ApplicationState {
  showNav: boolean
}

export interface Action {
  type: 'OPEN_NAV_MENU' | 'CLOSE_NAV_MENU'
}

let store: Store<ApplicationState>

const initialState = {
  showNav: false,
}

const reducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case 'OPEN_NAV_MENU':
      return {
        ...state,
        showNav: true,
      }

    case 'CLOSE_NAV_MENU':
      return {
        ...state,
        showNav: false,
      }

    default:
      return state
  }
}

function initStore(preloadedState = initialState) {
  return createStore(
    reducer,
    preloadedState,
    composeWithDevTools(applyMiddleware())
  )
}

export const initializeStore = (preloadedState: RootState) => {
  let _store = store ?? initStore(preloadedState)

  // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store
  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState,
    })

    // Reset the current store
    store = initStore(initialState)
  }

  // For SSG and SSR always create a new store
  if (typeof window === 'undefined') return _store

  // Create the store once in the client
  if (!store) store = _store

  return _store
}

export function useStore(initialState: ApplicationState) {
  const store = useMemo(() => initializeStore(initialState), [initialState])
  return store
}
