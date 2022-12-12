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
    store_name: {
        type: String,
        require: true
    },
    address: {
        type: String,
        require: true
    },
    contact_number: {
        type: Number,
        require: true
    },
    total_profit: {
        type: Number,
        require: true,
        default: 0,
        min: 0,
        max: 99999999,
    },
    sales_revenue: {
        type: Number,
        require: true,
        default: 0,
        min: 0,
        max: 99999999,
    },
    total_product_sold: {
        type: Number,
        require: true,
        default: 0,
        min: 0,
        max: 99999999,
    },
    total_clients: {
        type: Number,
        require: true,
        default: 0,
        min: 0,
        max: 99999999,
    },
    january: {
        type: Number,
        require: true,
        default: 0
    },
    february: {
        type: Number,
        require: true,
        default: 0
    },
    march: {
        type: Number,
        require: true,
        default: 0
    },
    april: {
        type: Number,
        require: true,
        default: 0
    },
    may: {
        type: Number,
        require: true,
        default: 0
    },
    june: {
        type: Number,
        require: true,
        default: 0
    },
    july: {
        type: Number,
        require: true,
        default: 0
    },
    august: {
        type: Number,
        require: true,
        default: 0
    },
    september: {
        type: Number,
        require: true,
        default: 0
    },
    october: {
        type: Number,
        require: true,
        default: 0
    },
    november: {
        type: Number,
        require: true,
        default: 0
    },
    december: {
        type: Number,
        require: true,
        default: 0
    },
    sales: [
        {
            _id: {
                type: mongoose.Schema.Types.ObjectId,
                index: true,
                required: true,
                auto: true,
            },
            identifier: {
                type: String,
                require: true
            },
            product_name: {
                type: String,
                require: true,
            },
            variation: {
                type: String,
                require: true,
            },
            description: {
                type: String,
                require: true,
            },
            qty: {
                type: Number,
                require: true,
            },
            amount: {
                type: Number,
                require: true,
            },
            profit: {
                type: Number,
                require: true,
            }
        }
    ],
    products: [
        {
            _id: {
                type: mongoose.Schema.Types.ObjectId,
                index: true,
                required: true,
                auto: true,
            },
            identifier: {
                type: String,
                require: true
            },
            brand_name: {
                type: String,
                require: true,
            },
            variant: {
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
            quantity: {
                type: Number,
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
    customer: [
        {
            _id: {
                type: mongoose.Schema.Types.ObjectId,
                index: true,
                required: true,
                auto: true,
            },
            identifier: {
                type: String,
                require: true
            },
            fullname: {
                type: String,
                require: true
            },
            address: {
                type: String,
                require: true
            },
            contact_number: {
                type: String,
                require: true
            },
            product_name: {
                type: String,
                require: true
            },
            total: {
                type: Number,
                require: true
            },
            note: {
                type: String,
                require: true
            },
            due_date: {
                type: String,
                require: true
            },
            points: {
                type: Number,
                require: true,
                default: 0
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
            identifier: {
                type: String,
                require: true
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
    sales_report: [
        {
            _id: {
                type: mongoose.Schema.Types.ObjectId,
                index: true,
                required: true,
                auto: true,
            },
            identifier: {
                type: String,
                require: true
            },
            product_name: {
                type: String,
                require: true,
            },
            variation: {
                type: String,
                require: true,
            },
            description: {
                type: String,
                require: true,
            },
            qty: {
                type: Number,
                require: true,
            },
            amount: {
                type: Number,
                require: true,
            },
            profit: {
                type: Number,
                require: true,
            },
            time_stamp: {
                type: String,
                require: true,
            }
        }
    ]
});


const OwnerModels = mongoose.model('OwnerModels', model_schema);

export default OwnerModels;