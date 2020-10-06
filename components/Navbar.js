import Link from 'next/link';
import Button from './Button';
import { SiteLogo } from './icons/index';
import { observer } from 'mobx-react';

const Navbar = ({ onFavoritesPage }) => {
  return (
    <header className="header">
      <Link href="/">
        <a alt="Find Movies Logo Site Logo">
          <SiteLogo width="140px" aria-label="Find Movies Logo Site Logo" />
        </a>
      </Link>

      {onFavoritesPage ? (
        <Link href="/">
          <a>
            <Button className="header-button">Stay Home</Button>
          </a>
        </Link>
      ) : (
        <Link href="/favorites">
          <a>
            <Button className="header-button">My Favorites</Button>
          </a>
        </Link>
      )}
    </header>
  );
};
export default observer(Navbar);
