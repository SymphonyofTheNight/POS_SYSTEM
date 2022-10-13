import React from 'react';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { FaPen, FaTrash } from 'react-icons/fa';

// import api 
import { delete_customer } from '../../../../api/api.js';

const Customer = ({
    setOpen_Modal_Customer,
    setCheck_If_Edit,
    setModalTitle,
    setCustomer,
    customer
}) => {

    const get_customer = useSelector(state => state.reducer.store);
    const [Localstorage] = useState(JSON.parse(localStorage.getItem('Administrator')));
    const [get_cus_id, setGet_Cus_Id] = useState();

    const findCustomer = useSelector(state => get_cus_id ? state.reducer?.store?.map(val => val.customer.find(sup => sup._id === get_cus_id)) : null);

    useEffect(() => {
        if (findCustomer) {
            setCustomer({
                ...customer,
                _id: Localstorage?.result?._id,
                token: Localstorage?.token,
                fullname: findCustomer[0].fullname,
                address: findCustomer[0].address,
                contact_number: findCustomer[0].contact_number,
                product_name: findCustomer[0].product_name,
                total: findCustomer[0].total,
                note: findCustomer[0].note,
                due_date: findCustomer[0].due_date
            })
        }
    }, [findCustomer])

    const delete_customer_handler = (e) => {
        e.preventDefault();

        if (Localstorage && get_cus_id) delete_customer(Localstorage?.result?._id, Localstorage?.token, get_cus_id)

        window.location.reload();
    }

    return (
        <div className='Customer'>
            <div className='innerContainer'>
                <div className='page-title-container'>
                    <span className='text'>
                        Customer
                    </span>
                </div>
                <div className='select-container'>
                    <select className="form-select" aria-label="Default select example">
                        <option defaultValue="Open this select menu">Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                    <button className='addBtn'
                        onClick={() => {
                            setOpen_Modal_Customer(state => !state)
                            setCheck_If_Edit(false)
                            setModalTitle('Add Customer')
                            setCustomer({
                                ...customer,
                                fullname: '',
                                address: '',
                                contact_number: '',
                                product_name: '',
                                total: '',
                                note: '',
                                due_date: ''
                            });
                        }}
                    >
                        Add
                    </button>
                </div>
                <div className='table-container'>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Fullname</th>
                                <th scope="col">Address</th>
                                <th scope="col">Contact_Number</th>
                                <th scope="col">Product_Name</th>
                                <th scope="col">Total</th>
                                <th scope="col">Note</th>
                                <th scope="col">Due_Date</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        {get_customer[0] ? Object.keys(get_customer[0]?.customer).map((key, value) => {
                            return (
                                <tbody key={get_customer[0]?.customer[key]._id}>
                                    <tr>
                                        <th scope="row">{get_customer[0]?.customer[key].fullname}</th>
                                        <td>{get_customer[0]?.customer[key].address}</td>
                                        <td>{get_customer[0]?.customer[key].contact_number}</td>
                                        <td>{get_customer[0]?.customer[key].product_name}</td>
                                        <td>{get_customer[0]?.customer[key].total}</td>
                                        <td>{get_customer[0]?.customer[key].note}</td>
                                        <td>{get_customer[0]?.customer[key].due_date}</td>
                                        <td>
                                            <div className='btnContainer'
                                                style={{
                                                    display: 'flex'
                                                }}
                                            >
                                                <button
                                                    type='submit'
                                                    className='editBtn'
                                                    style={{
                                                        border: '0px solid transparent',
                                                        width: '2vw',
                                                        height: 'auto',
                                                        display: 'grid',
                                                        placeItems: 'center',
                                                        background: 'none'
                                                    }}
                                                    onClick={() => {
                                                        setGet_Cus_Id(get_customer[0]?.customer[key]._id)
                                                        setCheck_If_Edit(state => !state)
                                                        setOpen_Modal_Customer(state => !state)
                                                        setModalTitle('Edit Customer')
                                                    }}
                                                >
                                                    <FaPen />
                                                </button>
                                                <form onSubmit={delete_customer_handler}>
                                                    <button
                                                        type='submit'
                                                        className='editBtn'
                                                        style={{
                                                            border: '0px solid transparent',
                                                            width: '2vw',
                                                            height: 'auto',
                                                            display: 'grid',
                                                            placeItems: 'center',
                                                            background: 'none'
                                                        }}
                                                        onClick={() => {
                                                            setGet_Cus_Id(get_customer[0]?.customer[key]._id)
                                                        }}
                                                    >
                                                        <FaTrash />
                                                    </button>
                                                </form>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            )
                        }) : null}
                    </table>
                </div>
                <div className='btn-submit-container'>
                    <button className='btnSubmit'>
                        Submit
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Customer;