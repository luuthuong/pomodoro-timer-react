import {createStore} from 'redux'

import reducer from './reducer';

import {composeWithDevTools} from 'redux-devtools-extension'

const storeEnhancer=composeWithDevTools()

const store=createStore(reducer,storeEnhancer)

export default store