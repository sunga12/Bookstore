function BookForm() {
  function handleClick(e) {
    e.preventDefault();
  }

  return (
    <div className="add-book-form">
      <h3>ADD NEW BOOK</h3>
      <form>
        <input
          type="text"
          placeholder="Book Title"
        />
        <input
          type="text"
          placeholder="Author"
        />
        <button onClick={handleClick} type="submit">Add Book</button>
      </form>
    </div>
  );
}

export default BookForm;
