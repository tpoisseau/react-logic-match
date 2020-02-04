import React from "react";
import { IDefaultProps } from "./IDefault";
export default class Default extends React.Component<IDefaultProps> {
    render(): JSX.Element | (JSX.Element & string) | (JSX.Element & number) | (JSX.Element & false) | (JSX.Element & true) | (JSX.Element & React.ReactElement<any, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)>) | (JSX.Element & React.ReactNodeArray) | (JSX.Element & React.ReactPortal);
}
