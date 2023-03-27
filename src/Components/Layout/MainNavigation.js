import { Link } from 'react-router-dom';

function MainNavigation() {
  return (
    <header>
      <div>Meetup Destinations</div>
      <nav>
        <ul>
          <li>
            <Link to='/'>All Meetups</Link>
          </li>
          <li>
            <Link to='/my-projects'>My Projects</Link>
          </li>
          <li>
            <Link to='/profile'>My Profile</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
