import React, { useState, useEffect } from "react";
import SMainMenu from "./MainMenu.styled";
import {
  IUseGetDataProps,
  IJSONString,
  DEFAULTSERVLETURL
} from "../typedefs/typedefs";
import CarInformation from "../atoms/CarInformation";
import ParkingList from "../atoms/ParkingList/ParkingList";
import { Link } from "react-router-dom";

const MainMenu = () => {
  //const [result, setResult] = useState<IJSONString[]>([{ [""]: "" }]);
  const [result, setResult] = useState<IJSONString[]>();
  const [inputText, setInputText] = useState<IJSONString>();
  const [totalCount, setTotalCount] = useState<number>(0);
  const [payload, setPayload] = useState<IUseGetDataProps>({
    url: DEFAULTSERVLETURL,
    method: "GET",
    condition: [totalCount]
  });
  //TEST
  //  setResult(useGetData(payload));

  useEffect(() => {
    !!inputText && !!result && setResult([...result, inputText]);
  }, [inputText]);

  useEffect(() => {
    setResult(result);
  }, [result]);

  const handleDriveOut = (key: IJSONString) => {
    if (!!result) {
      result.splice(result.indexOf(key), 1);
    }
  };

  const handleInput = (value: string) => {
    setTotalCount(totalCount + 1);
    !!result
      ? setResult([
          ...result,
          {
            [value]: `ID:${Date.now().toString()}CT${totalCount}`
          }
        ])
      : setResult([{ [value]: `ID:${Date.now().toString()}CT${totalCount}` }]);
  };

  return (
    <>
      <SMainMenu>
        <table>
          <tbody>
            <tr>
              <td>
                <p>Bisher geparkte Autos: {totalCount}</p>
              </td>
            </tr>
            <tr>
              <td>
                <CarInformation
                  onSubmit={handleInput}
                  key={
                    ((Date.now().toString() as unknown) as number) *
                    Math.random()
                  }
                ></CarInformation>
              </td>
            </tr>
          </tbody>
        </table>
        <table>
          <tbody>
            <tr>
              <td>
                <ParkingList
                  parkingCars={result}
                  driveOut={handleDriveOut}
                  key={
                    ((Date.now().toString() as unknown) as number) *
                    Math.random()
                  }
                />
              </td>
            </tr>
          </tbody>
        </table>
        <br />
        <table>
          <tbody>
            <tr>
              <td>
                <Link to="/statistik">{"Bisherige Parkdaten"}</Link>
              </td>
            </tr>
          </tbody>
        </table>
      </SMainMenu>
    </>
  );
};

export default MainMenu;
