import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Line } from 'recharts';

const HomeDashboard = ({ targetSales, setTargetSales }) => {

    const get_products = useSelector(state => state.reducer.store);
    const get_months_db = useSelector(state => state.reducer.store);
    const get_records = useSelector(state => state.reducer.store);

    const saletargets = [targetSales.january, targetSales.february, targetSales.march, targetSales.april, targetSales.may, targetSales.june, targetSales.july, targetSales.august, targetSales.september, targetSales.october, targetSales.november, targetSales.december]

    const [totalSales, setTotalSales] = useState();
    const [sortedprod, setSortedProd] = useState();
    const [get_exact_date, setGet_Exact_Date] = useState();
    const [get_expire_days, setGet_Expire_Days] = useState();

    const data = [
        {
            "name": "January",
            "targetsales": 0,
            "sales": get_months_db[0]?.january,
            "amt": 2400
        },
        {
            "name": "February",
            "targetsales": 0,
            "sales": get_months_db[0]?.february,
            "amt": 2210
        },
        {
            "name": "March",
            "targetsales": 0,
            "sales": get_months_db[0]?.march,
            "amt": 2290
        },
        {
            "name": "April",
            "targetsales": 0,
            "sales": get_months_db[0]?.april,
            "amt": 2000
        },
        {
            "name": "May",
            "targetsales": 0,
            "sales": get_months_db[0]?.may,
            "amt": 2181
        },
        {
            "name": "June",
            "targetsales": 0,
            "sales": get_months_db[0]?.june,
            "amt": 2500
        },
        {
            "name": "July",
            "targetsales": 0,
            "sales": get_months_db[0]?.july,
            "amt": 2100
        },
        {
            "name": "August",
            "targetsales": 0,
            "sales": get_months_db[0]?.august,
            "amt": 2100
        },
        {
            "name": "September",
            "targetsales": 0,
            "sales": get_months_db[0]?.september,
            "amt": 2100
        },
        {
            "name": "October",
            "targetsales": 0,
            "sales": get_months_db[0]?.october,
            "amt": 2100
        },
        {
            "name": "November",
            "targetsales": 0,
            "sales": get_months_db[0]?.november,
            "amt": 2100
        },
        {
            "name": "December",
            "targetsales": 0,
            "sales": get_months_db[0]?.december,
            "amt": 2100
        },
    ]

    const expire_Date = (date_string) => {
        var b = date_string.split(/\D/);
        var expiry = new Date(b[2], --b[0], b[1]);
        return Math.round((expiry - new Date().setHours(0, 0, 0, 0)) / 8.64e7);
    }

    useEffect(() => {
        const result = () => saletargets.reduce((oldvalue, newvalue) => oldvalue + newvalue, 0);
        setTotalSales(result());
        const sorted_products = () => get_products[0]?.products?.sort((a, b) => a?.quantity > b?.quantity ? 1 : -1)
        setSortedProd(sorted_products());
    }, [totalSales])

    useEffect(() => {
        const get_exp_dates = get_products[0]?.products.map(state => {
            return state?.expiration_date_js_format
        })
        setGet_Expire_Days(get_exp_dates)

        // if (get_expire_days) {
        //     setGet_Exact_Date((get_expire_days && get_expire_days[0] - Date.now()) / (1000 * 60 * 60 * 24))
        // }
    }, [])

    // console.log((get_expire_days && get_expire_days[0] - Date.now()) / (1000 * 60 * 60 * 24))
    // console.log(Date.now())

    // console.log(get_exact_date)

    // console.log(get_expire_days && get_expire_days[0])

    // var now = new Date().getTime();
    // let closes_date = get_products[0]?.products.reduce((a,b) => a.expiration_date)

    // console.log(now)

    // console.log(get_products[0]?.products)

    // console.log(get_products[0]?.products.map(state => {
    //     console.log(state?.expiration_date)
    // }))

    // console.log(get_products[0]?.products.map(state => {
    //     console.log(state?.expiration_date_js_format)
    // }))

    return (
        <div className='Home'>
            <div className='data-statistics-container'>
                <div className='chart'>
                    <span className='product-label'>
                        Lowest Product Quantity
                    </span>
                    <span className='product-lowest-title-text'>
                        {sortedprod && sortedprod[0]?.brand_name}
                    </span>
                    <span className='product-count-text-label'>
                        Total quantity count:
                    </span>
                    <span className='product-count-text'>
                        {sortedprod && sortedprod[0]?.quantity}
                    </span>
                </div>
                <div className='chart-2'>
                    {/* <input type='date' /> */}
                    <span className='product-label'>
                        Soon to Expire Product
                    </span>
                    <span className='product-lowest-title-text'>
                        {sortedprod && sortedprod[0]?.brand_name}
                    </span>
                    <span className='product-count-text-label'>
                        Days To Expire:
                    </span>
                    <span className='product-count-text'>
                        {Math.floor((get_expire_days && get_expire_days[0] - Date.now()) / (1000 * 60 * 60 * 24))}
                    </span>
                </div>
                <div className='chart-3'>
                    <span className='value-text'>
                        {get_records[0]?.total_product_sold}
                    </span>
                    <span className='category-text'>
                        Total Products Sold
                    </span>
                </div>
                <div className='chart-4'>
                    <span className='value-text'>
                        {get_records[0]?.customer?.length}
                    </span>
                    <span className='category-text'>
                        Total Customer
                    </span>
                </div>
            </div>
            <div className='chartContainer'>
                <div className='innerchartContainer'>
                    <span className='text'>
                        Sales chart
                    </span>
                    <span className='text-2'>
                        January to December {new Date().getFullYear()}
                    </span>
                    <LineChart className='chart-data' width={1230} height={300} data={data}
                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="sales" stroke="#7a17a1" />
                        <Line type="monotone" dataKey="targetsales" stroke="#e71755" />
                    </LineChart>
                </div>
                {/* <div className='data-meterContainer'>
                    <div className='salesContainer'>
                        <div className='progress-line-container'>
                            <span className='text'>
                                Sales
                            </span>
                            <div className="progress" style={{ height: '8px' }}>
                                <div className="progress-bar" role="progressbar" style={{ width: '80%' }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" />
                            </div>
                        </div>
                    </div>
                    <div className='sales-targetContainer'>
                        <div className='progress-line-container'>
                            <span className='text'>
                                Target Sales
                            </span>
                            <div className="progress" style={{ height: '8px' }}>
                                <div className="progress-bar" role="progressbar" style={{ width: '100%' }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" />
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
            <div className='activityContainer'>
                <div className='titleContainer'>
                    <span className='text'>
                        Activity Log
                    </span>
                </div>
                <div className='logContainer'>

                </div>
            </div>
        </div>
    )
}

export default HomeDashboard;