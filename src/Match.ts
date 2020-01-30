import {IMatchProps} from "./IMatch";

export default function Match({ condition=false, fallback = null, children }: IMatchProps) {
  if (condition) return children;

  return fallback;
}
