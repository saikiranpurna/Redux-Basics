const redux = require('redux')
const produce = require('immer').produce

const initialState = {
    name:'sai',
    age:26,
    address:{
        street:'123 main st',
        city:'Boston',
        state:'MA'
    }
}
const STREET_UPDATED = 'STREET_UPDATED'

const updateStreet = (street) => {
    return {
        type:STREET_UPDATED,
        payload:street
    }
}
 
const reducer =(state = initialState, action) => {
    switch (action.type) {
        case STREET_UPDATED :
            // return {...state}
            return produce(state, (draft) => {
                draft.address.street = action.payload
            })
        default:
            return state
    }
}

const store = redux.createStore(reducer)
console.log('initial state', store.getState())

const unsubscribe = store.subscribe(() => {
    console.log('updated state', store.getState())
})

store.dispatch(updateStreet('123 side st'))

unsubscribe()