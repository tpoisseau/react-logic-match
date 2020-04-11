/// <reference types="react" />
declare type JSXElements = JSX.Element | JSX.Element[];
export interface IMatchProps {
    condition: boolean;
    fallback?: JSXElements | ((condition: boolean) => JSXElements) | null | undefined;
    children: JSXElements | ((condition: boolean) => JSXElements);
}
export {};
