/// <reference types="react" />
declare type JSXElements = JSX.Element | JSX.Element[];
export interface IDefaultProps {
    children: JSXElements | (() => JSXElements);
}
export {};
