import { useEffect, useState } from "react";
import { IUseGetDataProps, IJSONString } from "../typedefs/typedefs";

export const useGetData = ({
  url,
  method,
  payload,
  condition = []
}: IUseGetDataProps): IJSONString[] => {
  const [data, setData] = useState<IJSONString[]>();
  useEffect(() => {
    fetch(url, { method: method, body: JSON.stringify(payload) })
      .then(result => result.json())
      .then(data => setData(data));
  }, condition);
  return !!data ? data : [{ [""]: "" }];
};

export const useFocus = (ref: unknown) => {
  useEffect(() => {
    // @ts-ignore
    !!ref && !!ref.current && ref.current.focus();
  }, []);
};
