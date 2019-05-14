import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { store } from './public/store/store';
import { createBrowserHistory } from 'history';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';         //Always use react-router-dom
import Home from './public/Components/Home';
import Tutorial from './public/Components/tutorial';
import Blog from './public/Components/Blog'
import ContactContainer from './public/Containers/ContactContainer';
import Layout from './public/Components/Layout'

const target = document.getElementById('root')
const history = syncHistoryWithStore(createBrowserHistory(), store)

render(
    <Provider store={store}>
        <Router>
            <Layout>
                <Switch>
                    <Route exact path={'/'} component={Home} />
                    <Route path={'/tutorial'} component={Tutorial} />
                    <Route path={'/blog'} component={Blog} />
                    <Route path={'/contact'} component={ContactContainer} />
                </Switch>
            </Layout>
        </Router>
    </Provider>,
    target
)
//ReactDOM.render(<App />, document.getElementById('root'));
