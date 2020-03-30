import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
//import SearchPage from './SearchPage'
import CurrentShelf from './MainPage/CurrentShelf'

class BooksApp extends React.Component {
  state = {
    books: [],
    }

  componentDidMount() {
    BooksAPI.getAll()
      .then((books) => {
        this.setState(() => ({
          books
        }))
      })
  }

  render() {
    return (
      <div className="app">
          < CurrentShelf bookList={this.state.books}/>
      </div>
    )
  }
}

export default BooksApp
