import React from 'react';
import { useEffect, useRef, useState } from 'react';
import { FaBars } from 'react-icons/fa';

import '../../scss/_Dashboard.scss';

const Dashboard = () => {

    //hooks 
    const [tabswitch, setTabswitch] = useState(false);

    const _tabs = useRef(null);
    const nav_1 = useRef(null);
    const nav_2 = useRef(null);
    const nav_3 = useRef(null);

    //side effect
    useEffect(() => {
        if (tabswitch) {
            _tabs.current.style.width = '100vw';
            nav_1.current.style.width = '100vw';
            nav_2.current.style.width = '100vw';
            nav_3.current.style.width = '100vw';
        } else {
            _tabs.current.style.width = '87vw';
            nav_1.current.style.width = '87vw';
            nav_2.current.style.width = '87vw';
            nav_3.current.style.width = '87vw';

        }
    }, [tabswitch])

    return (
        <div className='Dashboard'>
            <nav className='nav-tab'>
                <div className='titleContainer'>

                </div>
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