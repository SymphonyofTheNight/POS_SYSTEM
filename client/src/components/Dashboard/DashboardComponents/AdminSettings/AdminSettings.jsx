import React from 'react';
import { useState, useEffect } from 'react';

const AdminSettings = ({ setOpen_Modal_Admin_Setting, setOpen_Modal_Admin_Setting_2 }) => {

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
                        <input className='input-form' />
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
                        <input className='input-form' />
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