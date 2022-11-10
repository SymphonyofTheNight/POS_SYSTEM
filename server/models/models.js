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
    months: [
        {
            january: {
                _id: {
                    type: mongoose.Schema.Types.ObjectId,
                    index: true,
                    required: true,
                    auto: true,
                },
                month_digit: {
                    type: String,
                    require: true,
                },
                targetsales: {
                    type: Number,
                    require: true
                },
                sales: {
                    type: Number,
                    require: true
                },
            },
            february: {
                _id: {
                    type: mongoose.Schema.Types.ObjectId,
                    index: true,
                    required: true,
                    auto: true,
                },
                month_digit: {
                    type: String,
                    require: true,
                },
                targetsales: {
                    type: Number,
                    require: true
                },
                sales: {
                    type: Number,
                    require: true
                },
            },
            march: {
                _id: {
                    type: mongoose.Schema.Types.ObjectId,
                    index: true,
                    required: true,
                    auto: true,
                },
                month_digit: {
                    type: String,
                    require: true,
                },
                targetsales: {
                    type: Number,
                    require: true
                },
                sales: {
                    type: Number,
                    require: true
                },
            },
            april: {
                _id: {
                    type: mongoose.Schema.Types.ObjectId,
                    index: true,
                    required: true,
                    auto: true,
                },
                month_digit: {
                    type: String,
                    require: true,
                },
                targetsales: {
                    type: Number,
                    require: true
                },
                sales: {
                    type: Number,
                    require: true
                },
            },
            may: {
                _id: {
                    type: mongoose.Schema.Types.ObjectId,
                    index: true,
                    required: true,
                    auto: true,
                },
                month_digit: {
                    type: String,
                    require: true,
                },
                targetsales: {
                    type: Number,
                    require: true
                },
                sales: {
                    type: Number,
                    require: true
                },
            },
            june: {
                _id: {
                    type: mongoose.Schema.Types.ObjectId,
                    index: true,
                    required: true,
                    auto: true,
                },
                month_digit: {
                    type: String,
                    require: true,
                },
                targetsales: {
                    type: Number,
                    require: true
                },
                sales: {
                    type: Number,
                    require: true
                },
            },
            july: {
                _id: {
                    type: mongoose.Schema.Types.ObjectId,
                    index: true,
                    required: true,
                    auto: true,
                },
                month_digit: {
                    type: String,
                    require: true,
                },
                targetsales: {
                    type: Number,
                    require: true
                },
                sales: {
                    type: Number,
                    require: true
                },
            },
            august: {
                _id: {
                    type: mongoose.Schema.Types.ObjectId,
                    index: true,
                    required: true,
                    auto: true,
                },
                month_digit: {
                    type: String,
                    require: true,
                },
                targetsales: {
                    type: Number,
                    require: true
                },
                sales: {
                    type: Number,
                    require: true
                },
            },
            september: {
                _id: {
                    type: mongoose.Schema.Types.ObjectId,
                    index: true,
                    required: true,
                    auto: true,
                },
                month_digit: {
                    type: String,
                    require: true,
                },
                targetsales: {
                    type: Number,
                    require: true
                },
                sales: {
                    type: Number,
                    require: true
                },
            },
            october: {
                _id: {
                    type: mongoose.Schema.Types.ObjectId,
                    index: true,
                    required: true,
                    auto: true,
                },
                month_digit: {
                    type: String,
                    require: true,
                },
                targetsales: {
                    type: Number,
                    require: true
                },
                sales: {
                    type: Number,
                    require: true
                },
            },
            november: {
                _id: {
                    type: mongoose.Schema.Types.ObjectId,
                    index: true,
                    required: true,
                    auto: true,
                },
                month_digit: {
                    type: String,
                    require: true,
                },
                targetsales: {
                    type: Number,
                    require: true
                },
                sales: {
                    type: Number,
                    require: true
                },
            },
            december: {
                _id: {
                    type: mongoose.Schema.Types.ObjectId,
                    index: true,
                    required: true,
                    auto: true,
                },
                month_digit: {
                    type: String,
                    require: true,
                },
                targetsales: {
                    type: Number,
                    require: true
                },
                sales: {
                    type: Number,
                    require: true
                },
            }
        }
    ],
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