import React, { useState, useEffect } from 'react';
import { LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Line } from 'recharts';

const HomeDashboard = ({ targetSales, setTargetSales }) => {

    const saletargets = [targetSales.january, targetSales.february, targetSales.march, targetSales.april, targetSales.may, targetSales.june, targetSales.july, targetSales.august, targetSales.september, targetSales.october, targetSales.november, targetSales.december]

    const [totalSales, setTotalSales] = useState();

    const data = [
        {
            "name": "January",
            "targetsales": targetSales.january,
            "sales": 2400,
            "amt": 2400
        },
        {
            "name": "February",
            "targetsales": targetSales.february,
            "sales": 1398,
            "amt": 2210
        },
        {
            "name": "March",
            "targetsales": targetSales.march,
            "sales": 9800,
            "amt": 2290
        },
        {
            "name": "April",
            "targetsales": targetSales.april,
            "sales": 3908,
            "amt": 2000
        },
        {
            "name": "May",
            "targetsales": targetSales.may,
            "sales": 4800,
            "amt": 2181
        },
        {
            "name": "June",
            "targetsales": targetSales.june,
            "sales": 3800,
            "amt": 2500
        },
        {
            "name": "July",
            "targetsales": targetSales.july,
            "sales": 4300,
            "amt": 2100
        },
        {
            "name": "August",
            "targetsales": targetSales.august,
            "sales": 4300,
            "amt": 2100
        },
        {
            "name": "September",
            "targetsales": targetSales.september,
            "sales": 4300,
            "amt": 2100
        },
        {
            "name": "October",
            "targetsales": targetSales.october,
            "sales": 4300,
            "amt": 2100
        },
        {
            "name": "November",
            "targetsales": targetSales.november,
            "sales": 4300,
            "amt": 2100
        },
        {
            "name": "December",
            "targetsales": targetSales.december,
            "sales": 4300,
            "amt": 2100
        },
    ]

    const percentage = (totalSales, targetSales) => {
        return (totalSales / targetSales) * 100
    }

    useEffect(() => {
        const result = () => saletargets.reduce((oldvalue, newvalue) => oldvalue + newvalue, 0);
        setTotalSales(result());
    }, [totalSales])

    return (
        <div className='Home'>
            <div className='data-statistics-container'>
                <div className='chart'>
                    <span className='value-text'>
                        PHP 5000
                    </span>
                    <span className='category-text'>
                        Total Profit
                    </span>
                </div>
                <div className='chart-2'>
                    <span className='value-text'>
                        PHP 5000
                    </span>
                    <span className='category-text'>
                        Sales Revenue
                    </span>
                </div>
                <div className='chart-3'>
                    <span className='value-text'>
                        PCs 5000
                    </span>
                    <span className='category-text'>
                        Total Products Sold
                    </span>
                </div>
                <div className='chart-4'>
                    <span className='value-text'>
                        Customer 5000
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
                <div className='data-meterContainer'>
                    <div className='salesContainer'>
                        <div className='progress-line-container'>
                            <span className='text'>
                                Sales
                            </span>
                        </div>
                        {/* <div className="progress">
                            <div className="progress-bar" role="progressbar" style={{ width: '80%' }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" />
                        </div> */}
                    </div>
                    <div className='sales-targetContainer'>
                        <div className='progress-line-container'>
                            <span className='text'>
                                Target Sales
                            </span>
                        </div>
                    </div>
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