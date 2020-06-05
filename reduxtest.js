const {createStore} = require ('redux')

const initialSate = {
    age: 21
}

const myReducer =(state = initialSate, action)=>{
    const newState = {...state}

    if (action.type === 'ADD'){
        newState.age += 1
    }
    if (action.type === 'SUB') {
        newState.age -= 1
    }

    if (action.type === 'TIMES') {
        newState.age *= 5
    }

    return newState
}

const store = createStore(myReducer);

store.subscribe(()=>{
    console.log("state changed!" + JSON.stringify(store.getState()))
})

store.dispatch({type: 'SUB'});
store.dispatch({ type: 'TIMES' });
