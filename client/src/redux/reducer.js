const initialState = {
    store: {},
}

const reducer = (state = initialState, action) => {

    if (action.type === 'GET_DB') {
        return {
            ...state,
            store: action.payload
        }
    }

    if (action.type === 'ADD_SUPPLIER') {
        return {
            ...state,
            store: {
                ...state.store[0],
                supplier: [...state.store[0].supplier, action.payload]
            }
        }
    }

    return state;
}

export default reducer;