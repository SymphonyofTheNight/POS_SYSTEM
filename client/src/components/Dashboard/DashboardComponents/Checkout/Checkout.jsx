import React, { useState, useRef, useEffect } from 'react';
import '../../../../scss/_Checkout.scss';

//logo
import brandcopy from '../../../../assets/img/brandcopy.png';

const Checkout = () => {

    const _get_date = new Date().getDay();
    const _get_month = new Date().getMonth();
    const _get_year = new Date().getFullYear();

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