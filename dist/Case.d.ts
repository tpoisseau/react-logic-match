import React from "react";
import { ICaseProps } from "./ICase";
export default class Case<T> extends React.Component<ICaseProps<T>> {
    render(): JSX.Element | JSX.Element[] | (((value: T) => JSX.Element | JSX.Element[]) & string) | (((value: T) => JSX.Element | JSX.Element[]) & number) | (((value: T) => JSX.Element | JSX.Element[]) & false) | (((value: T) => JSX.Element | JSX.Element[]) & true) | (((value: T) => JSX.Element | JSX.Element[]) & React.ReactNodeArray);
}
