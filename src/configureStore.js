import { applyMiddleware, compose, createStore } from 'redux'
import rootReducer from './reducers'

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      shouldHotReload: false,
    })
    : compose

const createStoreFactory = composeEnhancers(
  applyMiddleware(),
)

const finalCreateStore = createStoreFactory(createStore)

export default function configureStore(initialState) {
  const store = finalCreateStore(rootReducer, initialState)
  return store
}
