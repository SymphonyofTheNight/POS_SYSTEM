import React from 'react';
import { useSelector } from 'react-redux';


const AdminSettings = ({
    setOpen_Modal_Admin_Setting,
    setOpen_Modal_Admin_Setting_2,
    changeuser,
    setChangeuser,
    setCheck_If_Edit
}) => {

    const admin_info = useSelector(state => state.reducer.store);

    return (
        <div className='AdminSettings-Container'>
            
            <div className='innerContainer-1'>
                <div className='page-title-container'>
                    <span className='text'>
                        Settings
                    </span>
                </div>
                <div className='edit-form-container'>
                    <div className='username-form'>
                        <span className='text-label'>
                            Username
                        </span>
                        <input
                            className='input-form'
                            type='text'
                            value={admin_info[0].admin}
                            onChange={(e) => {
                                setChangeuser({ ...changeuser, username: e.target.value })
                            }}
                        />
                    </div>
                    <div className='password-form'>
                        <span className='text-label'>
                            Password
                        </span>
                        <input
                            className='input-form'
                            type='password'
                            value={admin_info[0].password}
                            onChange={(e) => {
                                setChangeuser({ ...changeuser, password: e.target.value })
                            }}
                        />
                        <button className='btnEdit'
                            onClick={() => {
                                setOpen_Modal_Admin_Setting(state => !state)
                                setCheck_If_Edit(state => !state)
                            }}
                        >
                            Edit
                        </button>
                    </div>
                </div>
            </div>

            <div className='innerContainer-2'>
                <div className='page-title-container'>
                    <span className='text'>
                        Admin Info
                    </span>
                </div>
                <div className='form-container'>
                    <div className='store-name-text-container'>
                        <span className='label'>
                            Store:
                        </span>
                        <span className='text'>
                            {admin_info[0].store_name}
                        </span>
                    </div>
                    <div className='address-name-text-container'>
                        <span className='label'>
                            Address:
                        </span>
                        <span className='text'>
                            {admin_info[0].address}
                        </span>
                    </div>
                    <div className='contact-name-text-container'>
                        <span className='label'>
                            Contact_number:
                        </span>
                        <span className='text'>
                            0{admin_info[0].contact_number}
                        </span>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AdminSettings;