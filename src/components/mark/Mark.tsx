import React from "react";
import Image from "next/image";
import { LogoDiv, MarkDiv } from "./Mark.style";

import whiteLogo from "assets/images/logos/white.png";
import blackLogo from "assets/images/logos/black.png";

const Mark = ({ onClick, mode }: any) => {
  // return <MarkDiv onClick={onClick}>Madreply</MarkDiv>;
  return (
    <MarkDiv onClick={onClick}>
      <LogoDiv>
        <Image src={mode === "colored" ? blackLogo : whiteLogo} />
      </LogoDiv>
      Madreply
    </MarkDiv>
  );
};

export default Mark;
