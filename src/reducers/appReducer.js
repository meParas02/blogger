let init;
if (localStorage.getItem("data") === null) {
  init = [];
}
else {
  init = JSON.parse(localStorage.getItem("data"))
}

const appReducer = (state = init, action) => {
    switch (action.type) {
        case "ADD_BLOG": {
            return [
                ...state,
                action.data,
            ]
        }
        case "DELETE_BLOG": {
            return state.filter(data => data !== action.data)
        }
        default:
            return state
    }
}
export default appReducer