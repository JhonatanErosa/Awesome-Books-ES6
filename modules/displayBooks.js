export class DisplayBooks {
	showBooks(books, removeBooksCallback) {
		const booksContainer = document.querySelector('#booksContainer');
		booksContainer.innerHTML = '';

		for (let i = 0; i < books.length; i += 1) {
			const book = books[i];

			const bookWrapper = document.createElement('div');
			bookWrapper.classList.add('bookContainer');

			const bookInfo = document.createElement('div');
			bookInfo.classList.add('bookInfo');

			const bookTitle = document.createElement('p');
			bookTitle.classList.add('bookTitle');
			bookTitle.textContent = `${book.author}`;

			const by = document.createElement('p');
			by.classList.add('by');
			by.textContent = 'by';

			const bookAuthor = document.createElement('p');
      bookAuthor.classList.add('bookAuthor');
      bookAuthor.textContent = `${book.author}`;

			const buttonContainer = document.createElement('div');
      buttonContainer.classList.add('buttonContainer');

			const removeBtn = document.createElement('button');
      removeBtn.textContent = 'Remove';
      removeBtn.classList.add('removeBtn');
      removeBtn.dataset.index = i;

			bookInfo.appendChild(bookTitle);
      bookInfo.appendChild(by);
      bookInfo.appendChild(bookAuthor);
      buttonContainer.appendChild(removeBtn);
      bookWrapper.appendChild(bookInfo);
      bookWrapper.appendChild(buttonContainer);

			booksContainer.appendChild(bookWrapper);

			removeBtn.addEventListener('click', () => removeBooksCallback(i));
		}
	}
}