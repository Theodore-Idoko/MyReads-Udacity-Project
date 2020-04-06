import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI'
import Book from './Book';
import { Link } from 'react-router-dom';


class SearchPage extends Component {
  state = {
    query: '',
    search: []
  }

  updateQuery = query => {
    this.setState(() =>({
      query
    }))
    this.updateSearch(query);
  }
  
  updateSearch = (query) => {
    if(query){
      BooksAPI.search(query).then((search) => {
        if(search.error){
          this.setState({search:[]})
        } else {
          this.setState({search})
        }
      })
    } else {
      this.setState({search: []})
    }
  
  }

  render() {
    const {query, search} = this.state
    
    
    
    return (
      <div className="search-books">
            <div className="search-books-bar">
              <Link 
              to='/'
              className="close-search" >
              Close
              </Link>
              <div className="search-books-input-wrapper">
              <input
                className='search-contacts'
                type='text'
                placeholder='Search by title or author'
                value={query}
                onChange={(event) => this.updateQuery(event.target.value)}
               />
               

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
                {
                  search.map(searches => {
                    let shelf = 'none';

                    this.props.books.map(book => (
                      book.id === searches.id ?
                      shelf = book.shelf : ''
                    ))
                    return (
                      <li key={searches.id}>
                      <Book 
                        book= {searches}
                        changeShelf ={this.props.changeShelf}
                        currentShelf = {shelf}
                      />
                    </li>
                    )
                  })
                }
              </ol>
            </div>
          </div>
    )
  }
}

export default SearchPage