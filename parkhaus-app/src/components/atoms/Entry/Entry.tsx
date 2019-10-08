import { IEntryProps } from "./Entry.types";
import SEntry from "./Entry.styled";
import React from "react";

const Entry = ({ carInfo, onDriveOut }: IEntryProps) => {
  return (
    <SEntry onClick={() => onDriveOut(carInfo)}>
      {`${Object.keys(carInfo)} : ${carInfo[Object.keys(carInfo).toString()]}`}
    </SEntry>
  );
};

export default Entry;
