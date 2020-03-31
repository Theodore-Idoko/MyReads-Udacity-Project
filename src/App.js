import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
//import SearchPage from './SearchPage'
import CurrentShelf from './MainPage/CurrentShelf'

class BooksApp extends React.Component {
  state = {
    books: [],
    }

    //ComponentDidMount is used to get  all the books from api
  componentDidMount() {
    BooksAPI.getAll()
      .then((books) => {
        this.setState({
          books
        })
      })
  }

  changeShelf = (book, shelf) => {
    BooksAPI.update(book,shelf);

    BooksAPI.getAll()
    .then((books) => {
      this.setState ({
        books
      })
    })
  }

  render() {
    return (
      <div className="app">
          < CurrentShelf 
          bookList={this.state.books}
          changeShelf ={this.changeShelf}
          /> 
          
      </div>
    )
  }
}

export default BooksApp
