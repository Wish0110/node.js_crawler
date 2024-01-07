fetch('/crawled_data')
  .then(response => response.json())
  .then(data => {
    // Display the data in your frontend (e.g., using HTML elements)
    console.log(data); // Log the data to verify its content
    const booksList = document.getElementById('books-list');
    data.forEach(book => {
      const bookItem = document.createElement('li');
      bookItem.textContent = `${book.title} - ${book.price}`;
      booksList.appendChild(bookItem);
    });
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
