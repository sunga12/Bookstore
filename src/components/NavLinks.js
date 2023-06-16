import { Link } from 'react-router-dom';

function NavLinks() {
  return (
    <nav className="d-flex">
      <h1>BOOKSTORE</h1>
      <ul className="nav-list d-flex">
        <li>
          <Link className="link" to="/">Books</Link>
        </li>
        <li>
          <Link className="link" to="/Categories">Categories</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavLinks;
