import React from "react";
import { IDefaultProps } from "./IDefault";
export default class Default extends React.Component<IDefaultProps> {
    render(): JSX.Element | JSX.Element[] | ((() => JSX.Element | JSX.Element[]) & string) | ((() => JSX.Element | JSX.Element[]) & number) | ((() => JSX.Element | JSX.Element[]) & false) | ((() => JSX.Element | JSX.Element[]) & true) | ((() => JSX.Element | JSX.Element[]) & React.ReactNodeArray);
}
