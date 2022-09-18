import React from 'react';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { FaBars, FaTachometerAlt, FaShoppingCart, FaTable, FaUser, FaTruck, FaChartBar, FaSignOutAlt } from 'react-icons/fa';

// Dashboard Components
import HomeDashboard from './DashboardComponents/Home/HomeDashboard';
import Sales from './DashboardComponents/Sales/Sales';
import Products from './DashboardComponents/Products/Product';
import Customer from './DashboardComponents/Customer/Customer';
import Supplier from './DashboardComponents/Supplier/Supplier';
import SalesReport from './DashboardComponents/SalesReport/SalesReport';


// brand img
import brand from '../../assets/img/brand.png';

import '../../scss/_Dashboard.scss';

const Dashboard = () => {

    const [targetSales, setTargetSales] = useState({
        january: 4000,
        february: 3500,
        march: 3500,
        april: 4800,
        may: 2800,
        june: 1200,
        july: 5500,
        august: 2030,
        september: 2200,
        october: 3200,
        november: 4200,
        december: 3100,
    })

    // call to navigate on routes
    const navigate = useNavigate();

    //hooks 
    const [Component, setComponent] = useState(<HomeDashboard targetSales={targetSales} setTargetSales={setTargetSales} />);
    const [tabswitch, setTabswitch] = useState(false);
    const [time, setTime] = useState();
    const [nav, setNav] = useState('/ Dashboard');

    const _tabs = useRef(null);
    const nav_1 = useRef(null);
    const nav_2 = useRef(null);
    const nav_3 = useRef(null);
    const rended_tag = useRef(null);

    const nav_tab = useRef(null);

    //side effect
    useEffect(() => {
        if (tabswitch) {
            _tabs.current.style.width = '100vw';
            nav_1.current.style.width = '100vw';
            nav_2.current.style.width = '100vw';
            nav_3.current.style.width = '100vw';
            rended_tag.current.style.width = '100vw';
            nav_tab.current.style.transform = 'translateX(-13vw)';

        } else {
            _tabs.current.style.width = '87vw';
            nav_1.current.style.width = '87vw';
            nav_2.current.style.width = '87vw';
            nav_3.current.style.width = '87vw';
            rended_tag.current.style.width = '87vw';
            nav_tab.current.style.transform = 'translateX(0vw)';

        }
    }, [tabswitch])

    useEffect(() => {
        setTime(
            window.setInterval(() => {
                moment().format('ddd M/d/y H:mm:ss')
            }, 1000)
        )
    }, [])

    return (
        <div className='Dashboard'>
            <nav className='nav-tab' ref={nav_tab}>
                <div className='titleContainer'>
                    <img src={brand} className='brand' alt='brand logo' />
                </div>
                <div className='navigation'>
                    <button className='category'
                        onClick={() => {
                            setComponent(<HomeDashboard targetSales={targetSales} setTargetSales={setTargetSales} />)
                            setNav('/ Dashboard')
                            navigate('/dashboard')
                        }}
                    >
                        <FaTachometerAlt className='meter' />
                        <span className='text'>
                            Dashboard
                        </span>
                    </button>
                    <button className='btn-1' style={{
                        marginTop: '1.5vh'
                    }}
                        onClick={() => {
                            setComponent(<Sales />)
                            setNav('/ Dashboard / Sales')
                            navigate('/dashboard/sales')
                        }}
                    >
                        <FaShoppingCart className='cartIcon' />
                        <span className='text'>
                            Sales
                        </span>
                    </button>
                    <button className='btn-1'
                        onClick={() => {
                            setComponent(<Products />)
                            setNav('/ Dashboard / Products')
                            navigate('/dashboard/products')
                        }}
                    >
                        <FaTable className='tableIcon' />
                        <span className='text'>
                            Products
                        </span>
                    </button>
                    <button className='btn-1'
                        onClick={() => {
                            setComponent(<Customer />)
                            setNav('/ Dashboard / Customer')
                            navigate('/dashboard/customer')
                        }}
                    >
                        <FaUser className='personIcon' />
                        <span className='text'>
                            Customer
                        </span>
                    </button>
                    <button className='btn-1'
                        onClick={() => {
                            setComponent(<Supplier />)
                            setNav('/ Dashboard / Supplier')
                            navigate('/dashboard/supplier')
                        }}
                    >
                        <FaTruck className='truckIcon' />
                        <span className='text'>
                            Supplier
                        </span>
                    </button>
                    <button className='btn-1'
                        onClick={() => {
                            setComponent(<SalesReport />)
                            setNav('/ Dashboard / Report')
                            navigate('/dashboard/report')
                        }}
                    >
                        <FaChartBar className='chartIcon' />
                        <span className='text'>
                            Sales report
                        </span>
                    </button>
                </div>
                <button className='btnLogout'>
                    <FaSignOutAlt className='signoutIcon' />
                    <span className='text'>
                        Logout
                    </span>
                </button>
            </nav>
            <div className='dashboard-container' ref={_tabs}>
                <div className='navContainer' ref={nav_1}>
                    <div className='tabsContainer' ref={nav_2}>
                        <button className='tabsBtn'
                            onClick={() => {
                                setTabswitch(state => !state)
                            }}
                        >
                            <FaBars className='bars' />
                        </button>
                        <button className='DashboardBtn'
                            onClick={() => {
                                setComponent(<HomeDashboard targetSales={targetSales} setTargetSales={setTargetSales} />)
                                setNav('/ Dashboard')
                                navigate('/dashboard')
                            }}
                        >
                            Dashboard
                        </button>
                        <button className='SettingsBtn'>
                            Settings
                        </button>

                        <span className='time'>
                            {window.setInterval(() => {
                                moment().format('MMMM Do YYYY, h:mm:ss a')
                            }, 1000)}
                        </span>
                    </div>
                    <div className='tabsContainer_2' ref={nav_3}>
                        <span className='text'>
                            {nav}
                        </span>
                    </div>
                </div>
                <div className='renderComponentContainer' ref={rended_tag}>
                    {Component}
                </div>
            </div>
        </div>
    )
}

export default Dashboard;