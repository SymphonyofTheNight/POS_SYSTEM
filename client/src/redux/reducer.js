const initialState = {
    store: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_DB':
            return {
                ...state,
                store: action.payload
            }
        case 'ADD_SUPPLIER':
            return {
                ...state,
                store: [{
                    ...state.store,
                    supplier: [...state.store.supplier, action.data]
                }]
            }
        default:
            return state;
    }
}

export default reducer;