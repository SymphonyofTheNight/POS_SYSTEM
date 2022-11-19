import React from 'react';
import { useSelector } from 'react-redux';
import { v4 as uuid } from 'uuid';

const SalesReport = () => {

    const get_sales_report = useSelector(state => state.reducer.store);

    return (
        <div className='SalesReport'>
            <div className='innerContainer'>
                <div className='page-title-container'>
                    <span className='text'>
                        Sales Report
                    </span>
                </div>
                <div className='table-container'>
                    {get_sales_report && Object.keys(get_sales_report[0]?.sales_report).map((key, value) => {

                        console.log(get_sales_report[0].sales_report[key])

                        let total_quantity_amount = get_sales_report[0].sales_report[key].amount * get_sales_report[0].sales_report[key].qty;
                        let get_vat = total_quantity_amount * 0.06;
                        let total_amount = total_quantity_amount + get_vat;

                        return (
                            <div className='sales-report-container'>
                                <span className='text'>
                                    Admin has sold {get_sales_report[0]?.sales_report[key]?.qty} of {get_sales_report[0]?.sales_report[key]?.product_name} with the total of {total_amount}
                                </span>
                            </div>
                        )
                    })}
                </div>
                {/* <div className='btn-submit-container'>
                    <button className='btnSubmit'>
                        Submit
                    </button>
                </div> */}
            </div>
        </div>
    )
}

export default SalesReport;