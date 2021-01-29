import React from 'react';

import { BellIcon, UserProfileIcon, ChevronDown } from '../../../assets/svg';

import './styles.scss';

const nav = () => {
  return (
    <nav className="nav">
      <ul className="nav__start">
        <li>
          <a href="/" className="_home_link">
            <span>Home</span>
          </a>
        </li>

        <li>
          <a href="/" className="_entries_link">
            <span>Entries</span>
          </a>
        </li>

        <li className="_active_link">
          <a href="/" className="_divisions_link">
            <span>Divisions</span>
          </a>
        </li>
      </ul>

      <ul className="nav__end">
        <li>
          <input type="search" />
        </li>

        <li>
          <button className="_notifications_button" aria-label="notifications">
            <BellIcon />
          </button>
        </li>

        <li>
          <button className="_user_profile_btn" aria-label="profile">
            <span>
              <UserProfileIcon />
            </span>
            <ChevronDown style={{ height: '6px' }} />
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default nav;
