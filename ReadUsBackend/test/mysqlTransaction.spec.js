var chai = require('chai');
var expect = chai.expect;
var mysqlTransaction = require('../utilities/mysqlTransaction');

describe('mysqlTransaction', () => {

    // insert data test
    it(
        'insert data should success', () => {
            var data = {
                "bookName": "perang ketiga",
                "totalPage": 100,
                "totalTime": 2,
                "totalRead": 0
            };
            mysqlTransaction.insertBook(data)
                .then(book => {
                    expect(book).to.not.null;
                })
                .catch(err => {
                    console.log('failed to insert. ', err);
                });
        }
    );

    it(
        'insert data should failed', () => {
            var data = {
                "bookName": "perang ketiga",
                "totalPage": 'seratus',
                "totalTime": 2,
                "totalRead": 0
            };
            mysqlTransaction.insertBook(data)
                .then(book => {
                    console.log('book : ', book);
                })
                .catch(err => {
                    expect(err).to.not.null;
                })
        }
    );

    // update data test
    it(
        'update data should success', () => {
            var data = {
                "id": 101,
                "totalRead": 20
            };
            mysqlTransaction.editBook(data, { id: data.id })
                .then(book => {
                    expect(book).to.not.null;
                })
                .catch(err => {
                    console.log('error : ', err);
                });
        }
    );
    it(
        'update data should failed', () => {
            var data = {
                "id": 1000,
                "totalRead": 20
            };
            mysqlTransaction.editBook(data, { id: data.id })
                .then(book => {
                    console.log('book : ', book);
                })
                .catch(err => {
                    expect(err).to.not.null;
                });
        }
    );

    // get data test
    it(
        'get data should success', () => {
            mysqlTransaction.getBook()
                .then(book => {
                    expect(book).to.not.null;
                })
                .catch(err => {
                    console.log('error : ', err);
                });
        }
    );
});