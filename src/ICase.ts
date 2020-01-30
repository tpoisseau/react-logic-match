import {ReactNode} from "react";

export interface ICaseProps<T> {
  value: T;
  children: ReactNode | ReactNode[];
}
