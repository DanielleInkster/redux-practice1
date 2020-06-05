const {createStore} = require ('redux')

const initialSate = {
    age: 21
}

const myReducer =(state = initialSate, action)=>{
}

const store = createStore(myReducer);