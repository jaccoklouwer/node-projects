'use strict';

const Schema = require("../config/db").Schema

module.exports = genreSchema

const genreSchema = new Schema({
    Name: String,
    Description: String
})