const redux = require('redux');
const createStore = redux.createStore;
const bindActionCreators = redux.bindActionCreators
const combineReducers = redux.combineReducers
const applyMiddleware = redux.applyMiddleware

const reduxLogger = require('redux-logger')
const logger = reduxLogger.createLogger()

const CAKE_ORDERED = 'CAKE_ORDERED'
const CAKE_RESTOCKED = 'CAKE_RESTOCKED'

const ICECREAM_ORDERED = 'ICECREAM_ORDERED'
const ICECREAM_RESTOCKED = 'ICECREAM_RESTOCKED'
function orderCake (qty = 1) {
    return{
        type: CAKE_ORDERED,
        payload: qty
    }
}
function restockCake (qty = 1) {
    return{
        type: CAKE_RESTOCKED,
        payload: qty
    }
}
function orderIceCream (qty = 1) {
    return{
        type: ICECREAM_ORDERED,
        payload: qty
    }
}
function restockIceCream (qty = 1) {
    return{
        type: ICECREAM_RESTOCKED,
        payload: qty
    }
}
const cakeState = {
    numOfCakes :10
}
const iceCreamState = {
    numOfIceCreams: 20
}

const cakeReducer = (state = cakeState,action)=>{
    switch (action.type) {
        case CAKE_ORDERED:
            
            return {
                ...state,
                numOfCakes: state.numOfCakes - 1
            };
        case CAKE_RESTOCKED:
            return{
                ...state,
                numOfCakes: state.numOfCakes + action.payload
            }
    
        default: 
            return state;
    }
}
const iceCreamReducer = (state = iceCreamState,action)=>{
    switch (action.type) {
        case ICECREAM_ORDERED:
            
            return {
                ...state,
                numOfIceCreams: state.numOfIceCreams - 1
            };
        case ICECREAM_RESTOCKED:
            return{
                ...state,
                numOfIceCreams: state.numOfIceCreams + action.payload
            }
    
        default: 
            return state;
    }
}
const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})
const store = createStore(rootReducer,applyMiddleware(logger))
// console.log(store.getState())
const unsubscribe = store.subscribe(()=>{
    // console.log(store.getState())
})
// store.dispatch(orderCake())
// store.dispatch(orderCake())
// store.dispatch(orderCake())
// store.dispatch(restockCake(3))
const actions = bindActionCreators({orderCake,restockCake,orderIceCream,restockIceCream},store.dispatch)
actions.orderCake()
actions.orderCake()
actions.orderCake()
actions.restockCake(3)
actions.restockIceCream(2)
actions.orderIceCream()
unsubscribe()
