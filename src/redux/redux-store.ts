import { applyMiddleware, combineReducers, createStore, compose } from 'redux';
import userReducer from './user-Reducer';
import thunkMiddleware from 'redux-thunk';

const rootReducer = combineReducers(
    {
        user: userReducer
    }
)

type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store;