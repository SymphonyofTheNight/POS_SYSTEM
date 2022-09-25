import React from 'react';
import { useSelector } from 'react-redux';

const Supplier = ({ setOpen_Modal }) => {

    const get_suppliers = useSelector(state => state.reducer.store);

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
                        {get_suppliers[0] ? Object.keys(get_suppliers[0]?.supplier).map((key, value) => {
                            return (
                                <tbody key={get_suppliers[0]?.supplier.map(state => state._id)}>
                                    <tr>
                                        <th scope="row">{get_suppliers[0]?.supplier[key].supplier_name}</th>
                                        <td>{get_suppliers[0]?.supplier[key].contact_person}</td>
                                        <td>{get_suppliers[0]?.supplier[key].address}</td>
                                        <td>{get_suppliers[0]?.supplier[key].contact_number}</td>
                                        <td>{get_suppliers[0]?.supplier[key].note}</td>
                                        <td>
                                            <button>
                                                try
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            )
                        }) : null}
                        {/* <tbody>
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
                        </tbody> */}
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