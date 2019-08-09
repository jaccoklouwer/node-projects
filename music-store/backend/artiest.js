'use strict';

const model = require("../models/artiest")

module.exports = [find, save, remove, update]

function find(id) {
    if(id){
        model.findById(id, (error, artiest) => {
            if (error) throw error
            return artiest
        })
    } else {
        model.find({}, null, {sort: {_id: -1}}, (error, artiests) => {
            if (error) throw error
            return artiests
        })
    }
}

function save(artiest){
    artiest.save((error, results) => {
        if (error) throw error
        return results
    })
}

function remove(id) {
    var artiest = find(id)
    artiest.remove((error, results) => {
        if (error) throw error
        return results
    })
}

function update(id, artiest) {
    var oldArtiest = find(id)
    if(artiest.Name) oldArtiest.Name = artiest.Name
    oldArtiest.save((error, results) => {
        if(error) throw error
        return results
    })
}