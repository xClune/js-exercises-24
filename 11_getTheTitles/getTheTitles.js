const getTheTitles = function(books) {
    titles = [];
    for (book of books){
        titles.push(book.title);
    }
    return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
