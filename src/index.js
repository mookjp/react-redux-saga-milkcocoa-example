import React from 'react';
import { render } from 'react-dom';
import { applyMiddleware, createStore, compose } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import { routerMiddleware, syncHistoryWithStore } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';

import rootSaga from './sagas';
import reducers from './reducers';
import DevTools from './containers/DevTools';
import Home from './containers/Home';

// TODO: clean up style importing
import style from './styles/style.scss';

function configureStore(initialState) {
  const routeMiddleware = routerMiddleware(browserHistory);
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    reducers,
    initialState,
    compose(
      applyMiddleware(routeMiddleware, sagaMiddleware),
      // TODO: disable devtools for production
      window.devToolsExtension ? window.devToolsExtension() : DevTools.instrument()
    )
  );
  sagaMiddleware.run(rootSaga);

  // Hot reload reducers (requires Webpack or Browserify HMR to be enabled)
  if (module.hot) {
    module.hot.accept('./reducers', () =>
      // default if you use Babel 6+
      store.replaceReducer(reducers)
    );
  }

  return store;
}

const store = configureStore({}); // initialState = {}
const history = syncHistoryWithStore(browserHistory, store);

render(
  <Provider store={store} key="provider">
    <Router history={history}>
      <Route path="/" component={Home} />
    </Router>
  </Provider>,
  document.getElementById('root')
);

// TODO: disable devtools for production
window.React = React; // enable debugger
const content = (
  <Provider store={store} key="provider">
    <DevTools />
  </Provider>
);
render(content, document.getElementById('devtools'));
