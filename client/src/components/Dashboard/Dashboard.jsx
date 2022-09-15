import React from 'react';
import { useEffect, useRef, useState } from 'react';
import { FaBars, FaTachometerAlt, FaShoppingCart, FaTable, FaUser, FaTruck, FaChartBar, FaSignOutAlt } from 'react-icons/fa';

// brand img
import brand from '../../assets/img/brand.png';

import '../../scss/_Dashboard.scss';

const Dashboard = () => {

    //hooks 
    const [tabswitch, setTabswitch] = useState(false);

    const _tabs = useRef(null);
    const nav_1 = useRef(null);
    const nav_2 = useRef(null);
    const nav_3 = useRef(null);

    const nav_tab = useRef(null);

    //side effect
    useEffect(() => {
        if (tabswitch) {
            _tabs.current.style.width = '100vw';
            nav_1.current.style.width = '100vw';
            nav_2.current.style.width = '100vw';
            nav_3.current.style.width = '100vw';

            nav_tab.current.style.transform = 'translateX(-13vw)';

        } else {
            _tabs.current.style.width = '87vw';
            nav_1.current.style.width = '87vw';
            nav_2.current.style.width = '87vw';
            nav_3.current.style.width = '87vw';

            nav_tab.current.style.transform = 'translateX(0vw)';

        }
    }, [tabswitch])

    return (
        <div className='Dashboard'>
            <nav className='nav-tab' ref={nav_tab}>
                <div className='titleContainer'>
                    <img src={brand} className='brand' alt='brand logo' />
                </div>
                <div className='navigation'>
                    <div className='category'>
                        <FaTachometerAlt className='meter' />
                        <span className='text'>
                            Dashboard
                        </span>
                    </div>
                    <button className='btn-1' style={{
                        marginTop: '1.5vh'
                    }}>
                        <FaShoppingCart className='cartIcon' />
                        <span className='text'>
                            Sales
                        </span>
                    </button>
                    <button className='btn-1'>
                        <FaTable className='tableIcon' />
                        <span className='text'>
                            Products
                        </span>
                    </button>
                    <button className='btn-1'>
                        <FaUser className='personIcon' />
                        <span className='text'>
                            Customer
                        </span>
                    </button>
                    <button className='btn-1'>
                        <FaTruck className='truckIcon' />
                        <span className='text'>
                            Supplier
                        </span>
                    </button>
                    <button className='btn-1'>
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
                    </div>
                    <div className='tabsContainer_2' ref={nav_3}>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;