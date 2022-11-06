import { applyMiddleware, combineReducers, compose, legacy_createStore as createStore } from 'redux'
import thunk from 'redux-thunk';
import { cashReducer } from './cashReducer'
import { customerReducer } from './customerReducer'

const rootReducer = combineReducers({
	cash: cashReducer,
	customers: customerReducer,
})


export const store = createStore(rootReducer, compose(
	applyMiddleware(thunk),
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
));

/* 

export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(applyMiddleware(thunk)));

*/