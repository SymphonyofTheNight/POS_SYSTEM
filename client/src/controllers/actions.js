import * as api from '../api/api.js';

export const get_db_from_api = () => async (dispatch) => {
    try {
        const { data } = await api.get_db();
        dispatch({ type: 'GET_DB', payload: data });
    } catch (error) {
        console.log({ 'error': error });
    }
}