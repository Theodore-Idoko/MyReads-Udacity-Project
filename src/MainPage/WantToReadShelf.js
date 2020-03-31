import React, { Component } from 'react';
import Book from '../Book';

class WantToReadShelf extends Component {
  render () {
    const {bookList, changeShelf} = this.props
    return (
      <div className="bookshelf">
      <h2 className="bookshelf-title">Want to Read</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {
            bookList
              .filter(book => book.shelf ===
                'wantToRead')
                .map(book => (
                  <li key={book.id}>
                    <Book 
                    book={book}
                    changeShelf= {changeShelf}
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

export default WantToReadShelf