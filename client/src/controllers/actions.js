import * as api from '../api/api.js';

export const get_db_from_api = () => async (dispatch) => {
    try {
        const { data } = await api.get_db();
        dispatch({ type: 'GET_DB', payload: data });
    } catch (error) {
        console.log({ 'error': error });
    }
}

export const _login = (admin, password) => async (dispatch) => {
    try {
        const { data } = await api.login(admin, password);
        dispatch({ type: 'LOGIN_AUTH', payload: data });
    } catch (error) {
        console.log({ 'error': error });
    }
}

export const add_supplier = (supplier) => async (dispatch) => {
    try {
        const { data } = await api.add_supplier(supplier);
        dispatch({ type: 'ADD_SUPPLIER', payload: data[0] });
    } catch (error) {
        console.log({ 'error': error });
    }
}