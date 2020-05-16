import Link from 'next/link';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import './blur.scss';
import './header.scss';
import Button from '../button';

export default ({ onFavoritesPage }) => {
  return (
    <div className="header">
      <Link href="/">
        <a>
          <img src="/assets/site-logo.svg" alt="" className="header-logo" />
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
