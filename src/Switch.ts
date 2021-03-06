import React from "react";
import Case from "./Case";
import Default from "./Default";
import {ISwitchProps} from "./ISwitch";

const SUPPORTED_TYPES = [Case, Default];

export default function Switch<T>(props: ISwitchProps<T>): JSX.Element | null {
  const {value, children} = props;

  const childs = React.Children.toArray(children);
  let defaultElement: React.ReactElement<Default> | void = undefined;
  let caseElementIndex = -1;
  for (const [key, element] of childs.entries()) {
    // @ts-ignore
    if (!SUPPORTED_TYPES.includes(element.type)) continue;
    // @ts-ignore
    if (element.props.value === value) caseElementIndex = key;
    // @ts-ignore
    if (element.type === Default) defaultElement = element;

    if (defaultElement && caseElementIndex >= 0) break;
  }

  if (caseElementIndex >= 0) return children[caseElementIndex];
  if (defaultElement) return defaultElement;

  if (props.debug) {
    console.warn(`Switch: no Case found and Default not provided`, props, childs);
  }

  return null;
}
