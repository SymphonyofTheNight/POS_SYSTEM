import React from 'react';
import { useState } from 'react';

const Supplier = ({ setOpen_Modal }) => {

    const HandleAdd_Supplier = (e) => {
        e.preventDefault();


    }

    return (
        <div className='Supplier'>
            <div className='innerContainer'>
                <div className='page-title-container'>
                    <span className='text'>
                        Supplier
                    </span>
                </div>
                <div className='select-container'>
                    <select className="form-select" aria-label="Default select example">
                        <option defaultValue='Open this select menu'>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                    <button className='addBtn'
                        onClick={() => {
                            return setOpen_Modal(state => !state)
                        }}
                    >
                        Add
                    </button>
                </div>
                <div className='table-container'>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Supplier</th>
                                <th scope="col">Contact_Person</th>
                                <th scope="col">Address</th>
                                <th scope="col">Contact_Number</th>
                                <th scope="col">Note</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Larry</td>
                                <td>the Bird</td>
                                <td>@twitter</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className='btn-submit-container'>
                    <button className='btnSubmit'>
                        Submit
                    </button>
                </div>
            </div>

        </div>
    )
}

export default Supplier;