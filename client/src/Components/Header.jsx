import Icon from "@mdi/react";
import { mdiFilterOutline, mdiMagnify } from "@mdi/js";
import BookieLogo from '../assets/Bookie_LogoOnly-removebg-preview.png';

import "./Header.css";

export default function Header() {
  return (
    <>
      <header>
        <img
          src={BookieLogo}
          alt="logo"
          className="logo"
        />
        <div className="searchCont">
          <input type="search" placeholder="Search book with title or author" />
          <Icon path={mdiMagnify} size={1.3} className="searchIcon" />
        </div>
        <Icon path={mdiFilterOutline} size={1.3} className="filterIcon" />
      </header>
    </>
  );
}
