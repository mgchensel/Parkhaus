import React, { useState, useEffect } from "react";
import { ICarInformationProps } from "./CarInformation.types";
import EntryButton from "../EntryButton";
import SCarInformation from "./CarInformation.styled";
import { useFocus } from "../../util/hooks";

const CarInformation = ({ onSubmit }: ICarInformationProps) => {
  const [inputValue, setInputValue] = useState<string>("");
  const [submitValue, setSubmitValue] = useState<string>();
  const ref = React.useRef(null);

  useFocus(ref);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.currentTarget.value);
  };

  const submitData = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    !!inputValue && setSubmitValue(inputValue);
  };

  useEffect(() => {
    !!inputValue && !!submitValue && onSubmit(submitValue);
    setInputValue("");
  }, [submitValue]);

  return (
    <SCarInformation onSubmit={submitData}>
      <table>
        <tbody>
          <tr>
            <td>
              <input
                ref={ref}
                type="text"
                value={inputValue}
                onChange={handleChange}
              ></input>
            </td>
          </tr>
        </tbody>
      </table>
      <table>
        <tbody>
          <tr>
            <td>
              <EntryButton />
            </td>
          </tr>
        </tbody>
      </table>
    </SCarInformation>
  );
};

export default CarInformation;
