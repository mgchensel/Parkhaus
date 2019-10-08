import { IJSONString } from "../../typedefs/typedefs";

export interface IParkingListProps {
  parkingCars?: IJSONString[];
  driveOut: (car: IJSONString) => void;
}
