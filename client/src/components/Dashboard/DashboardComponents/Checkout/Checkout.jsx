import React, { useState, useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import '../../../../scss/_Checkout.scss';

//logo
import brandcopy from '../../../../assets/img/brandcopy.png';

const Checkout = () => {

    const getSales = useSelector(state => state.reducer.store);

    const _get_date = new Date().getDay();
    const _get_month = new Date().getMonth();
    const _get_year = new Date().getFullYear();

    console.log(getSales[0].sales);

    return (
        <div className='Checkout'>
            <div className='innerContainer'>

                <div className='logoContainerDiv'>
                    <img src={brandcopy} className='logo' alt='brand' />
                    <h1 className='text'>
                        INVOICE
                    </h1>
                </div>

                <div className='branchdetailsContainer'>

                    <div className='innerContainer-1'>
                        <span className='Text'>Number: 09XXXXXXXXX</span> <br />
                        <span className='Text'>Date: {_get_month + 1 + '/' + _get_date + '/' + _get_year}</span> <br />
                    </div>

                    <div className='innerContainer-2'>
                        <span className='Text'>Chocolate Factory</span> <br />
                        <span className='Text'>City of Malolos,Bulacan</span> <br />
                        <span className='Text'>Philippines</span> <br />
                    </div>
                </div>

                <div className='productContainerLabels'>
                    <span className='text-1'>
                        Products
                    </span>
                    <span className='text-2'>
                        Quantity
                    </span>
                    <span className='text-3'>
                        Price
                    </span>
                    <span className='text-4'>
                        Total
                    </span>
                </div>
                <div className='line' />

                <div className='productsContainer'>
                    {getSales && Object.keys(getSales[0]?.sales).map((key, value) => {
                        console.log(getSales[0]?.sales[key])
                        return (
                            <div className='products'>
                                <span className='text-1'>{getSales[0]?.sales[key]?.product_name}</span>
                                <span className='text-2'>{getSales[0]?.sales[key]?.qty}</span>
                                <span className='text-3'>{getSales[0]?.sales[key]?.amount}</span>
                                <span className='text-4'>{getSales[0]?.sales[key]?.amount * getSales[0]?.sales[key]?.qty}</span>
                            </div>
                        )
                    })}
                </div>
                <div className='line-2' />
                <div className='SubtotalContainerLabels'>
                    <span className='text-3'>Subtotal</span>
                    <span className='text-4'>99999</span>
                </div>
                <div className='VatContainerLabels'>
                    <span className='text-3'>Vat 6%</span>
                    <span className='text-4'>99999</span>
                </div>
                <button
                    onClick={() => {
                        window.print()
                    }}>
                    print
                </button>
            </div>
        </div>
    )
}

export default Checkout;