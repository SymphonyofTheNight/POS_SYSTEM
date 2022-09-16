import React from 'react';
import { LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Line } from 'recharts';

const HomeDashboard = () => {

    const data = [
        {
            "name": "January",
            "target sales": 4000,
            "sales": 2400,
            "amt": 2400
        },
        {
            "name": "February",
            "target sales": 3000,
            "sales": 1398,
            "amt": 2210
        },
        {
            "name": "March",
            "target sales": 2000,
            "sales": 9800,
            "amt": 2290
        },
        {
            "name": "April",
            "target sales": 2780,
            "sales": 3908,
            "amt": 2000
        },
        {
            "name": "May",
            "target sales": 1890,
            "sales": 4800,
            "amt": 2181
        },
        {
            "name": "June",
            "target sales": 2390,
            "sales": 3800,
            "amt": 2500
        },
        {
            "name": "July",
            "target sales": 3490,
            "sales": 4300,
            "amt": 2100
        },
        {
            "name": "August",
            "target sales": 3490,
            "sales": 4300,
            "amt": 2100
        },
        {
            "name": "September",
            "target sales": 3490,
            "sales": 4300,
            "amt": 2100
        },
        {
            "name": "October",
            "target sales": 3490,
            "sales": 4300,
            "amt": 2100
        },
        {
            "name": "November",
            "target sales": 3490,
            "sales": 4300,
            "amt": 2100
        },
        {
            "name": "December",
            "target sales": 3490,
            "sales": 4300,
            "amt": 2100
        },
    ]

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
                    <Line type="monotone" dataKey="target sales" stroke="#e71755" />
                </LineChart>
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