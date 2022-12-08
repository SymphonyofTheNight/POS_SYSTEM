import mongoose from 'mongoose';

// schema
import OwnerModels from '../models/models.js';

export const get_db = async (req, res) => {
    try {
        const database = await OwnerModels.find({});
        res.status(200).json(database);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
}

/// supplier controllers

export const add_supplier = async (req, res) => {

    const { id } = req.params;

    console.log(req.body);

    try {
        if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json({ message: 'invalid ID' });

        await OwnerModels.findByIdAndUpdate(id, {
            $push: {
                supplier:
                {
                    identifier: req.body.supplier[0].identifier,
                    supplier_name: req.body.supplier[0].supplier_name,
                    address: req.body.supplier[0].address,
                    contact_person: req.body.supplier[0].contact_person,
                    contact_number: req.body.supplier[0].contact_number,
                    note: req.body.supplier[0].note
                }
            }
        }, {
            new: true
        });

    } catch (error) {
        res.status(404).json(error);
    }

}

export const edit_supplier = async (req, res) => {

    const { id } = req.params;

    try {

        if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json({ message: 'Invalid ID' });

        const re_submit_supplier = await OwnerModels.findByIdAndUpdate(id, {
            $set: {
                "supplier.$[i].identifier": req.body.supplier[0].identifier,
                "supplier.$[i].supplier_name": req.body.supplier[0].supplier_name,
                "supplier.$[i].address": req.body.supplier[0].address,
                "supplier.$[i].contact_person": req.body.supplier[0].contact_person,
                "supplier.$[i].contact_number": req.body.supplier[0].contact_number,
                "supplier.$[i].note": req.body.supplier[0].note
            }
        }, {
            arrayFilters: [
                {
                    "i.identifier": req.body.supplier[0].identifier,
                }
            ],
            returnDocument: 'after',
            safe: true
        }, (error, response) => {
            if (error) return console.log(error);
            console.log(response);
        });

        res.json(re_submit_supplier);

    } catch (error) {
        res.status(404).json(error);
    }

}

export const delete_supplier = async (req, res) => {

    const { id } = req.params;

    console.log(req.body);

    try {
        if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json({ message: 'Invalid ID' });

        await OwnerModels.findByIdAndUpdate(id, {
            $pull: {
                supplier: {
                    _id: req.body.supplier[0]._id
                }
            }
        }, {
            new: true
        });

    } catch (error) {
        res.status(404).json(error);
    }
}

// customer controllers

export const add_customer = async (req, res) => {

    const { id } = req.params;

    console.log(req.body);

    try {
        if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json({ message: 'invalid ID' });

        await OwnerModels.findByIdAndUpdate(id, {
            $push: {
                customer: {
                    identifier: req.body.customer[0].identifier,
                    fullname: req.body.customer[0].fullname,
                    address: req.body.customer[0].address,
                    contact_number: req.body.customer[0].contact_number,
                    product_name: req.body.customer[0].product_name,
                    total: req.body.customer[0].total,
                    note: req.body.customer[0].note,
                    due_date: req.body.customer[0].due_date
                }
            }
        }, {
            new: true
        })

    } catch (error) {
        res.status(404).json(error);
    }
}

export const edit_customer = async (req, res) => {

    const { id } = req.params;

    console.log(req.body);

    try {

        if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json({ message: 'Invalid ID' });

        await OwnerModels.findByIdAndUpdate(id, {

            $inc: {
                "customer.$[i].points": req.body.customer[0].points,
            },

            $set: {
                "customer.$[i].identifier": req.body.customer[0].identifier,
                "customer.$[i].fullname": req.body.customer[0].fullname,
                "customer.$[i].address": req.body.customer[0].address,
                "customer.$[i].contact_number": req.body.customer[0].contact_number,
                "customer.$[i].product_name": req.body.customer[0].product_name,
                "customer.$[i].total": req.body.customer[0].total,
                "customer.$[i].note": req.body.customer[0].note,
                "customer.$[i].due_date": req.body.customer[0].due_date,
            },

        }, {
            arrayFilters: [
                {
                    "i.identifier": req.body.customer[0].identifier
                }
            ],
            returnDocument: 'after',
            safe: true
        });

    } catch (error) {
        res.status(404).json(error);
    }
}

export const delete_customer = async (req, res) => {

    const { id } = req.params;

    console.log(req.body);

    try {
        if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json({ message: 'Invalid ID' });

        await OwnerModels.findByIdAndUpdate(id, {
            $pull: {
                customer: {
                    _id: req.body.customer[0]._id
                }
            }
        }, {
            new: true
        });

    } catch (error) {
        res.status(404).json(error);
    }

}

// product controllers

export const add_products = async (req, res) => {

    const { id } = req.params;

    console.log(req.body);

    try {
        if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json({ message: 'Invalid ID' });

        await OwnerModels.findByIdAndUpdate(id, {
            $push: {
                products: {
                    identifier: req.body.products[0].identifier,
                    brand_name: req.body.products[0].brand_name,
                    variant: req.body.products[0].variant,
                    category_description: req.body.products[0].category_description,
                    selling_price: req.body.products[0].selling_price,
                    original_price: req.body.products[0].original_price,
                    quantity: req.body.products[0].quantity,
                    supplier: req.body.products[0].supplier,
                    added_date: req.body.products[0].added_date,
                    expiration_date: req.body.products[0].expiration_date,
                }
            },
        }, { new: true });

    } catch (error) {
        res.status(404).json(error);
    }
}

export const edit_product = async (req, res) => {

    const { id } = req.params;

    console.log(req.body);

    try {
        if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json({ message: 'Invalid ID' });

        await OwnerModels.findByIdAndUpdate(id, {
            $set: {
                "products.$[i].identifier": req.body.products[0].identifier,
                "products.$[i].brand_name": req.body.products[0].brand_name,
                "products.$[i].variant": req.body.products[0].variant,
                "products.$[i].category_description": req.body.products[0].category_description,
                "products.$[i].selling_price": req.body.products[0].selling_price,
                "products.$[i].original_price": req.body.products[0].original_price,
                "products.$[i].quantity": req.body.products[0].quantity,
                "products.$[i].supplier": req.body.products[0].supplier,
                "products.$[i].added_date": req.body.products[0].added_date,
                "products.$[i].expiration_date": req.body.products[0].expiration_date,
            }
        }, {
            arrayFilters: [
                {
                    "i.identifier": req.body.products[0].identifier
                }
            ],
            returnDocument: 'after',
            safe: true
        })
    } catch (error) {
        res.status(404).json(error);
    }
}

export const delete_product = async (req, res) => {

    const { id } = req.params;

    console.log(req.body);

    try {
        if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json({ message: 'Invalid ID' });

        await OwnerModels.findByIdAndUpdate(id, {
            $pull: {
                products: {
                    _id: req.body.products[0]._id
                }
            }
        }, {
            new: true
        })

    } catch (error) {
        res.status(404).json(error);
    }
}

// sales controlers

export const add_sales = async (req, res) => {

    const { id } = req.params;

    const prod_id = req.body.sales[0].identifier

    console.log(req.body)

    try {
        if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json({ message: 'Invalid ID' });

        await OwnerModels.findOneAndUpdate({ '_id': id, "products._id": prod_id }, {

            $push: {
                sales: {
                    identifier: req.body.sales[0].identifier,
                    product_name: req.body.sales[0].product_name,
                    generic_name: req.body.sales[0].generic_name,
                    description: req.body.sales[0].description,
                    qty: req.body.sales[0].qty,
                    amount: req.body.sales[0].amount,
                    profit: req.body.sales[0].profit
                }
            },

            $inc: {
                "products.$.quantity": - req.body.sales[0].qty,
            }

        },
            {
                new: true
            })

    } catch (error) {
        res.status(404).json(error);
    }
}

export const delete_sales = async (req, res) => {

    const { id } = req.params;

    const prod_id = req.body.sales[0].identifier;

    console.log(prod_id)
    console.log(req.body.sales[0].qty)

    try {
        await OwnerModels.findOneAndUpdate({ '_id': id, "products._id": prod_id }, {

            $inc: {
                "products.$.quantity": req.body.sales[0].qty
            },

            $pull: {
                sales: {
                    _id: req.body.sales[0]._id,
                    identifier: req.body.sales[0].identifier,
                    qty: req.body.sales[0].qty
                }
            }

        }, {
            new: true
        }).exec()
    } catch (error) {
        res.status(404).json(error);
    }
}

// sales report

export const report_of_sales = async (req, res) => {

    const { id } = req.params;

    // const target_month = req.body.months;

    console.log(req.body);

    try {
        if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json({ message: 'Invalid ID' });

        let i;

        const months_string = [
            "january",
            "february",
            "march",
            "april",
            "may",
            "june",
            "july",
            "august",
            "september",
            "october",
            "november",
            "december"
        ]

        for (i = 0; i < req.body.sales_report.length; i++) {

            const _month = new Date().getMonth();

            var db_month = months_string[_month];

            await OwnerModels.findByIdAndUpdate(id,
                {

                    $inc: {
                        total_product_sold: req.body.sales_report[i].qty,
                        sales_revenue: req.body.sales_report[i].amount,
                        total_profit: req.body.sales_report[i].profit * req.body.sales_report[i].qty,
                        [db_month]: req.body.sales_report[i].amount * req.body.sales_report[i].qty
                        // [db_month]: {
                        //     sales: req.body.sales_report[i].amount * req.body.sales_report[i].qty
                        // }
                    },

                    // $set: {
                    //     "months.$[s].month_digit": req.body.months[i].month_digit,
                    //     "months.$[s].targetsales": req.body.months[i].targetsales,
                    //     "months.$[s].sales": req.body.months[i].sales,
                    // },

                    $addToSet: {
                        sales_report: {
                            $each: [
                                {
                                    identifier: req.body.sales_report[i].identifier,
                                    product_name: req.body.sales_report[i].product_name,
                                    generic_name: req.body.sales_report[i].generic_name,
                                    description: req.body.sales_report[i].description,
                                    qty: req.body.sales_report[i].qty,
                                    amount: req.body.sales_report[i].amount,
                                    profit: req.body.sales_report[i].profit
                                }
                            ]
                        }
                    }

                },
                // {
                //     arrayFilters: [
                //         {
                //             "s.month_digit": req.body.months[i].month_digit
                //         }
                //     ],
                //     returnDocument: 'after',
                //     safe: true,
                // }, 
                { new: true, upsert: true })
        }
    } catch (error) {
        res.status(404).json(error);
    }
}

export const empty_sales = async (req, res) => {

    const { id } = req.params;

    console.log(req.body)

    try {
        if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json({ message: 'Invalid ID' });

        await OwnerModels.findByIdAndUpdate(id, {
            $set: {
                sales: []
            }
        }
            , { new: true })

    } catch (error) {
        res.status(404).json(error)
    }
}



