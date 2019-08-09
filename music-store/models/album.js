'use strict';

const model = require("../config/db").model
const schema = require("../schemas/album")

module.exports = AlbumModel

const AlbumModel = new model("Album", schema)