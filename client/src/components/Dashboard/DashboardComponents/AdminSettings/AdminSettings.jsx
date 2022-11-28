import React from 'react';
import { useSelector } from 'react-redux';


const AdminSettings = ({ setOpen_Modal_Admin_Setting, setOpen_Modal_Admin_Setting_2 }) => {

    const admin_info = useSelector(state => state.reducer.store);

    console.log(admin_info[0].admin)

    return (
        <div className='AdminSettings-Container'>
            <div className='innerContainer'>
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
                        <input className='input-form' type='text' value={admin_info[0].admin} />
                        <button className='btnEdit'
                            onClick={() => {
                                setOpen_Modal_Admin_Setting(state => !state)
                            }}
                        >
                            Edit
                        </button>
                    </div>
                    <div className='password-form'>
                        <span className='text-label'>
                            Password
                        </span>
                        <input className='input-form' type='password' value={admin_info[0].password} />
                        <button className='btnEdit'
                            onClick={() => {
                                setOpen_Modal_Admin_Setting_2(state => !state)
                            }}
                        >
                            Edit
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminSettings;