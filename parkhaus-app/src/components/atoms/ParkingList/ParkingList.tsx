import { IParkingListProps } from "./ParkingList.types";
import React, { useState, useEffect } from "react";
import Entry from "../Entry";
import SParkingList from "./ParkingList.styled";
import { IJSONString } from "../../typedefs/typedefs";

/*
In dieser Komponente musst du unten bei {car} bei bedarf die einzelnen einträge auswählen (z.B. car.id, car.name usw), 
sonst gibt der sowas wie das hier aus: {entry1: value, entry2: value, entry3: value ...}
 */
const ParkingList = ({ parkingCars, driveOut }: IParkingListProps) => {
  const [count, setCount] = useState<number>(
    !!parkingCars ? parkingCars.length : 0
  );
  const [leavingCar, setLeavingCar] = useState<IJSONString>();

  const handleDriveOut = (car: IJSONString) => {
    setCount(count - 1);
    setLeavingCar(car);
  };

  useEffect(() => {
    !!leavingCar && driveOut(leavingCar);
    setLeavingCar(undefined);
  }, [count]);

  return (
    <SParkingList>
      <tbody>
        <tr>
          <th>Zurzeit Parkende Autos: {count}</th>
        </tr>

        {parkingCars ? (
          parkingCars.map(car => (
            <tr
              key={
                ((Date.now().toString() as unknown) as number) * Math.random()
              }
            >
              <td>
                <Entry carInfo={car} onDriveOut={handleDriveOut} />
                {/* <td>{`${Object.keys(car)} : ${
              car[Object.keys(car).toString()]
            }`}</td> */}
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td></td>
          </tr>
        )}
      </tbody>
    </SParkingList>
  );
};

export default ParkingList;
