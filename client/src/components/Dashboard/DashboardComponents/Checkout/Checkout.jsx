import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import '../../../../scss/_Checkout.scss';

// api 
import { sales_report } from '../../../../api/api.js';

// logo 
import brandcopy from '../../../../assets/img/brandcopy.png';

const Checkout = () => {

    const navigate = useNavigate();

    const getSales = useSelector(state => state.reducer.store);

    const _get_date = new Date().getDay();
    const _get_month = new Date().getMonth();
    const _get_year = new Date().getFullYear();

    const [totalAmount, setTotalAmount] = useState();
    const [get_vat, setGet_Vat] = useState();
    const [get_total, setGet_Total] = useState();

    const [data, setData] = useState({});
    const [Localstorage] = useState(JSON.parse(localStorage.getItem('Administrator')));

    useEffect(() => {

        const total = getSales[0]?.sales.map(state => {
            return state.amount * state.qty
        })

        const reduce_total = total.reduce((prev, curr) => prev + curr, 0);

        const get_total_vat = reduce_total * 0.06;

        if (reduce_total && get_total_vat) {

            setData(getSales[0]?.sales);

            setTotalAmount(reduce_total)
            setGet_Vat(get_total_vat)

            const total_to_pay = reduce_total + get_total_vat;

            setGet_Total(total_to_pay);

            console.log(data)
        }

    }, [getSales])

    const Checkout_HandleSubmit = (e) => {
        e.preventDefault();
        console.log(Localstorage?.result?._id, Localstorage?.token, data)
        sales_report(Localstorage?.result?._id, Localstorage?.token, data);
    }

    return (
        <div className='Checkout'>
            <div className='innerContainer'>

                <div className='logoContainerDiv'>
                    <form onSubmit={Checkout_HandleSubmit}>
                        <button
                            className='logoBtnPrint'
                            onClick={() => {
                                window.print()
                            }}
                        >
                            <img src={brandcopy} className='logo' alt='brand' />
                        </button>
                    </form>
                    <button className='text'
                        onClick={() => {
                            navigate('/dashboard')
                        }}
                    >
                        INVOICE
                    </button>
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
                        // console.log(getSales[0]?.sales[key])
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
                    <span className='text-4'>{totalAmount}</span>
                </div>
                <div className='VatContainerLabels'>
                    <span className='text-3'>Vat 6%</span>
                    <span className='text-4'>{get_vat}</span>
                </div>
                <div className='TotalContainerLabels'>
                    <span className='text-3'>Total</span>
                    <span className='text-4'>{get_total}</span>
                </div>
                {/* <button
                    onClick={() => {
                        window.print()
                    }}>
                    print
                </button> */}
            </div>
        </div>
    )
}

export default Checkout;