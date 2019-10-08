import React from "react";
import { IEntryButtonProps } from "./EntryButton.types";
import { StyledButton } from "./EntryButton.styled";

const EntryButton = ({ children }: IEntryButtonProps) => {
  return (
    <StyledButton type="submit" value="Submit">
      <img src={require("../../../static/images/cenis.png")} />
      {/* {!children ? `Einfahrt` : { children }} */}
    </StyledButton>
  );
};

export default EntryButton;
