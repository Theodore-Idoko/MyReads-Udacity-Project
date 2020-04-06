import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchPage from './SearchPage'
import CurrentShelf from './MainPage/CurrentShelf'

class BooksApp extends React.Component {
  state = {
    books: [],
    }

    //ComponentDidMount is used to get  all the books from api
  // componentDidMount() {
  //   BooksAPI.getAll()
  //     .then((books) => {
  //       this.setState({
  //         books
  //       })
  //     })
  // }

    async componentDidMount () {
      const books = await BooksAPI.getAll()
      this.setState({books})
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
    const {books} = this.state
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          < CurrentShelf 
          bookList={books}
          changeShelf ={this.changeShelf}
          /> 
        )} />
        <Route exact path='/search' render={() => (
            <SearchPage 
            changeShelf ={this.changeShelf}
            books={books}
          />
        )} />
      </div>
    )
  }
}

export default BooksApp
