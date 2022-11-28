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

export const add_supplier = (supplier) => base_api.post(`/Supplier/${supplier._id}`, {
    supplier: [
        {
            identifier: supplier.identifier,
            supplier_name: supplier.supplier_name,
            address: supplier.address,
            contact_person: supplier.contact_person,
            contact_number: supplier.contact_number,
            note: supplier.note
        }
    ]
}, { headers: { 'Authorization': `Bearer ${supplier.token}` } });

export const edit_supplier = (supplier) => base_api.patch(`/Supplier/${supplier._id}`, {
    supplier: [
        {
            identifier: supplier.identifier,
            supplier_name: supplier.supplier_name,
            address: supplier.address,
            contact_person: supplier.contact_person,
            contact_number: supplier.contact_number,
            note: supplier.note
        }
    ]
}, { headers: { 'Authorization': `Bearer ${supplier.token}` } });

export const delete_supplier = (owner_id, token, supplier_item_id) => base_api.put(`/Supplier/${owner_id}`, {
    supplier: [
        {
            _id: supplier_item_id
        }
    ]
}, { headers: { 'Authorization': `Bearer ${token}` } });

// customer api

export const add_customer = (customer, points) => base_api.post(`/Customer/${customer._id}`, {
    customer: [
        {
            identifier: customer.identifier,
            fullname: customer.fullname,
            address: customer.address,
            contact_number: customer.contact_number,
            product_name: customer.product_name,
            total: customer.total,
            note: customer.note,
            due_date: customer.due_date,
            points: points
        }
    ]
}, { headers: { 'Authorization': `Bearer ${customer.token}` } });

export const edit_customer = (customer, points) => base_api.patch(`/Customer/${customer._id}`, {
    customer: [
        {
            identifier: customer.identifier,
            fullname: customer.fullname,
            address: customer.address,
            contact_number: customer.contact_number,
            product_name: customer.product_name,
            total: customer.total,
            note: customer.note,
            due_date: customer.due_date,
            points: points
        }
    ]
}, { headers: { 'Authorization': `Bearer ${customer.token}` } })

export const delete_customer = (owner_id, token, customer_item_id) => base_api.put(`/Customer/${owner_id}`, {
    customer: [
        {
            _id: customer_item_id
        }
    ]
}, { headers: { 'Authorization': `Bearer ${token}` } })

// products api

// add products tommorow !!
// add edit products tommorow !!

export const add_products = (products) => base_api.post(`/Products/${products._id}`, {
    products: [
        {
            identifier: products.identifier,
            brand_name: products.brand_name,
            generic_name: products.generic_name,
            category_description: products.category_description,
            supplier: products.supplier,
            added_date: products.added_date,
            expiration_date: products.expiration_date,
            original_price: products.original_price,
            selling_price: products.selling_price,
            quantity: products.quantity
        }
    ]
}, { headers: { 'Authorization': `Bearer ${products.token}` } })

export const edit_products = (products) => base_api.patch(`/Products/${products._id}`, {
    products: [
        {
            identifier: products.identifier,
            brand_name: products.brand_name,
            generic_name: products.generic_name,
            category_description: products.category_description,
            supplier: products.supplier,
            added_date: products.added_date,
            expiration_date: products.expiration_date,
            original_price: products.original_price,
            selling_price: products.selling_price,
            quantity: products.quantity
        }
    ]
}, { headers: { 'Authorization': `Bearer ${products.token}` } })

export const delete_products = (owner_id, token, products_item_id) => base_api.put(`/Products/${owner_id}`, {
    products: [
        {
            _id: products_item_id
        }
    ]
}, { headers: { 'Authorization': `Bearer ${token}` } })

// sales api

export const add_sales = (owner_id, token, identifier, product_name, generic_name, description, qty, amount, profit) => base_api.post(`Sales/${owner_id}`, {
    sales: [
        {
            identifier: identifier,
            product_name: product_name,
            generic_name: generic_name,
            description: description,
            qty: qty,
            amount: amount,
            profit: profit
        }
    ]
}, { headers: { 'Authorization': `Bearer ${token}` } })

export const delete_sales = (owner_id, token, sales_id) => base_api.put(`/Sales/${owner_id}`, {
    sales: [
        {
            _id: sales_id
        }
    ]
}, { headers: { 'Authorization': `Bearer ${token}` } })

// sales report

export const sales_report = (
    owner_id,
    token,
    data) => base_api.patch(`/Checkout/${owner_id}`,
        {
            sales_report: data // array of objects
        }, {
        headers: { 'Authorization': `Bearer ${token}` }
    }
    )

export const empty_sales = (owner_id) => base_api.put(`/Checkout/${owner_id}`, { sales: [] });

// admin edit

export const admin_username = (adminID, token, username, password, newusername) => base_api.patch(`/Settings/${adminID}`, {
    admin: username,
    newusername: newusername,
    password: password
}, { headers: { 'Authorization': `Bearer ${token}` } });

export const admin_password = (adminID, token, password, newpassword, repeatpassword) => base_api.put(`/Settings/${adminID}`, {
    password: password,
    newpassword: newpassword,
    repeatpassword: repeatpassword
}, { headers: { 'Authorization': `Bearer ${token}` } });
