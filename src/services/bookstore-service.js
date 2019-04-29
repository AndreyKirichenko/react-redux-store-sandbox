export default class BookstoreService {

  getBooks() {
    return [
      {
        id: 1,
        title: 'Book 1',
        author: 'Author 1',
        price: 222,
        coverImage: ''
      },

      {
        id: 2,
        title: 'Book 2',
        author: 'Author 2',
        price: 333,
        coverImage: ''
      }
    ];
  }
};