exports.bookModel = (Sequelize, sequelize) => {
    return sequelize.define('book', {
        bookName: {
            type: Sequelize.STRING
        },
        totalPage: {
            type: Sequelize.INTEGER
        },
        totalTime: {
            type: Sequelize.INTEGER
        },
        currentPage: {
            type: Sequelize.INTEGER
        },
        currentTime: {
            type: Sequelize.INTEGER
        },
    });
}


exports.singleJson = (statusCode, books) => {
    return {
        'status': statusCode,
        'book': books
    };
}

exports.multipleJson = (statusCode, books) => {
    return {
        'status': statusCode,
        'books': books
    };
}