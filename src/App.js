import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>DPMFOLIO</h1>
        <p>local:</p>
        <ul>
          <li><a href="http://localhost:6060/api/authors" target="_blank">authors</a></li>
          <li><a href="http://localhost:6060/api/authors/123" target="_blank">author</a></li>
          <li><a href="http://localhost:6060/api/books" target="_blank">books</a></li>
          <li><a href="http://localhost:6060/api/books/123" target="_blank">book</a></li>
        </ul>
        <p>heroku:</p>
        <ul>
          <li><a href="/api/authors" target="_blank">authors</a></li>
          <li><a href="/api/authors/123" target="_blank">authors</a></li>
          <li><a href="/api/books" target="_blank">books</a></li>
          <li><a href="/api/books/123" target="_blank">book</a></li>
        </ul>
      </header>
    </div>
  );
}

export default App;
