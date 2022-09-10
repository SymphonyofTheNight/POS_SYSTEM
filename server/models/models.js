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
    ]
});


const OwnerModels = mongoose.model('OwnerModels', model_schema);

export default OwnerModels;