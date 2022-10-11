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

// supplier api

export const add_supplier = (supplier) => base_api.post(`/dashboard/supplier/${supplier._id}`, {
    supplier: [
        {
            supplier_name: supplier.supplier_name,
            address: supplier.address,
            contact_person: supplier.contact_person,
            contact_number: supplier.contact_number,
            note: supplier.note
        }
    ]
}, { headers: { 'Authorization': `Bearer ${supplier.token}` } });

export const edit_supplier = (supplier) => base_api.patch(`/dashboard/supplier/${supplier._id}`, {
    supplier: [
        {
            supplier_name: supplier.supplier_name,
            address: supplier.address,
            contact_person: supplier.contact_person,
            contact_number: supplier.contact_number,
            note: supplier.note
        }
    ]
}, { headers: { 'Authorization': `Bearer ${supplier.token}` } });

export const delete_supplier = (owner_id, token, supplier_item_id) => base_api.put(`/dashboard/supplier/${owner_id}`, {
    supplier: [
        {
            _id: supplier_item_id
        }
    ]
}, { headers: { 'Authorization': `Bearer ${token}` } });

// customer api

export const add_customer = (customer) => base_api.post(`/dashboard/customer/${customer._id}`, {
    customer: [
        {
            fullname: customer.fullname,
            address: customer.address,
            contact_number: customer.contact_number,
            product_name: customer.product_name,
            total: customer.total,
            note: customer.note,
            due_date: customer.due_date
        }
    ]
}, { headers: { 'Authorization': `Bearer ${customer.token}` } })
