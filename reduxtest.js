const {createStore} = require ('redux')

const initialSate = {
    age: 21
}

const myReducer =(state = initialSate, action)=>{
    const newState = {...state}

    if (action.type === 'ADD'){
        newState.age += 1
    }

    return newState
}

const store = createStore(myReducer);

store.dispatch({type: 'ADD'});

console.log(store.getState())