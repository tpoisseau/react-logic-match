import {ReactNode} from "react";

export interface IMatchProps {
  condition: boolean;
  fallback: ReactNode | ReactNode[];
  children: ReactNode | ReactNode[];
}
