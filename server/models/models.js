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
        type: Number,
        default: true,
        min: 0,
        max: 99999999,
    },
    sales_revenue: {
        type: Number,
        default: true,
        min: 0,
        max: 99999999,
    },
    total_product_sold: {
        type: Number,
        default: true,
        min: 0,
        max: 99999999,
    },
    total_clients: {
        type: Number,
        default: true,
        min: 0,
        max: 99999999,
    },
    months:
    {
        0: {
            _id: {
                type: mongoose.Schema.Types.ObjectId,
                index: true,
                required: true,
                auto: true,
            },
            month_digit: {
                type: Number,
                require: true,
                default: 0
            },
            targetsales: {
                type: Number,
                require: true,
                default: 0
            },
            sales: {
                type: Number,
                require: true,
                default: 0
            },
        },
        1: {
            _id: {
                type: mongoose.Schema.Types.ObjectId,
                index: true,
                required: true,
                auto: true,
            },
            month_digit: {
                type: Number,
                require: true,
                default: 1
            },
            targetsales: {
                type: Number,
                require: true,
                default: 0
            },
            sales: {
                type: Number,
                require: true,
                default: 0
            },
        },
        2: {
            _id: {
                type: mongoose.Schema.Types.ObjectId,
                index: true,
                required: true,
                auto: true,
            },
            month_digit: {
                type: Number,
                require: true,
                default: 2
            },
            targetsales: {
                type: Number,
                require: true,
                default: 0
            },
            sales: {
                type: Number,
                require: true,
                default: 0
            },
        },
        3: {
            _id: {
                type: mongoose.Schema.Types.ObjectId,
                index: true,
                required: true,
                auto: true,
            },
            month_digit: {
                type: Number,
                require: true,
                default: 3
            },
            targetsales: {
                type: Number,
                require: true,
                default: 0
            },
            sales: {
                type: Number,
                require: true,
                default: 0
            },
        },
        4: {
            _id: {
                type: mongoose.Schema.Types.ObjectId,
                index: true,
                required: true,
                auto: true,
            },
            month_digit: {
                type: Number,
                require: true,
                default: 4
            },
            targetsales: {
                type: Number,
                require: true,
                default: 0
            },
            sales: {
                type: Number,
                require: true,
                default: 0
            },
        },
        5: {
            _id: {
                type: mongoose.Schema.Types.ObjectId,
                index: true,
                required: true,
                auto: true,
            },
            month_digit: {
                type: Number,
                require: true,
                default: 5
            },
            targetsales: {
                type: Number,
                require: true,
                default: 0
            },
            sales: {
                type: Number,
                require: true,
                default: 0
            },
        },
        6: {
            _id: {
                type: mongoose.Schema.Types.ObjectId,
                index: true,
                required: true,
                auto: true,
            },
            month_digit: {
                type: Number,
                require: true,
                default: 6
            },
            targetsales: {
                type: Number,
                require: true,
                default: 0
            },
            sales: {
                type: Number,
                require: true,
                default: 0
            },
        },
        7: {
            _id: {
                type: mongoose.Schema.Types.ObjectId,
                index: true,
                required: true,
                auto: true,
            },
            month_digit: {
                type: Number,
                require: true,
                default: 7
            },
            targetsales: {
                type: Number,
                require: true,
                default: 0
            },
            sales: {
                type: Number,
                require: true,
                default: 0
            },
        },
        8: {
            _id: {
                type: mongoose.Schema.Types.ObjectId,
                index: true,
                required: true,
                auto: true,
            },
            month_digit: {
                type: Number,
                require: true,
                default: 8
            },
            targetsales: {
                type: Number,
                require: true,
                default: 0
            },
            sales: {
                type: Number,
                require: true,
                default: 0
            },
        },
        9: {
            _id: {
                type: mongoose.Schema.Types.ObjectId,
                index: true,
                required: true,
                auto: true,
            },
            month_digit: {
                type: Number,
                require: true,
                default: 9
            },
            targetsales: {
                type: Number,
                require: true,
                default: 0
            },
            sales: {
                type: Number,
                require: true,
                default: 0
            },
        },
        10: {
            _id: {
                type: mongoose.Schema.Types.ObjectId,
                index: true,
                required: true,
                auto: true,
            },
            month_digit: {
                type: Number,
                require: true,
                default: 10
            },
            targetsales: {
                type: Number,
                require: true,
                default: 0
            },
            sales: {
                type: Number,
                require: true,
                default: 0
            },
        },
        11: {
            _id: {
                type: mongoose.Schema.Types.ObjectId,
                index: true,
                required: true,
                auto: true,
            },
            month_digit: {
                type: Number,
                require: true,
                default: 11
            },
            targetsales: {
                type: Number,
                require: true,
                default: 0
            },
            sales: {
                type: Number,
                require: true,
                default: 0
            },
        }
    }
    ,
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
            generic_name: {
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
            product_name: {
                type: String,
                require: true,
            },
            generic_name: {
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
    ]
});


const OwnerModels = mongoose.model('OwnerModels', model_schema);

export default OwnerModels;