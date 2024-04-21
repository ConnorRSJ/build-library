class Media {
  constructor(title) {
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }

  get title() {
    return this._title;
  }

  get isCheckedOut() {
    return this._isCheckedOut;
  }

  get ratings() {
    return this._ratings;
  }

  set isCheckedOut(newValue) {
    this._isCheckedOut = newValue;
  }

  getAverageRating() {
    if(this._ratings.length === 0) {
      return `Currently no ratings for ${this._title}`;
    }
    return Math.round(this._ratings.reduce((accumulator, currentValue) => accumulator + currentValue, 0) / this.ratings.length * 10) / 10 + " Stars";
  }

  toggleCheckOutStatus() {
    this._isCheckedOut = !this._isCheckedOut;
  }

  addRating(newRating) {
    if(newRating > 5) {
      newRating = 5;
    } else if(newRating < 0) {
      newRating = 0;
    }
    this._ratings.push(newRating);
  }
}
  
class Book extends Media {
  constructor(title, author, pages) {
    super(title);
    this._author = author;
    this._pages = pages;
  }

  get author() {
    return this._author;
  }

  get pages() {
    return this._pages;
  }
}

class Movie extends Media {
  constructor(title, director, runTime) {
    super(title);
    this._director = director;
    this._runTime = runTime;
  }

  get director() {
    return this._director;
  }

  get runTime() {
    return this._runTime;
  }
}

class CD extends Media {
  constructor(title, artist, songs) {
    super(title);
    this._artist = artist;
    this._songs = songs;
  }

  get artist() {
    return this._artist;
  }

  get songs() {
    return this._songs;
  }
}

const historyOfEverything = new Book("A Short History of Nearly Everything", "Bill Bryson", 544);
const RHCP = new CD("By the Way", "RHCP", ["The Zephyr Song", "Can't Stop"]);
historyOfEverything.toggleCheckOutStatus();
historyOfEverything.addRating(4);
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
console.log(historyOfEverything.getAverageRating());
console.log(historyOfEverything.isCheckedOut);

console.log(RHCP);