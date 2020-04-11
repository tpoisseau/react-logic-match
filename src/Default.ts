import React from "react";
import {IDefaultProps} from "./IDefault";

export default class Default extends React.Component<IDefaultProps> {
  render() {
    if (typeof this.props.children === 'function') return this.props.children();

    return this.props.children;
  }
}
