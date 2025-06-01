// Find all books in a specific genre

db.books.find({genre: "Fiction"})

// Find books published after a certain year
db.books.find({published_year: {$gte: 1920}})

// Find books by a specific author
db.books.find({author: "Harper Lee"})

// Update the price of a specific book
db.books.updateOne({price: 10.99}, {$set: {price: 7.99}})

// Check book change of price
db.books.find({title: "1984"})

// Delete a book by its title
db.books.deleteOne({title: "The Catcher in the Rye"})


// ADVANCED QUERIES

// Write a query to find books that are both in stock and published after 2010
db.books.find({in_stock : true, published_year: {$gt: 2010}})

// Use projection to return only the title, author, and price fields in your queries

db.books.find({}, {title: 1, author: 1, price: 1})

// Implement sorting to display books by price (both ascending and descending)
db.books.find({}).sort( {price: 1})
db.books.find({}).sort( {price: -1})

// Use the limit and skip methods to implement pagination (5 books per page)
db.books.find({}).skip(3).limit(5)



// Task 4: Aggregation Pipeline

// Create an aggregation pipeline to calculate the average price of books by genre
db.books.aggregate([
    {
        $group: {
            _id: "$genre",
            average_Price: {$avg: "$price"}
        }
    }
])

// Create an aggregation pipeline to find the author with the most books in the collection
db.books.aggregate([
    {
    $group: {
        _id: "$author",
        book_count: {$sum: 1}
    }

    },
    {
        $sort: { book_count: -1}
    },

    {
        $limit: 1
    }
    
    
])

// Implement a pipeline that groups books by publication decade and counts them

db.books.aggregate([
  {
    $project: {
      // Compute the decade by truncating the last digit
      decade: {
        $multiply: [
          { $floor: { $divide: ["$published_year", 10] } },
          10
        ]
      }
    }
  },
  {
    $group: {
      _id: "$decade",
      count: { $sum: 1 }
    }
  },
  {
    $sort: { _id: 1 } // Sort by decade ascending
  }
])

// Indexing

// Create an index on the title field for faster searches
db.books.createIndex({title: 1})

//Create a compound index on author and published_year
db.books.createIndex({author: 1, published_year: 1})

// Use the explain() method to demonstrate the performance improvement with your indexes

db.books.find({author: "J.R.R. Tolkien"}).explain("executionStats")

/* I used the .explain("executionStats") method to verify performance. The output shows an IXSCAN on the author_1_published_year_1 index, confirming MongoDB used the compound index. It examined only 2 index entries and returned 2 matching documents with no full collection scan. This proves that indexing significantly improves query speed and efficiency. */