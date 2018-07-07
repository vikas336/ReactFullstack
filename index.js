import React from 'react';
import ReactDOM, { render } from 'react-dom';
import { Provider } from 'react-redux';
import { syncHistoryWithStore, ConnectedRouter } from 'react-router-redux';
import {Router,Route} from 'react-router';
import {store} from './public/store/store';
import { createBrowserHistory } from 'history';
import App from './public/Components/App';

//import './index.css'
console.log(store)
const target = document.getElementById('root')
const history = syncHistoryWithStore(createBrowserHistory(), store)
console.log(history)


render(
  <Provider store={store}>
    <Router history={history}>
    <div>
         <App/>
    </div>
    </Router>
  </Provider>,
  target
)

//ReactDOM.render(<App />, document.getElementById('root'));
