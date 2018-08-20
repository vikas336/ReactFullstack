import React from 'react';
import ReactDOM, { render } from 'react-dom';
import { Provider } from 'react-redux';
import { syncHistoryWithStore, ConnectedRouter } from 'react-router-redux';
import {store} from './public/store/store';
import { createBrowserHistory } from 'history';
import App from './public/Components/App';
import Hello from './public/Components/hello';
import { BrowserRouter as Router , Route, Switch, Link } from 'react-router-dom';         //Always use react-router-dom

//import './index.css'


const target = document.getElementById('root')
const history = syncHistoryWithStore(createBrowserHistory(), store)
console.log(history)


render(
  <Provider store={store}>
        <Router>
        <div>
            <ul>
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/hello'}>Hello page</Link></li>
            </ul>

            <Switch>
                <Route exact path={'/'} component={App} />
                <Route path={'/hello'} component={Hello} />
            </Switch>
        </div>
    </Router>
  </Provider>,
  target
)

//ReactDOM.render(<App />, document.getElementById('root'));
