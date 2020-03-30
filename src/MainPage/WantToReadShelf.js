import React, { Component } from 'react';
import Book from '../Book';

class WantToReadShelf extends Component {
  render () {
    return (
      <div className="bookshelf">
      <h2 className="bookshelf-title">Want to Read</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {/* {
            this.props.bookList
              .filter(book => book.shelf ===
                'wantToRead')
          } */}
          <li>
            <Book />
          </li>
        </ol>
      </div>
    </div>
    )
  }
}

export default WantToReadShelf