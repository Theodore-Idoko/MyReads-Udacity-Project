import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI'
import Book from './Book';


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
              <button className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</button>
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
                  search.map(searches => (
                    <li key={searches.id}>
                      <Book 
                        book= {searches}
                      />
                    </li>
                  ))
                }
              </ol>
            </div>
          </div>
    )
  }
}

export default SearchPage