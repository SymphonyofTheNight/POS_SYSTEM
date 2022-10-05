const initialState = {
    store: {},
    value: 0
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
                store: {
                    ...state.store[0],
                    supplier: [...state.store[0].supplier, action.payload]
                }
            }
        case 'ADD_VALUE':
            return {
                ...state,
                value: state.value += action.value
            }

        default:
            return state;
    }
}

export default reducer;