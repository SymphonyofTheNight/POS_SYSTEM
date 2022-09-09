import React from 'react';

import { useState } from 'react';

//scss / css
import '../../scss/_Login.scss';

const Login = () => {

    //hooks 
    const [account, setAccount] = useState({
        username: '', password: ''
    })

    const [showpass, setShowpass] = useState(false);

    return (
        <div className='Login'>
            <div className='LoginFormContainer'>
                <div className='TitleContainer'>
                    <span className='text'>
                        Admin
                    </span>
                </div>
                <div className='FormContainer'>
                    <div className='usernameFormContainer'>
                        <span className='text'>USERNAME</span>
                        <input className='userInput' onChange={(e) => {
                            setAccount({ ...account, username: e.target.value })
                        }}
                            type='text'
                        />
                    </div>
                    <div className='passwordFormContainer'>
                        <span className='text'>PASSWORD</span>
                        <input className='userInput' onChange={(e) => {
                            setAccount({ ...account, username: e.target.value })
                        }}
                            type={showpass ? 'text' : 'password'}
                        />
                    </div>
                </div>
                <div className='BtnContainer'>
                    <div className='checkboxContainer'>
                        <input className='checkbox' type='checkbox' onChange={() => setShowpass(state => !state)} />
                        <span className='text'>
                            &nbsp; Show password
                        </span>
                    </div>
                    <div className='submitBtnContainer'>
                        <button className='btnSubmit'>
                            login
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;