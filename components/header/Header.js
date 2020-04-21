import React from 'react';
import './header.scss';

export default function Header() {
  return (
    <div className="header">
      <img className="logo" src="/assets/v.png"></img>
      <span className="header-title">my favorites</span>
    </div>
  );
}
