import React from 'react'

const AdminSettings = () => {
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
                    </div>
                    <div className='password-form'>
                        <span className='text-label'>
                            Password
                        </span>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminSettings;