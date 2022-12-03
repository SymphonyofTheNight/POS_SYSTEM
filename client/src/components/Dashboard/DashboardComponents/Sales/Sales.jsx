import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaPlus, FaMinus } from 'react-icons/fa';

// import api 
import { add_sales, delete_sales } from '../../../../api/api.js';

const Sales = () => {

    const navigate = useNavigate();

    // get products brandname,genericname,description/category,originalprice,sellingprice and multiply both origina
    const _get_products = useSelector(state => state.reducer.store);
    const _get_sales = useSelector(state => state.reducer.store);

    //hooks
    const [_get_product_id, set_Get_Product_ID] = useState();
    const [Localstorage] = useState(JSON.parse(localStorage.getItem('Administrator'))); // admin local
    const [counter, setCounter] = useState(0); // quantity done
    const [get_total_profit, setGet_Total_Profit] = useState(0);
    const [get_total_amount, setGet_Total_Amount] = useState(0);

    //check if found ID
    const check_id = useSelector(state => _get_product_id ? state.reducer.store.map(res => res.products.find(val => val._id === _get_product_id)) : state);

    const add_sales_onHandlerSubmit = (e) => {
        e.preventDefault();

        const quantity_multiplier = check_id[0]?.selling_price * counter;
        const multiply_original_price = check_id[0]?.original_price * counter;
        const get_total_profit = quantity_multiplier - multiply_original_price;

        if (check_id) {
            add_sales(
                Localstorage?.result?._id,
                Localstorage?.token,
                check_id[0]?._id,
                check_id[0]?.brand_name,
                check_id[0]?.generic_name,
                check_id[0]?.category_description,
                counter,
                quantity_multiplier,
                get_total_profit
            )

            // window.location.reload();

        }

    }

    useEffect(() => {
        if (_get_sales) {
            const profit = _get_sales[0]?.sales?.map(state => {
                return state.profit * state.qty
            })

            const amount = _get_sales[0]?.sales?.map(state => {
                return state.amount * state.qty
            })

            if (profit && amount) {
                let total_profit = profit?.reduce((cur, prev) => cur + prev, 0);
                setGet_Total_Profit(total_profit)

                let total_amount = amount?.reduce((cur, prev) => cur + prev, 0);
                setGet_Total_Amount(total_amount)
            }

        }
    }, [_get_sales])

    //  TOMMOROW GET THE PRODUCT IDENTIFIER AND SUPPLY IT ON API ADD SALES 

    // console.log(_get_product_id)

    return (
        <div className='Sales'>
            <div className='innerContainer'>
                <div className='page-title-container'>
                    <span className='text'>
                        Sales
                    </span>
                </div>
                <div className='select-container'>
                    <select
                        className="form-select"
                        aria-label="Default select example"
                        onChange={(e) => {
                            set_Get_Product_ID(e.target.value)
                        }}
                    >
                        <option defaultValue="Select product">Select product</option>
                        {_get_products && Object.keys(_get_products[0].products).map((key, value) => {
                            return (
                                <option value={_get_products[0]?.products[value]?._id} key={_get_products[0]?.products[value]?._id}>{_get_products[0]?.products[value]?.brand_name}</option>
                            )
                        })}
                    </select>
                    <div className='counter-form-container'>
                        <button className='decrement-btn'
                            onClick={() => {
                                if (counter <= check_id[0]?.quantity) {
                                    setCounter(state => state - 1)
                                    if (counter <= 0) {
                                        setCounter(0)
                                    }
                                }
                            }}
                        >
                            <FaMinus />
                        </button>
                        <div className='count-container'>
                            {counter}
                        </div>
                        <button className='increment-btn'
                            onClick={() => {
                                if (counter >= check_id[0]?.quantity) {
                                    setCounter(check_id[0]?.quantity)
                                }
                                else if (counter <= check_id[0]?.quantity) {
                                    setCounter(state => state + 1)
                                }
                            }}
                        >
                            <FaPlus />
                        </button>
                    </div>

                    <form onSubmit={add_sales_onHandlerSubmit}>
                        <button className='addBtn'
                            type='submit'
                        >
                            Add
                        </button>
                    </form>
                </div>
                <div className='table-container'>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Product_Name</th>
                                <th scope="col">Generic_Name</th>
                                <th scope="col">Category/Description</th>
                                <th scope="col">Qty</th>
                                <th scope="col">Amount</th>
                                <th scope="col">Profit</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {_get_sales && Object.keys(_get_sales[0].sales).map((key, value) => {

                                console.log(_get_sales[0].sales[key]?.identifier)
                                return (
                                    <tr>
                                        <td>{_get_sales[0].sales[key].product_name}</td>
                                        <td>{_get_sales[0].sales[key].generic_name}</td>
                                        <td>{_get_sales[0].sales[key].description}</td>
                                        <td>{_get_sales[0].sales[key].qty}</td>
                                        <td>{_get_sales[0].sales[key].amount}</td>
                                        <td>{_get_sales[0].sales[key].profit * _get_sales[0].sales[key].qty}</td>
                                        <div className='btn-container'>
                                            <button
                                                onClick={() => {
                                                    delete_sales(
                                                        Localstorage?.result?._id,
                                                        Localstorage?.token,
                                                        _get_sales[0].sales[key]._id,
                                                        _get_sales[0].sales[key]?.identifier,
                                                        _get_sales[0].sales[key]?.qty,
                                                    )
                                                    window.location.reload();

                                                }}
                                            >
                                                Cancel
                                            </button>
                                        </div>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
                <div className='btn-submit-container'>

                    <span className='total-text'>
                        Total: {get_total_amount}
                    </span>
                    <span className='profit-text'>
                        Profit: {get_total_profit}
                    </span>

                    <button className='btnSubmit'
                        onClick={() => {
                            navigate('/Checkout')
                        }}
                    >
                        Checkout
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Sales;

//mamaya need to finish checkout with invoice using easyinvoice