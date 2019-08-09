'use strict';

const model = require("../config/db").model
const schema = require("../schemas/artiest")

module.exports = ArtiestModel

const ArtiestModel = new model("Artiest", schema)