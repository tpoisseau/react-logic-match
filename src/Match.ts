import {IMatchProps} from "./IMatch";

export default function Match({ condition=false, fallback = null, children }: IMatchProps) {
  if (condition) {
    if (typeof children === 'function') return children(condition);

    return children;
  }

  if (typeof fallback === 'function') return fallback(condition);

  return fallback;
}
