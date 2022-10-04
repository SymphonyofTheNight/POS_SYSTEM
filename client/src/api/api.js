import axios from 'axios';

const base_api = axios.create({ baseURL: 'http://localhost:5000/' });

export const get_db = () => base_api.get('/');
export const register = (admin, password) => base_api.post('/register', {
    admin: admin,
    password: password
})
export const login = (admin, password) => base_api.post('/', {
    admin: admin,
    password: password
})

export const add_supplier = (supplier) => base_api.patch(`/dashboard/supplier/${supplier._id}`, {
    supplier: [
        {
            supplier_name: supplier.name,
            address: supplier.address,
            contact_person: supplier.contact_person,
            contact_number: supplier.contact_number,
            note: supplier.note
        }
    ]
}, { headers: { 'Authorization': `Bearer ${supplier.token}` } })