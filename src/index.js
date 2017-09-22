import React from 'react';
import ReactDOM from 'react-dom';
import RootView from './components/root_view';
import { createStore, applyMiddleware } from 'redux'
import reducer from './reducers/index'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ReduxThunk from 'redux-thunk';
import NotFound from './components/not_found';
import registerServiceWorker from './registerServiceWorker';
import { getMenus } from './actions/menus'

//const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
    reducer,
    applyMiddleware(ReduxThunk)
);
console.log('index.js before dispatch',store.getState());
store.dispatch(getMenus());

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <Switch>
                    <Route path='/' component={RootView}/>
                    <Route component={NotFound}/>
                </Switch>
            </div>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
