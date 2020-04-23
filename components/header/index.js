import Link from 'next/link';
import './header.scss';
import Button from '../button';

export default () => {
  return (
    <div className="header">
      <img className="header-logo" src="/assets/v.png"></img>
      <Link href="/favorites">
        <a>
          <Button className="header-button">my favorites</Button>
        </a>
      </Link>
    </div>
  );
};
