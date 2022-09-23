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

export const add_supplier = (id, TOKEN, supplier_name, address, contact_person, contact_number, note) => base_api.patch(`/dashboard/supplier/${id}`, {
    supplier: [
        {
            supplier_name: supplier_name,
            address: address,
            contact_person: contact_person,
            contact_number: contact_number,
            note: note
        }
    ]
}, { headers: { 'Authorization': `Bearer ${TOKEN}` } })