import React from "react";
import {IDefaultProps} from "./IDefault";

export default class Default extends React.Component<IDefaultProps> {
  render() {
    return this.props.children;
  }
}
