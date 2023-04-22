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
    const [datecon, setDateCon] = useState();

    const find_soon_prod_exp = useSelector(state => get_exact_date ? state.reducer?.store[0]?.products?.find(val => Math.floor((val.expiration_date - Date.now()) / (1000 * 60 * 60 * 24)) === get_exact_date) : null);

    console.log(find_soon_prod_exp)

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

    // find the item based on days gives false fix tommorow !!!

    useEffect(() => {
        const result = () => saletargets.reduce((oldvalue, newvalue) => oldvalue + newvalue, 0);
        setTotalSales(result());
        const sorted_products = () => get_products[0]?.products?.sort((a, b) => a?.quantity > b?.quantity ? 1 : -1)
        setSortedProd(sorted_products());
    }, [totalSales])

    useEffect(() => {
        const get_exp_dates = get_products[0]?.products.map(state => {
            return state?.expiration_date
        })
        setGet_Expire_Days(get_exp_dates)
    }, [get_products])

    useEffect(() => {
        const get_short_days = get_products[0]?.products.map(state => {
            return state?.expiration_date
        });
        const get_dates_parsed = get_short_days && get_short_days.map(val => {
            return Math.floor((val - Date.now()) / (1000 * 60 * 60 * 24))
        })
        if (get_dates_parsed) setDateCon(get_dates_parsed)
        if (datecon) {
            let min = Math.min(...datecon)
            setGet_Exact_Date(min)
        }
    }, [get_products])

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
                    <span className='product-label'>
                        Soon to Expire Product
                    </span>
                    <span className='product-lowest-title-text'>
                        {find_soon_prod_exp ? find_soon_prod_exp?.brand_name : 'Loading'}
                    </span>
                    <span className='product-count-text-label'>
                        Days To Expire:
                    </span>
                    <span className='product-count-text'>
                        {get_exact_date ? get_exact_date : 'Loading'}
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