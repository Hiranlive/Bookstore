var mongoose = require('mongoose');

// Book Schema
var bookSchema = mongoose.Schema({
	title : {
		type : String,
		require : true
	},
	genre : {
		type : String,
		require : true
	},
	description : {
		type : String,
		default : ""
	},
	author : {
		type : String
	},
	publisher : {
		type : String
	},
	pages : {
		type : Number
	},
	image_url : {
		type : String
	},
	create_date:{
		type : Date,
		default : Date.now
	}
});

var Book = module.exports = mongoose.model('Book', bookSchema);

// Get Books
module.exports.getBooks = function(callback, limit) {
	Book.find(callback).limit(limit);
}

// Get Single Book
module.exports.getBookById = function(id, callback) {
	Book.findById(id, callback)
}

// Add Book
module.exports.addBook = function(book, callback) {
	Book.create(book, callback);
}

// Update Book
module.exports.updateBook = function(id, book, options, callback) {
	var query = {_id : id};
	
	var update = {
		title : book.title,
		genre : book.genre,
		author : book.author,
		publisher : book.publisher,
		pages : book.pages,
		description : book.description,
		image_url : book.image_url
	};

	Book.findOneAndUpdate(query, update, options, callback);
}

// Remove Book
module.exports.removeBook = function(id, callback) {
	var query = {_id : id};

	Book.remove(query, callback);
}