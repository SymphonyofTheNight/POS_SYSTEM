const initialState = {
    store: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_DB': return {
            ...state,
            store: action.payload
        }
        case 'ADD_SUPPLIER': return {
            ...state,
            store: {
                ...state.store,
                supplier: [...state, action.payload]
            }
        }
        default:
            return state;
    }
}

export default reducer;