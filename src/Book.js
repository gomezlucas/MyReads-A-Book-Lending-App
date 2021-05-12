import React from 'react'
import BookState from './BookState'
import PropTypes from 'prop-types'


function Book({ book, updateBookShelf }) {
  const { title, imageLinks, authors, shelf, id } = book

  const { smallThumbnail } = imageLinks ? imageLinks : ''

  const listAuthors = authors ?
    authors.map((author) => (
      <li key={book.id + author}> {author} </li>
      ))
      : ''

  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${smallThumbnail}")` }}></div>
          <BookState shelf={shelf} updateBookShelf={updateBookShelf} id={id} />
        </div>
        <div className="book-title">{title}</div>
        <ul className="book-authors">{listAuthors}</ul>
      </div>
    </li>
  )
}

Book.proptypes ={
  book: PropTypes.object.isRequired, 
  updateBookShelf: PropTypes.func.isRequired
}


export default Book