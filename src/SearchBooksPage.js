import React, { Component } from 'react'
import Bookshelf from './Bookshelf'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'


class SearchBook extends Component {
  state = {
    value: '' ,
   }

  handleOnChange = (e) => {
    const  {value}  = e.target
       
      this.setState({value},
        ()=>{
          if(this.state.value){
            setTimeout(() => {
              this.props.handleSearch(this.state.value)
            }, 1500);
          }
        }
        )
     }

     checkState = () =>{
       const booksShelfUpdated = this.props.query.map(book=>{
         let bookFound = this.props.books.find(b => b.id === book.id);
       
        if (bookFound){
          book.shelf = bookFound.shelf
         }else{
          book.shelf = 'none'
         }

         return  book
       })
       return booksShelfUpdated
     }


  showShelf =() =>    this.props.query !== undefined  &&  this.props.query.length >  0 ?
    <Bookshelf title={"Results"} books={this.checkState()} updateBookShelf={this.props.updateBookShelf} /> :
    <h3> There are not matches for your Search, try again </h3>
  

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to='/'> Close </Link>
           <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author" value={this.state.value} onChange={this.handleOnChange} />
          </div>
        </div>
        <div className="search-books-results">        
        {
          this.state.value.length > 0 ? this.showShelf() : <h3> Search your favourite books by title or author </h3>
        }
          </div>
      </div>
    )
  }

}


SearchBook.proptypes ={
  handleSearch: PropTypes.func.isRequired, 
  query: PropTypes.array.isRequired,
  books: PropTypes.array.isRequired
}

export default SearchBook


