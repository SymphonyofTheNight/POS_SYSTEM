const initialState = {
    container: [],
    isAdmin: false
}

const auth = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN_AUTH':
            localStorage.setItem('Administrator', JSON.stringify({ ...action?.payload }));
            return { ...state, isAdminAcc: action?.payload, isAdmin: true }
        case 'LOGOUT':
            localStorage.clear();
            return { ...state }
        default:
            return state;
    }
}

export default auth;