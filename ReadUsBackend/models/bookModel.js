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
        totalRead: {
            type: Sequelize.INTEGER
        },
    });
}