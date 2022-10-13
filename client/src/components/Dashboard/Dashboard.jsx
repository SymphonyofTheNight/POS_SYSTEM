import React from 'react';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect, useRef, useState } from 'react';
import { FaTimes, FaBars, FaTachometerAlt, FaShoppingCart, FaTable, FaUser, FaTruck, FaChartBar, FaSignOutAlt } from 'react-icons/fa';

// Dashboard Components
import HomeDashboard from './DashboardComponents/Home/HomeDashboard';
import Sales from './DashboardComponents/Sales/Sales';
import Products from './DashboardComponents/Products/Product';
import Customer from './DashboardComponents/Customer/Customer';
import Supplier from './DashboardComponents/Supplier/Supplier';
import SalesReport from './DashboardComponents/SalesReport/SalesReport';

// action thunk 
// import { add_supplier } from '../../controllers/actions.js';
import { add_supplier, edit_supplier, add_customer, edit_customer } from '../../api/api.js';

// brand img
import brand from '../../assets/img/brand.png';

import '../../scss/_Dashboard.scss';

const Dashboard = () => {

    const [open_modal_supplier, setOpen_Modal_Supplier] = useState(false);
    const [open_modal_customer, setOpen_Modal_Customer] = useState(false);
    const [check_if_edit, setCheck_If_Edit] = useState(false);
    // const [check_if_add, setCheck_If_Add] = useState(false);
    const [getId, setGetId] = useState(); // get id of product
    const [modaltitle, setModalTitle] = useState(''); // modal title 

    // const findSupplier = useSelector(state => getId ? state.reducer?.store?.map(val => val.supplier.find(sup => sup._id === getId)) : null);
    // const findCustomer = useSelector(state => getId ? state.reducer?.store?.map(val => val.customer.find(sup => sup._id === getId)) : null);

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

    // action call dispatch
    const dispatch = useDispatch();

    //hooks 
    const [Component, setComponent] = useState(<HomeDashboard targetSales={targetSales} setTargetSales={setTargetSales} />);
    const [tabswitch, setTabswitch] = useState(false);
    // const [time, setTime] = useState();
    const [nav, setNav] = useState('/ Dashboard');

    // localstorage 
    const [Localstorage] = useState(JSON.parse(localStorage.getItem('Administrator')));

    //supplier
    const [supplier, setSupplier] = useState({
        _id: Localstorage?.result?._id,
        token: Localstorage?.token,
        supplier_name: '',
        address: '',
        contact_person: '',
        contact_number: '',
        note: ''
    });

    const [customer, setCustomer] = useState({
        _id: Localstorage?.result?._id,
        token: Localstorage?.token,
        fullname: '',
        address: '',
        contact_number: '',
        product_name: '',
        total: '',
        note: '',
        due_date: ''
    })

    // redux storage
    // const redux_storage = useSelector(state => state.reducer.store);

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

    const add_supplier_onHandleSubmit = (e) => {

        e.preventDefault();

        console.log(supplier)

        if (supplier._id && supplier.token && supplier.supplier_name && supplier.address && supplier.contact_number && supplier.contact_person && supplier.note) {
            add_supplier(supplier);
            dispatch({ type: 'ADD_SUPPLIER', payload: supplier });
            setOpen_Modal_Supplier(state => !state)

            navigate(0);

        }

    }

    const edit_supplier_onHandleSubmit = (e) => {
        e.preventDefault();

        if (supplier._id && supplier.token && supplier.supplier_name && supplier.address && supplier.contact_number && supplier.contact_person && supplier.note) {
            edit_supplier(supplier);
            setOpen_Modal_Supplier(state => !state)

            window.location.reload();
        }

    }

    const add_customer_onHandleSubmit = (e) => {
        e.preventDefault();

        if (customer) {

            console.log(customer)

            add_customer(customer);

            setOpen_Modal_Customer(state => !state)

            navigate(0);
        }

    }

    const edit_customer_onHandleSubmit = (e) => {
        e.preventDefault();

        if (customer) {

            edit_customer(customer);

            setOpen_Modal_Customer(state => !state)

            window.location.reload();

        }

    }

    return (
        <div className='Dashboard'>
            <nav className='nav-tab' ref={nav_tab}>
                <div className='titleContainer'>
                    <img src={brand} className='brand' alt='brand logo' />
                </div>
                <div className='navigation'>
                    <button className='category'
                        onClick={() => {
                            setComponent(<HomeDashboard
                                targetSales={targetSales}
                                setTargetSales={setTargetSales}
                            />)
                            setNav('/Dashboard')
                            navigate('/Dashboard')
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
                            setNav('/Sales')
                            navigate('/Sales')
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
                            setNav('/Products')
                            navigate('/Products')
                        }}
                    >
                        <FaTable className='tableIcon' />
                        <span className='text'>
                            Products
                        </span>
                    </button>
                    <button className='btn-1'
                        onClick={() => {
                            setComponent(<Customer
                                setOpen_Modal_Customer={setOpen_Modal_Customer}
                                setCheck_If_Edit={setCheck_If_Edit}
                                setGetId={setGetId}
                                setModalTitle={setModalTitle}
                                setCustomer={setCustomer}
                                customer={customer}
                            />)
                            setNav('/Customer')
                            navigate('/Customer')
                        }}
                    >
                        <FaUser className='personIcon' />
                        <span className='text'>
                            Customer
                        </span>
                    </button>
                    <button className='btn-1'
                        onClick={() => {
                            setComponent(<Supplier
                                setOpen_Modal_Supplier={setOpen_Modal_Supplier}
                                setCheck_If_Edit={setCheck_If_Edit}
                                setModalTitle={setModalTitle}
                                setSupplier={setSupplier}
                                supplier={supplier}
                                getId={getId}
                            />)
                            setNav('/Supplier')
                            navigate('/Supplier')
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
                            setNav('/Report')
                            navigate('/Report')
                        }}
                    >
                        <FaChartBar className='chartIcon' />
                        <span className='text'>
                            Sales report
                        </span>
                    </button>
                </div>
                <button className='btnLogout'
                    onClick={() => {
                        localStorage.clear();
                        navigate('/');
                    }}
                >
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
                                setNav('/Dashboard')
                                navigate('/Dashboard')
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

            {open_modal_supplier ? (
                <div className='modal-supplies'>
                    <form onSubmit={check_if_edit ? edit_supplier_onHandleSubmit : add_supplier_onHandleSubmit}>
                        <div className='modal-container'>
                            <div className='titleContainer'>
                                <span className='text'>
                                    {modaltitle}
                                </span>
                            </div>
                            <div className='form-input-container'>
                                <div className='supplier-name-container'>
                                    <span className='text'>Supplier name: </span>
                                    <input className='supplier-name--form'
                                        value={check_if_edit ? supplier.supplier_name : supplier.supplier_name}
                                        type='text'
                                        placeholder='supplier name'
                                        onChange={(e) => {
                                            setSupplier({ ...supplier, supplier_name: e.target.value })
                                        }} />
                                </div>
                                <div className='address-container'>
                                    <span className='text'>Address: </span>
                                    <input className='address-form'
                                        value={check_if_edit ? supplier.address : supplier.address}
                                        type='text'
                                        placeholder='address'
                                        onChange={(e) => {
                                            setSupplier({ ...supplier, address: e.target.value })
                                        }} />
                                </div>
                                <div className='contact-person-container'>
                                    <span className='text'>Contact person: </span>
                                    <input className='contact-person-form'
                                        value={check_if_edit ? supplier.contact_person : supplier.contact_person}
                                        type='text'
                                        placeholder='contact person'
                                        onChange={(e) => {
                                            setSupplier({ ...supplier, contact_person: e.target.value })
                                        }} />
                                </div>
                                <div className='contact-number-container'>
                                    <span className='text'>Contact number: </span>
                                    <input className='contact-number-form'
                                        value={check_if_edit ? supplier.contact_number : supplier.contact_number}
                                        type='text'
                                        placeholder='contact number'
                                        onChange={(e) => {
                                            setSupplier({ ...supplier, contact_number: e.target.value })
                                        }} />
                                </div>
                                <div className='note-container'>
                                    <span className='text'>Note: </span>
                                    <textarea className='note-form'
                                        value={check_if_edit ? supplier.note : supplier.note}
                                        type='text'
                                        placeholder='note'
                                        onChange={(e) => {
                                            setSupplier({ ...supplier, note: e.target.value })
                                        }} />
                                </div>
                                <div className='btnContainerSubmit'>
                                    <button className='btnAddSubmit'>
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>

                    <button className='btnClose' onClick={() => {
                        setOpen_Modal_Supplier(state => !state)
                        setCheck_If_Edit(false)
                    }}>
                        <FaTimes className='icon' />
                    </button>

                </div>
            ) : (
                <>
                </>
            )}

            {open_modal_customer ? (
                <div className='modal-customer'>
                    <form onSubmit={check_if_edit ? edit_customer_onHandleSubmit : add_customer_onHandleSubmit}>
                        <div className='modal-container'>
                            <div className='titleContainer'>
                                <span className='text'>
                                    {modaltitle}
                                </span>
                            </div>
                            <div className='form-input-container'>
                                <div className='customer-name-container'>
                                    <span className='text'>Customer name: </span>
                                    <input className='customer-name--form'
                                        value={check_if_edit ? customer.fullname : customer.fullname}
                                        type='text'
                                        placeholder='customer name'
                                        onChange={(e) => {
                                            setCustomer({ ...customer, fullname: e.target.value })
                                        }} />
                                </div>
                                <div className='address-container'>
                                    <span className='text'>Address: </span>
                                    <input className='address-form'
                                        value={check_if_edit ? customer.address : customer.address}
                                        type='text'
                                        placeholder='address'
                                        onChange={(e) => {
                                            setCustomer({ ...customer, address: e.target.value })
                                        }} />
                                </div>
                                <div className='contact-number-container'>
                                    <span className='text'>Contact number: </span>
                                    <input className='contact-number-form'
                                        value={check_if_edit ? customer.contact_number : customer.contact_number}
                                        type='text'
                                        placeholder='contact number'
                                        onChange={(e) => {
                                            setCustomer({ ...customer, contact_number: e.target.value })
                                        }} />
                                </div>
                                <div className='product-name-container'>
                                    <span className='text'>Product name: </span>
                                    <input className='product-name-form'
                                        value={check_if_edit ? customer.product_name : customer.product_name}
                                        type='text'
                                        placeholder='product name'
                                        onChange={(e) => {
                                            setCustomer({ ...customer, product_name: e.target.value })
                                        }} />
                                </div>
                                <div className='total-container'>
                                    <span className='text'>total: </span>
                                    <input className='total-form'
                                        value={check_if_edit ? customer.total : customer.total}
                                        type='text'
                                        placeholder='total'
                                        onChange={(e) => {
                                            setCustomer({ ...customer, total: e.target.value })
                                        }} />
                                </div>
                                <div className='note-container'>
                                    <span className='text'>Note: </span>
                                    <textarea className='note-form'
                                        value={check_if_edit ? customer.note : customer.note}
                                        type='text'
                                        placeholder='note'
                                        onChange={(e) => {
                                            setCustomer({ ...customer, note: e.target.value })
                                        }} />
                                </div>
                                <div className='due_date-container'>
                                    <span className='text'>Due date: </span>
                                    <input className='due_date-form'
                                        value={check_if_edit ? customer.due_date : customer.due_date}
                                        type='text'
                                        placeholder='Due date'
                                        onChange={(e) => {
                                            setCustomer({ ...customer, due_date: e.target.value })
                                        }} />
                                </div>
                                <div className='btnContainerSubmit'>
                                    <button className='btnAddSubmit'
                                        type='submit'
                                    >
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>

                    <button className='btnClose' onClick={() => {
                        setOpen_Modal_Customer(state => !state)
                        setCheck_If_Edit(false)
                    }}>
                        <FaTimes className='icon' />
                    </button>
                </div>
            ) : (
                <>
                </>
            )}



        </div>
    )
}

export default Dashboard;