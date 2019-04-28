import React from 'react';
import { BookstoreSericeConsumer } from '../bookstore-service-context';

const withBookstoreService = () => (Wrapped) => {
  return  (props) => {
    return (
      <BookstoreSericeConsumer>
        {
          (bookstoreService) => {
            return (
              <Wrapped {...props} bookstoreService={bookstoreService} />
            );
          }
        }
      </BookstoreSericeConsumer>
    );
  }
};

export default withBookstoreService;
