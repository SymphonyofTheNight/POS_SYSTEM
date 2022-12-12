import React from 'react';
import { useSelector } from 'react-redux';

const Inventory = () => {

    const get_products = useSelector(state => state.reducer.store);

    return (
        <div className='Inventory'>
            <div className='innerContainer'>
                <div className='page-title-container'>
                    <span className='text'>
                        Inventory
                    </span>
                </div>
                <div className='table-container'>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Brand_Name</th>
                                <th scope="col">Variant</th>
                                <th scope="col">Category/Description</th>
                                <th scope="col">Supplier</th>
                                <th scope="col">Receive_Date</th>
                                <th scope="col">Expiry_Date</th>
                                <th scope="col">Original_Price</th>
                                <th scope="col">Selling_Price</th>
                                <th scope="col">Qty</th>
                            </tr>
                        </thead>
                        {get_products[0] ? Object.keys(get_products[0]?.products).map((key, value) => {
                            return (
                                <tbody key={get_products[0]?.products[key]._id}>
                                    <tr>
                                        <th scope="row">{get_products[0]?.products[key].brand_name}</th>
                                        <td>{get_products[0]?.products[key].variant}</td>
                                        <td>{get_products[0]?.products[key].category_description}</td>
                                        <td>{get_products[0]?.products[key].supplier}</td>
                                        <td>{get_products[0]?.products[key].added_date}</td>
                                        <td>{get_products[0]?.products[key].expiration_date}</td>
                                        <td>{get_products[0]?.products[key].original_price}</td>
                                        <td>{get_products[0]?.products[key].selling_price}</td>
                                        <td>{get_products[0]?.products[key].quantity}</td>
                                        <td>
                                            <div className='btnContainer'
                                                style={{
                                                    display: 'flex'
                                                }}
                                            >
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            )
                        }) : null}
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Inventory;