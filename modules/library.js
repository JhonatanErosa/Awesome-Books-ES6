import { Storage } from './localStorage.js';
import { DisplayBooks } from './displayBooks.js';
import { defaultBooks } from './defaultBooks.js';

export class Library {
	constructor() {
		this.books = this.getBooksFromLocalStorage() || defaultBooks;
	}

	getBooksFromLocalStorage() {
		return Storage.getBooksFromLocalStorage();
	}

	initializeLocalStorage() {
		const storedData = this.getBooksFromLocalStorage();
		if (storedData === null) {
			Storage.setBooksToLocalStorage(defaultBooks);
		}
	}

	updateLocalStorage () {
		Storage.setBooksToLocalStorage(defaultBooks);
	}

	showBooks() {
		const displayBooks = new DisplayBooks();
		displayBooks.showBooks(this.books, (index) => this.removeBook(index));
	}

	addData(title, author) {
    const newBook = {
      title,
      author,
    };
    this.books.push(newBook);
    this.updateLocalStorage();
    this.showBooks();
  }

  removeBook(index) {
    this.books.splice(index, 1);
    this.updateLocalStorage();
    this.showBooks();
  }
}