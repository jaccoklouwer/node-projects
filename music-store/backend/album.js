'use strict';

const model = require("../models/album")

module.exports = [find, save, remove, update]

function find(id) {
    if(id){
        model.findById(id, (error, album) => {
            if (error) throw error
            return album
        })
    } else {
        model.find({}, null, {sort: {_id: -1}}, (error, albums) => {
            if (error) throw error
            return albums
        })
    }
}

function save(album){
    album.save((error, results) => {
        if (error) throw error
        return results
    })
}

function remove(id) {
    var album = find(id)
    album.remove((error, results) => {
        if (error) throw error
        return results
    })
}

function update(id, album) {
    var oldAlbum = find(id)
    if(album.Title) oldAlbum.Title = album.Title
    if(album.Price) oldAlbum.Price = album.Price
    if(album.albumUrl) oldAlbum.albumUrl = album.albumUrl
    if(album.artiest) oldAlbum.artiest = album.artiest
    if(album.genre) oldAlbum.genre = album.genre
    oldAlbum.save((error, results) => {
        if(error) throw error
        return results
    })
}