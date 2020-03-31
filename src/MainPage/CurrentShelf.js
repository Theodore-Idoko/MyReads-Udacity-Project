import React, { Component } from 'react';
import WantToReadShelf from './WantToReadShelf';
import ReadShelf from './ReadShelf';
import Book from '../Book';

class CurrentShelf extends Component {
  render () {
    const {bookList, changeShelf} = this.props
    
    return (
      <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                    {
                      bookList
                       .filter(book => book.shelf ===
                         'currentlyReading')
                         .map(book => (
                           <li key={book.id}>
                             <Book 
                             book={book}
                             changeShelf={changeShelf}
                             
                             />
                          </li>
                       ))
                    }
                      
                    </ol>
                  </div>
                </div>
                <WantToReadShelf 
                bookList={bookList}
                changeShelf ={changeShelf}
                />
                <ReadShelf 
                bookList={bookList}
                changeShelf ={changeShelf}
                />
                </div>
                </div>
                <div className="open-search">
                  <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
                </div>
                </div>

            
    )
  }
}

export default CurrentShelf