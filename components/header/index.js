import Link from 'next/link';
import './header.scss';
import Button from '../button';

export default () => {
  return (
    <div className="header">
      <Link href="/">
        <a>
          <img className="header-logo" src="/assets/v.png"></img>
        </a>
      </Link>
      <Link href="/favorites">
        <a>
          <Button className="header-button">my favorites</Button>
        </a>
      </Link>
    </div>
  );
};
