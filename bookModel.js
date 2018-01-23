
//library
class Book {
  constructor(title, year, author, available, location, price) {
    this._title = title;
    this._year = year;
    this._author = author;
    this._available = available || 'available';
    this._location = location;
    this._price = price;
    this._remainRentingDays= 30;
  }
  get title() {
    return this._title;
  }
  get year() {
    return this._year;
  }
  get author() {
    return this._author;
  }

  set availability(status) {
    this._available = status;
  }
  get location() {
    return this._location;
  }
  get price() {
    return this._price;
  }
  get allInfos() {
    return `Title: ${this._title} Year: ${this._year} Author: ${this._author} Status: ${this.availability} Location: ${this._location} Price: ${this._price}CHF`;
  }
  get rentingPeriodleft () {
    return this._rentingPeriod;
  }
  updateRentingPeriod(days) {
    this._remainRentingDays -= days;
  }
}

const fireAndFury = new Book('Fire and Fury: Inside the Trump White House', '2018', 'Michael Wolf', 'Available from 30.02.18', 'Lausanne', 30);

let library = [];

library.push(fireAndFury);

//Show user what books are Available
function showAvailable() {
  library.forEach((book) => {
    if(book.availability === 'available') {
      return (book.allInfos);
    }
  })
};

//Show user list of books by authors
function sortBookByAuthor(author) {
  const result = library.filter(book => book.author === author)
  return result;
};
//Search if a book is available
function isAvailable(author, title) {
  library.forEach((book) => {
    if (book.author === author && book.title === title) {
        if (book.availability === "available") {
           return `${book.title} by ${book.author} is available in ${book.location}`;
        }
    }
  })
};

//Submit books
class submitedBooks extends Book {
  constructor(submitertName, title, year, author, available, location, price) {
    super(title, year, author, available, location, price);
    this.submitertName = submitertName;
  }
  get studentName() {
    return this._submiterName;
  }
};
let submited=[];
const obamaInHisOwnWords = new submitedBooks('Matthieu', 'Obama in his own words','2017', 'Barack Obama', 'now', 'Biel', 20);
submited.push(obamaInHisOwnWords);
