import {createStore} from "redux";
import React, { Component } from "react";
import ReactDom from "react-dom";

// let action = {
//     type: "DECREASE"
// }

// const reducer = (state = 0, action) => {
//     switch (action.type) {
//         case "DECREASE":
//             return state + 1;
//         default:
//             return state;
//     }
// }

// createStore(reducer) -> store/reducer

// reducer -> action

// store.dispatch(action) -> store/reducer -> action

// store.getState() -> store/state -> dispath -> action   reducer -> state

// store.subscribe(func) = filter  -> filter(func)  -> cancel subscribe  func

// const createStore = (reducer) => {
//     let state;
//     let list = [];
//     const getState = () => {
//         return state;
//     }
//     const dispatch = (action) => {
//         state = reducer(state, action);
//         list.forEach( (func) => {
//             func();
//         })
//     }
//     const subscribe = (func) => {
//         list.push(func);
//         return (filterFunc) => {
//             list = list.filter((ele) => {
//                 if (ele == filterFunc) {
//                     return false;
//                 }
//                 return true; 
//             })
//         }
//     }
//     return {
//         getState,
//         dispatch,
//         subscribe
//     }
// }

// const store = createStore(reducer);

// store.dispatch({
//     type: "INIT"
// })

// const render = () => {
//     document.body.innerHTML = store.getState();
// }

// render();

// store.subscribe(render);

// document.onclick = () => {
//     store.dispatch(action);
//     // filter(render);
// }

let calActionFunc = (text) => {
    if (text === "-") {
        return {
            type: "DECREASE"
        };
    }else if(text === "+") {
        return {
            type: "INCREASE"
        };
    }else {
        return {
            type: "INIT"
        };
    }
}

const reducer = (state = 0, action) => {
    switch (action.type) {
        case "DECREASE":
            return state - 1;
        case "INCREASE":
            return state + 1;
        default:
            return state;
    }
}

var store = createStore(reducer);

store.dispatch({
    type: "INIT"
})

class App extends Component{
    render () {
        return (
            <div>
                <h1>{store.getState()}</h1>
                <button onClick={() => {
                    let action = calActionFunc("-");
                    store.dispatch(action);
                }}>-</button>  
                <button onClick={() => {
                    let action = calActionFunc("+");
                    store.dispatch(action);
                }}>+</button>
            </div>
        )
    }
}

const render = () => {
    ReactDom.render(
        <App></App>,
        document.getElementById("root")
    )
}

render()

store.subscribe(render);