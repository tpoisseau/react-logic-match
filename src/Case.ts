import React from "react";
import {ICaseProps} from "./ICase";

export default class Case<T> extends React.Component<ICaseProps<T>> {
  render() {
    if (typeof this.props.children === 'function') return this.props.children(this.props.value);

    return this.props.children;
  }
}
