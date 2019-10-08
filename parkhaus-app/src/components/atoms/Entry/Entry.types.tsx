import { IJSONString } from "../../typedefs/typedefs";

export interface IEntryProps {
  onDriveOut: (key: IJSONString) => void;
  carInfo: IJSONString;
}
