const mongoose = require('mongoose')
mongoose.connect("mongodb://localhost/test", { useNewUrlParser: true })

let Book = mongoose.model("Book", {
    name : String,
    published : Boolean,
    createdAt : Date,
    updatedAt : { type: Date, default: Date.now }
})

let practicalNodeBook = new Book({
    name : "Practical Node.js, 2nd edition",
    author : "Azat",
    link : 'https://github.com/azat-co/practicalnode',
    createdAt : Date.now()
})
console.log("Is new?", practicalNodeBook.isNew)
practicalNodeBook.save((err, results) => {
    if(err){
        console.error(err);
        process.exit(1)
    } else {
        console.log("Saved: ", results)
        console.log("Is new?", practicalNodeBook.isNew)
        Book.findOne({_id: practicalNodeBook.id}, (error, bookDoc) =>{
            console.log(bookDoc.toJSON())
            console.log(bookDoc.id)
            bookDoc.published = true
            //bookDoc.save(console.log)
            bookDoc.remove(process.exit)
        })
    }
})