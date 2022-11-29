import React from 'react';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { FaPen, FaTrash } from 'react-icons/fa';
import { v4 as uuidv4 } from 'uuid';

// import aoi
import { delete_products } from '../../../../api/api.js';

const Product = ({
    setOpen_Modal_Products,
    setCheck_If_Edit,
    setModalTitle,
    setProducts,
    products
}) => {

    const get_products = useSelector(state => state.reducer.store);
    const [Localstorage] = useState(JSON.parse(localStorage.getItem('Administrator')));
    const [get_prod_id, setGet_Prod_Id] = useState();

    const findProduct = useSelector(state => get_prod_id ? state.reducer?.store?.map(val => val.products.find(sup => sup._id === get_prod_id)) : null);

    useEffect(() => {
        if (findProduct) {
            setProducts({
                ...products,
                _id: Localstorage?.result?._id,
                token: Localstorage?.token,
                identifier: findProduct[0].identifier,
                brand_name: findProduct[0].brand_name,
                generic_name: findProduct[0].generic_name,
                category_description: findProduct[0].category_description,
                supplier: findProduct[0].supplier,
                added_date: findProduct[0].added_date,
                expiration_date: findProduct[0].expiration_date,
                original_price: findProduct[0].original_price,
                selling_price: findProduct[0].selling_price,
                quantity: findProduct[0].quantity
            })
        }
    }, [findProduct])

    console.log(findProduct);

    const delete_products_handler = (e) => {
        e.preventDefault();

        console.log(Localstorage?.result?._id, Localstorage?.token, get_prod_id)

        if (Localstorage && get_prod_id) delete_products(Localstorage?.result?._id, Localstorage?.token, get_prod_id)

        window.location.reload();
    }

    return (
        <div className='Products'>
            <div className='innerContainer'>
                <div className='page-title-container'>
                    <span className='text'>
                        Products
                    </span>
                </div>
                {/* <div className='select-container'>
                    <select className="form-select" aria-label="Default select example">
                        <option defaultValue="Open this select menu">Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                    <button className='addBtn'
                       
                    >
                        Add
                    </button>
                </div> */}
                <div className='table-container'>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Brand_Name</th>
                                <th scope="col">Generic_Name</th>
                                <th scope="col">Category/Description</th>
                                <th scope="col">Supplier</th>
                                <th scope="col">Receive_Date</th>
                                <th scope="col">Expiry_Date</th>
                                <th scope="col">Original_Price</th>
                                <th scope="col">Selling_Price</th>
                                <th scope="col">Qty</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        {get_products[0] ? Object.keys(get_products[0]?.products).map((key, value) => {
                            return (
                                <tbody key={get_products[0]?.products[key]._id}>
                                    <tr>
                                        <th scope="row">{get_products[0]?.products[key].brand_name}</th>
                                        <td>{get_products[0]?.products[key].generic_name}</td>
                                        <td>{get_products[0]?.products[key].category_description}</td>
                                        <td>{get_products[0]?.products[key].supplier}</td>
                                        <td>{get_products[0]?.products[key].added_date}</td>
                                        <td>{get_products[0]?.products[key].expiration_date}</td>
                                        <td>{get_products[0]?.products[key].original_price}</td>
                                        <td>{get_products[0]?.products[key].selling_price}</td>
                                        <td>{get_products[0]?.products[key].quantity}</td>
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
                                                        setGet_Prod_Id(get_products[0]?.products[key]._id)
                                                        setCheck_If_Edit(state => !state)
                                                        setOpen_Modal_Products(state => !state)
                                                        setModalTitle('Edit Customer')
                                                    }}
                                                >
                                                    <FaPen />
                                                </button>
                                                <form onSubmit={delete_products_handler} >
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
                                                            setGet_Prod_Id(get_products[0]?.products[key]._id)
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
                    <button className='btnSubmit'
                        onClick={() => {
                            setOpen_Modal_Products(state => !state)
                            setCheck_If_Edit(false)
                            setModalTitle('Add Product')
                            setProducts({
                                ...products,
                                brand_name: '',
                                generic_name: '',
                                category_description: '',
                                supplier: '',
                                added_date: '',
                                expiration_date: '',
                                original_price: '',
                                selling_price: '',
                                quantity: ''
                            });
                        }}
                    >
                        Add
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Product;