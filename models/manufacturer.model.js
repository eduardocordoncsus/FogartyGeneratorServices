const mongoose = require('mongoose');

const manufacturerSchema = mongoose.Schema(
    {
        manufactuerID: {
            type: String,
            required: true,
            default: ""
        },
        manufactuerName: {
            type: String,
            require: true,
            default: ""
        },
    },    
    {
        timestamps: true,
    }

);

const Manufacturer = mongoose.model("Manufacturer", manufacturerSchema);

module.exports = Manufacturer;