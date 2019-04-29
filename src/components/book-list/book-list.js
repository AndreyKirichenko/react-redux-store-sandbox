import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withBookstoreService } from '../hoc';
import { booksLoaded } from '../../actions';
import { compose } from '../../utils';

import './book-list.css';

import BookListItem from '../book-list-item';

class BookList extends Component {

  componentDidMount() {
    const { bookstoreService } = this.props;
    const data = bookstoreService.getBooks();

    this.props.booksLoaded(data);
  }

  render() {
    const { books } = this.props;
    return (
      <ul className='book-list'>
        {
          books.map((book) => {
            return (
              <li key={book.id}  className='book-list'>
                <BookListItem book={book} />
              </li>
            )
          })
        }
      </ul>
    );
  }
}

const mapStateToProops = ({ books }) => {
  return {
    books
  }
};

const mapDispatchToProps = {
  booksLoaded
};

export default compose(
  withBookstoreService(),
  connect(mapStateToProops, mapDispatchToProps)
)(BookList);
