import React from "react";

import * as Styled from "./Header.styles";

const Header = () => {
  return (
    <Styled.Header>
      <h1>GEOBRAND</h1>
      <nav>
        <ul>
          <li>Support</li>
          <li>Langue</li>
          <li>Vos favories</li>
        </ul>
      </nav>
    </Styled.Header>
  );
};

export default Header;
