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
          <LazyLoadImage effect="blur" width={140} height={50} src="/assets/site-logo.png" />
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
