import Link from 'next/link';
import Button from './Button';
import { SiteLogo } from './icons/index';

export default function Header({ onFavoritesPage }) {
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
}
