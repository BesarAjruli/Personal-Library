import Icon from "@mdi/react";
import { mdiFilterOutline, mdiMagnify } from "@mdi/js";

import './Header'

export default function Header() {
  return (
    <>
      <header>
         <img src="" alt="logo" />
        <h1>Bookie</h1>
        <div>
          <input type="search" placeholder="Search book with title or author" />
          <Icon path={mdiMagnify} size={1} />
        </div>
        <Icon path={mdiFilterOutline} size={1} />
      </header>
    </>
  );
}
