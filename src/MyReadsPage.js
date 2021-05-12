import React from 'react'
import Bookshelf from './Bookshelf'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'


function MyReadsPage({ books, updateBookShelf }) {

  const filterBooks = (books) => {
    const
      read = [],
      currentlyReading = [],
      wantToRead = []

    books.forEach(book => {
      switch (book.shelf) {
        case 'read':
          read.push(book)
          break;
        case 'currentlyReading':
          currentlyReading.push(book)
          break;
        case 'wantToRead':
          wantToRead.push(book)
          break;
        default:
          break;
      }
    })
    return [read, currentlyReading, wantToRead]
  }

  const [read, currentlyReading, wantToRead] = filterBooks(books)

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <Bookshelf title={'Currently Reading'} books={currentlyReading} updateBookShelf={updateBookShelf} />
          <Bookshelf title={'Want to Read'} books={wantToRead} updateBookShelf={updateBookShelf} />
          <Bookshelf title={'Read'} books={read} updateBookShelf={updateBookShelf} />
        </div>
      </div>
      <div className="open-search">
        <Link to='/search' >Add a book</Link>
      </div>
    </div>
  )
}

MyReadsPage.proptypes ={
  books: PropTypes.array.isRequired, 
  updateBookShelf: PropTypes.func.isRequired
}


export default MyReadsPage

 