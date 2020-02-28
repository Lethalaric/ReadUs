exports.progress = (code, arrayProgressItem) => {

    var json = {
        'status': code,
        'books': arrayProgressItem
    }

    return json;

}

exports.progressItem = (id, bookName, percentage) => {

    var books = {
        'id': id,
        'bookName': bookName,
        'percentage': percentage
    }

    return books;
}