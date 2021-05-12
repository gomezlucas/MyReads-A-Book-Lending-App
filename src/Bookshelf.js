import React from 'react'
import Book from './Book'
import PropTypes from 'prop-types'


function Bookshelf({title, books, updateBookShelf}){

 const bookList = books.map(book=>(
  <Book key={book.id}  book={book} updateBookShelf={updateBookShelf} />
))

    return(  
    <div className="bookshelf">
    <h2 className="bookshelf-title">{title}</h2>
    <div className="bookshelf-books">
      <ol className="books-grid">
          {bookList}
      </ol>
    </div>
  </div>
  )
}

Bookshelf.proptypes ={
  title: PropTypes.string.isRequired, 
  books: PropTypes.array.isRequired,
  updateBookShelf: PropTypes.func.isRequired
}



export default Bookshelf