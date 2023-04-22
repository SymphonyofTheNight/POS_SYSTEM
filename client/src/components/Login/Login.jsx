import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import bcrypt from 'bcryptjs';

// actions
import { _login } from '../../controllers/actions.js';

//scss / css
import '../../scss/_Login.scss';

const Login = () => {

    const _check_user = useSelector(state => state.reducer.store)

    //to navigate on routes
    const navigate = useNavigate();

    // call action
    const dispatch = useDispatch();

    //hooks 
    const [account, setAccount] = useState({
        username: '', password: ''
    })

    const [showpass, setShowpass] = useState(false);

    const SubmitHandler = async (e) => {
        e.preventDefault();

        if (account.username && account.password) {

            const _bcrypt_pass = await bcrypt.compareSync(account.password, _check_user[0]?.password);

            console.log(_bcrypt_pass);

            if (_bcrypt_pass && account.username === _check_user[0]?.admin) {
                dispatch(_login(account.username, account.password))
                navigate('/dashboard')
            } else {
                alert('wrong password or username.')
            }

        } else {

            alert('invalid user')

        }
    }

    return (
        <div className='Login'>
            <div className='LoginFormContainer'>
                <form onSubmit={SubmitHandler}>
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
                                setAccount({ ...account, password: e.target.value })
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
                            <button className='btnSubmit'
                                type='submit'
                            >
                                login
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;