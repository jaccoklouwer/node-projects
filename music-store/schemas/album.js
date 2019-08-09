'use strict';

const Schema = require("../config/db").Schema
const artiestSchema = require("./artiest")
const genreSchema = require("./genre")

module.exports = albumSchema

const albumSchema = new Schema({
    Title: String,
    Price: Number,
    albumUrl: String,
    Artiest: artiestSchema,
    Genre: genreSchema
})