import mongoose from 'mongoose';

const model_schema = mongoose.Schema({
    admin: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    total_profit: {
        type: String,
        require: true
    },
    sales_revenue: {
        type: String,
        require: true
    },
    total_product_sold: {
        type: String,
        require: true
    },
    products: [
        {
            _id: {
                type: mongoose.Schema.Types.ObjectId,
                index: true,
                required: true,
                auto: true,
            },
            brand_name: {
                type: String,
                require: true,
            },
            generic_name: {
                type: String,
                require: true,
            },
            category_description: {
                type: String,
                require: true,
            },
            selling_price: {
                type: String,
                require: true
            },
            original_price: {
                type: String,
                require: true
            },
            profit: {
                type: String,
                require: true
            },
            quantity: {
                type: String,
                require: true
            },
            supplier: {
                type: String,
                require: true
            },
            added_date: {
                type: String,
                require: true
            },
            expiration_date: {
                type: String,
                require: true
            }
        }
    ],
    supplier: [
        {
            _id: {
                type: mongoose.Schema.Types.ObjectId,
                index: true,
                required: true,
                auto: true,
            },
            supplier_name: {
                type: String,
                require: true
            },
            address: {
                type: String,
                require: true
            },
            contact_person: {
                type: String,
                require: true
            },
            contact_number: {
                type: String,
                require: true
            },
            note: {
                type: String,
                require: true
            }
        }
    ],
    activity: [
        {
            _id: {
                type: mongoose.Schema.Types.ObjectId,
                index: true,
                required: true,
                auto: true,
            },
            brand_name: {
                type: String,
                require: true
            },
            quantity: {
                type: String,
                require: true
            },
            total_amount: {
                type: String,
                require: true
            },
            date: {
                type: String,
                require: true
            }
        }
    ]
});


const OwnerModels = mongoose.model('OwnerModels', model_schema);

export default OwnerModels;