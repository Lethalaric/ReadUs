exports.status = (code, description) => {
    var statusJson = {
        'status': code,
        'description': description
    }

    return statusJson;
}