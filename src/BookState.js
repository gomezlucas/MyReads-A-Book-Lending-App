import React, { Component } from 'react'
import PropTypes from 'prop-types'

class BookState extends Component {
  
  handleChange = (event) => {
     this.props.updateBookShelf( this.props.id,event.target.value )
  }

  render() {
    return (
      <div className="book-shelf-changer">
        <select id="shelf" value={this.props.shelf} onChange={this.handleChange}>
          <option value="move" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    )
  }
}

BookState.proptypes ={
  id: PropTypes.string.isRequired, 
}


export default BookState