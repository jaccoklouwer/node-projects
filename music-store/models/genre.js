'use strict';

const model = require("../config/db").model
const schema = require("../schemas/genre")

module.exports = GenreModel

const GenreModel = new model("Genre", schema)