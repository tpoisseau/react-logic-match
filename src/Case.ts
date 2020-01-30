import React from "react";
import {ICaseProps} from "./ICase";

export default class Case<T> extends React.Component<ICaseProps<T>> {
  render() {
    return this.props.children;
  }
}
