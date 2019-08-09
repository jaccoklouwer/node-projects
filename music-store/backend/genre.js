'use strict';

const model = require("../models/genre")

module.exports = [find, save, remove, update]

function find(id) {
    if(id){
        model.findById(id, (error, genre) => {
            if (error) throw error
            return genre
        })
    } else {
        model.find({}, null, {sort: {_id: -1}}, (error, genres) => {
            if (error) throw error
            return genres
        })
    }
}

function save(genre){
    genre.save((error, results) => {
        if (error) throw error
        return results
    })
}

function remove(id) {
    var genre = find(id)
    genre.remove((error, results) => {
        if (error) throw error
        return results
    })
}

function update(id, genre) {
    var oldGenre = find(id)
    if(genre.Name) oldGenre.Name = genre.Name
    if(genre.Description) oldGenre.Description = genre.Description
    oldGenre.save((error, results) => {
        if(error) throw error
        return results
    })
}