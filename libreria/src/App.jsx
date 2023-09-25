
import { useState } from 'react';
import './App.css';

function App() {

  const [books, setBooks] = useState([]);
  const [newBook, setNewBook] = useState({
    title: '',
    author: '',
    publicationDate: '',
    status: 'Disponible', // Estado predeterminado
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBook({ ...newBook, [name]: value });
  };

  const handleAddBook = () => {
    if (newBook.title && newBook.author && newBook.publicationDate) {
      setBooks([...books, newBook]);
      setNewBook({
        title: '',
        author: '',
        publicationDate: '',
        status: 'Disponible',
      });
    } else {
      alert('Por favor, completa todos los campos.');
    }
  };

  const handleDeleteBook = (index) => {
    const updatedBooks = [...books];
    updatedBooks.splice(index, 1);
    setBooks(updatedBooks);
  };

  return(
    <>
      <div className="App">
        <h1>Administrador de Libros</h1>
        <div>
          <input
            type="text"
            name="title"
            placeholder="Nombre del Libro"
            value={newBook.title}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="author"
            placeholder="Autor"
            value={newBook.author}
            onChange={handleInputChange}
          />
          <input
            type="date"
            name="publicationDate"
            value={newBook.publicationDate}
            onChange={handleInputChange}
          />
          <select
          name="status"
          value={newBook.status}
          onChange={handleInputChange}
          >
            <option value="Disponible">Disponible</option>
            <option value="Prestado">Prestado</option>
            <option value="Dañado">Dañado</option>
            <option value="Perdido">Perdido</option>
          </select>
          <button onClick={handleAddBook}>Agregar Libro</button>
        </div>
        <ul>
          {books.map((book, index) => (
            <li key={index}>
              <strong>{book.title}</strong>  Creado por: {book.author} ({book.publicationDate})
              <span>Estado: {book.status}</span>
              <button onClick={() => handleDeleteBook(index)}>Eliminar</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default App;
