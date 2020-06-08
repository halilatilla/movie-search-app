import Link from 'next/link';
import './header.scss';
import Button from '../button';
import { SiteLogo } from '../icons/index';

export default ({ onFavoritesPage }) => {
  return (
    <div className="header">
      <Link href="/">
        <a>
          <SiteLogo width="140px" />
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
