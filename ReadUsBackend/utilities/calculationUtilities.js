exports.calculatePercentage = (totalPage, currentPage) => {
    if (currentPage >= totalPage) {
        return 100;
    } else if (currentPage < 0) {
        return 0;
    } else {
        return Math.round((currentPage / totalPage * 100));
    }
}