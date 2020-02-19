exports.progress = (code, arrayProgressItem) => {

    var json = {
        'status': code,
        'books': arrayProgressItem
    }

    return json;

}

exports.progressItem = (bookName, percentage) => {

    var books = {
        'bookName': bookName,
        'percentage': percentage
    }

    return books;
}