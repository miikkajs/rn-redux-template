/*
'use strict';
const mongoose = require('mongoose');

const Product = new mongoose.Schema({
    productShortName: {type: String, required: true, unique: true},
    title: {type: String},
    validFrom: {type: String}, //subscriptionStartDate
    validTo: {type: String}, //subscriptionEndDate
    subtitle: {type: String},
    image: {type: String},
    price: {type: Number},
    currency: {type: String},
    billingFrequency: {type: String},
    speedLabel: {type: String},
    downloadSpeed: {type: Number},
    uploadSpeed: {type: Number},
    monthlyAmount: {type: Number},
    accessPriority: {type: String},
    type: {type: String}
});

module.exports = mongoose.model('Product', Product);
*/
