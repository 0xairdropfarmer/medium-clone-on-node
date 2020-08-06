import { applyMiddleware, compose, createStore } from "redux";
//import { createLogger } from 'redux-logger'
// import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import reducer from './reducer';
import thunk from 'redux-thunk';
import { routerMiddleware } from "connected-react-router";

import { createBrowserHistory } from "history";

export const history = createBrowserHistory();

// Build the middleware for intercepting and dispatching navigation actions
//const myRouterMiddleware = routerMiddleware(history);

export default function configureStore(preloadedState) {
  const store = createStore(
    reducer(history),
    preloadedState,
    compose(applyMiddleware(routerMiddleware(history), thunk))
  ); // root reducer with router state // for dispatching history actions
  // ... other middlewares ...

  return store;
}