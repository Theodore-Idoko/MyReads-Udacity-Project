import React, { Component } from 'react';
import Book from '../Book';

class ReadShelf extends Component {
  render () {
    const {bookList, changeShelf} = this.props
    return (
      <div className="bookshelf">
      <h2 className="bookshelf-title">Read</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">


        {
            bookList
              .filter(book => book.shelf ===
                'read')
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
    )
  }
}

export default ReadShelf