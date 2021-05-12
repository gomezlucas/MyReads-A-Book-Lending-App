import React from 'react'
import './App.css'
import MyReadsPage from './MyReadsPage'
import SearchBooksPage from './SearchBooksPage'
import { Route } from 'react-router-dom'
import *  as BooksAPI from './BooksAPI'



class BooksApp extends React.Component {
  state = {
    books: [],
    query: []
  }


  componentDidMount() {
    BooksAPI.getAll()
      .then((books) => {
        this.setState(prevState => ({
          books
        }))
      })
  }

  updateBookShelf = (id, shelf) => {
    let newBooks = this.state.books.map(book => (
      book.id === id ? { ...book, shelf } : book
    ))
    BooksAPI.update(id, shelf).then(
      ()=>this.setState({ books: newBooks })
    )
    

    BooksAPI.getAll().then(data => this.setState({ books: data }))
  }

  handleSearch = (value) =>{
    BooksAPI.search(value)
      .then(search=>{
        if(search && search.error !== 'empty query'){
          this.setState({
            query: search
          })
        }else{
          this.setState({
            query: []
          })
        }
      }   
      )
  }

  render() {
    return (
      <div className="app">
        <Route
          exact path='/'
          render={() => (
            <MyReadsPage
              books={this.state.books}
              updateBookShelf={this.updateBookShelf}
            />
          )}
        />
        <Route
          path='/search'
          render={()=>(
          <SearchBooksPage
          query={this.state.query}
          books={this.state.books}
          updateBookShelf={this.updateBookShelf}
          handleSearch={this.handleSearch}
          />
          )}
        />
      </div>
    )
  }
}

export default BooksApp
