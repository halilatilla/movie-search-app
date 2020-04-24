import Link from 'next/link';
import './header.scss';
import Button from '../button';

export default ({ onFavoritesPage }) => {
  return (
    <div className="header">
      <Link href="/">
        <a>
          <img className="header-logo" src="/assets/v.png"></img>
        </a>
      </Link>

      {onFavoritesPage ? (
        <Link href="/">
          <a>
            <Button className="header-button">stay home</Button>
          </a>
        </Link>
      ) : (
        <Link href="/favorites">
          <a>
            <Button className="header-button">my favorites</Button>
          </a>
        </Link>
      )}
    </div>
  );
};
