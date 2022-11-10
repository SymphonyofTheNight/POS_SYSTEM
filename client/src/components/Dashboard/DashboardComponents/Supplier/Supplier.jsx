import React from 'react';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { FaPen, FaTrash } from 'react-icons/fa';

// api 
import { delete_supplier } from '../../../../api/api.js';

const Supplier = ({
    setOpen_Modal_Supplier,
    setCheck_If_Edit,
    setSupplier,
    supplier,
    setModalTitle,
}) => {

    const get_suppliers = useSelector(state => state.reducer.store);
    const [Localstorage] = useState(JSON.parse(localStorage.getItem('Administrator')));
    const [get_sup_id, setGet_Sup_Id] = useState();

    const findSupplier = useSelector(state => get_sup_id ? state.reducer?.store?.map(val => val.supplier.find(sup => sup._id === get_sup_id)) : null);

    const delete_supplier_handler = (e) => {

        e.preventDefault();

        console.log(Localstorage?.result?._id, Localstorage?.token, get_sup_id);

        if (Localstorage && get_sup_id) delete_supplier(Localstorage?.result?._id, Localstorage?.token, get_sup_id);

        window.location.reload();

    }

    useEffect(() => {
        if (findSupplier) {
            setSupplier({
                ...supplier,
                _id: Localstorage?.result?._id,
                token: Localstorage?.token,
                identifier: findSupplier[0].identifier,
                supplier_name: findSupplier[0].supplier_name,
                address: findSupplier[0].address,
                contact_person: findSupplier[0].contact_person,
                contact_number: findSupplier[0].contact_number,
                note: findSupplier[0].note
            })
        }
    }, [findSupplier])

    return (
        <div className='Supplier'>
            <div className='innerContainer'>
                <div className='page-title-container'>
                    <span className='text'>
                        Supplier
                    </span>
                </div>
                <div className='select-container'>
                    <select className="form-select" aria-label="Default select example">
                        <option defaultValue='Open this select menu'>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                    <button className='addBtn'
                        onClick={() => {
                            setOpen_Modal_Supplier(state => !state)
                            setCheck_If_Edit(false)
                            setModalTitle('Add Supplier')
                            setSupplier({
                                ...supplier,
                                supplier_name: '',
                                address: '',
                                contact_person: '',
                                contact_number: '',
                                note: ''
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
                                <th scope="col">Supplier</th>
                                <th scope="col">Contact_Person</th>
                                <th scope="col">Address</th>
                                <th scope="col">Contact_Number</th>
                                <th scope="col">Note</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        {get_suppliers[0] ? Object.keys(get_suppliers[0]?.supplier).map((key, value) => {
                            return (
                                <tbody key={get_suppliers[0]?.supplier[key]._id}>
                                    <tr>
                                        <th scope="row">{get_suppliers[0]?.supplier[key].supplier_name}</th>
                                        <td>{get_suppliers[0]?.supplier[key].contact_person}</td>
                                        <td>{get_suppliers[0]?.supplier[key].address}</td>
                                        <td>{get_suppliers[0]?.supplier[key].contact_number}</td>
                                        <td>{get_suppliers[0]?.supplier[key].note}</td>
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
                                                        setGet_Sup_Id(get_suppliers[0]?.supplier[key]._id)
                                                        setCheck_If_Edit(state => !state)
                                                        setOpen_Modal_Supplier(state => !state)
                                                        setModalTitle('Edit Supplier')
                                                    }}
                                                >
                                                    <FaPen />
                                                </button>
                                                <form onSubmit={delete_supplier_handler}>
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
                                                            setGet_Sup_Id(get_suppliers[0]?.supplier[key]._id)
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

export default Supplier;