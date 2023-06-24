import { Link } from 'react-router-dom';
import usericon from '../assets/user-icon.svg';

function NavLinks() {
  return (
    <nav className="d-flex">
      <h1>BOOKSTORE</h1>
      <ul className="nav-list d-flex align-items-center">
        <li>
          <Link className="link" to="/">Books</Link>
        </li>
        <li>
          <Link className="link" to="/Categories">Categories</Link>
        </li>
      </ul>
      <img className="profile justify-self-flex-end" src={usericon} alt="Profile" />

    </nav>
  );
}

export default NavLinks;
