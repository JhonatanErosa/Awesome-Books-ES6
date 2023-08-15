import { DisplayBooks } from "./modules/displayBooks";
import { Library } from "./modules/library";
import { NavigationBar } from "./modules/navigationBar";

document.addEventListener('DOMContentLoaded', () => {
	let booksCollection = new Library();
	booksCollection.initializeLocalStorage();

	let addBtn = document.getElementById('addBtn');
	addBtn.addEventListener('click', (e) => {
		e.preventDefault();
		let titleInput = document.getElementById('title');
		let authorInput = document.getElementById('author');
		booksCollection.addData(titleInput.value, authorInput.value);
		titleInput.value = '';
		authorInput.value = '';
	})

	let displayBooks = new DisplayBooks();
	displayBooks.showBooks(booksCollection, (index) => booksCollection.removeBook(index));

	let navigationBar = new NavigationBar();
	navigationBar.toggler();
})